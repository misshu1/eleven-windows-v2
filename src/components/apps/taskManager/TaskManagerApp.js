import React, { useCallback, useEffect, useState } from 'react';

import { useDispatchFolderContext, useFolderContext } from '../../../contexts/folderContext';
import FolderApp from '../../folder/FolderApp';
import ButtonApp from './ButtonApp';
import { Container, Table, TableHead } from './style';
import WidgetApp from './WidgetApp';

const TaskManagerApp = () => {
    const { closeFolder } = useDispatchFolderContext();
    const { folderState } = useFolderContext();
    const [selectedApp, setSelectedApp] = useState([]);
    const [disableBtn, setDisableBtn] = useState(true);

    const timeSince = (previous) => {
        const msPerMinute = 60000;
        const msPerHour = 3600000;
        const msPerDay = 86400000;
        const msPerMonth = 2592000000;
        const msPerYear = 946080000000;

        const currentDay = new Date().getTime();
        const elapsed = currentDay - new Date(previous).getTime();

        if (elapsed < msPerMinute) {
            return Math.round(elapsed / 1000) + ' seconds';
        } else if (elapsed < msPerHour) {
            return Math.round(elapsed / msPerMinute) + ' minutes';
        } else if (elapsed < msPerDay) {
            return Math.round(elapsed / msPerHour) + ' hours';
        } else if (elapsed < msPerMonth) {
            return Math.round(elapsed / msPerDay) + ' days';
        } else if (elapsed < msPerYear) {
            return Math.round(elapsed / msPerMonth) + ' months';
        } else {
            return Math.round(elapsed / msPerYear) + ' years';
        }
    };

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
            setDisableBtn(false);
            return findApp.isSelected;
        }
    };

    const handleSelectApp = (id) => {
        setSelectedApp(
            selectedApp.map((app) =>
                app.id === id
                    ? { ...app, isSelected: true }
                    : { ...app, isSelected: false }
            )
        );
    };

    const createSelectedAppObj = useCallback(() => {
        return folderState.openApps.map((app) => {
            setDisableBtn(true);
            return { ...app, isSelected: false };
        });
    }, [folderState.openApps]);

    useEffect(() => {
        setSelectedApp(createSelectedAppObj());
    }, [createSelectedAppObj, folderState.openApps]);

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
                    timeSince={timeSince}
                />
            );
        });
        return widget;
    };

    return (
        <FolderApp appId={5} marginLeft='7rem' marginTop='7rem'>
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
