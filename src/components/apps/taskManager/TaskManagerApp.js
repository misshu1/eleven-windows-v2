import React, { useCallback, useEffect, useState } from 'react';

import { useDispatchFolderContext, useFolderContext } from 'contexts';
import FolderApp from 'components/folder/FolderApp';
import ButtonApp from './ButtonApp';
import { Container, Table, TableHead } from './style';
import WidgetApp from './WidgetApp';

const TaskManagerApp = () => {
    const { closeFolder } = useDispatchFolderContext();
    const { folderState } = useFolderContext();
    const [selectedApp, setSelectedApp] = useState([]);
    const [disableBtn, setDisableBtn] = useState(true);

    useEffect(() => {
        setDisableBtn(true);
        setSelectedApp(
            folderState.openApps.map((app) => {
                return { ...app, isSelected: false };
            })
        );
    }, [folderState.openApps]);

    const closeSelectedApp = useCallback(() => {
        const noneSelected = selectedApp.every(
            (app) => app.isSelected === false
        );
        if (noneSelected) {
            return;
        }

        const app = selectedApp.find((app) => app.isSelected === true);
        closeFolder(app.id);
    }, [closeFolder, selectedApp]);

    const getSelectedApp = (id) => {
        const findApp = selectedApp.find(
            (app) => app.id === id && app.isSelected === true
        );

        if (findApp) {
            return findApp.isSelected;
        }
    };

    const handleSelectApp = (id) => {
        setDisableBtn(false);
        setSelectedApp((prevState) =>
            prevState.map((app) =>
                app.id === id
                    ? { ...app, isSelected: true }
                    : { ...app, isSelected: false }
            )
        );
    };

    const showApps = () => {
        const widget = folderState.openApps.map((app) => {
            return (
                <WidgetApp
                    key={app.id}
                    appId={app.id}
                    widgetIcon={app.widgetIcon}
                    getSelectedApp={getSelectedApp}
                    handleSelectApp={handleSelectApp}
                    iconDisplayName={app.appName}
                    openTime={app.openSince}
                />
            );
        });
        return widget;
    };

    return (
        <FolderApp appId={5} marginLeft={110} marginTop={110}>
            <Container>
                <Table>
                    <TableHead>
                        <div className='app-name'>Name</div>
                        <div className='category'>Open Time</div>
                    </TableHead>
                    {showApps()}
                </Table>
                <ButtonApp
                    closeSelectedApp={closeSelectedApp}
                    disableBtn={disableBtn}
                />
            </Container>
        </FolderApp>
    );
};
export default TaskManagerApp;
