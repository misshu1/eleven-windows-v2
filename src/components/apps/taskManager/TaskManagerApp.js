import React, { useContext, useState, useEffect, useCallback } from 'react';
import { FolderContext } from '../../../contexts/folderContext';
import { IndexContext } from '../../../contexts/indexContext';
import FolderApp from '../../folder/FolderApp';
import WidgetApp from './WidgetApp';
import ButtonApp from './ButtonApp';
import { Container, Table, TableHead } from './style';

const TaskManagerApp = () => {
    const [selectedApp, setSelectedApp] = useState([]);
    const [disableBtn, setDisableBtn] = useState(true);
    const { folder, closeApp } = useContext(FolderContext);
    const { index } = useContext(IndexContext);
    const { openApps } = folder;

    const closeSelectedApp = useCallback(() => {
        const noneSelected = selectedApp.every(
            item => item.isSelected === false
        );
        if (noneSelected) {
            return;
        }

        const app = selectedApp.filter(item => item.isSelected === true);

        const { appName, appMinimize } = app[0];
        closeApp(appName, appMinimize);
        setSelectedApp(selectedApp.filter(item => item.isSelected === false));
    }, [closeApp, selectedApp]);

    const getSelectedAppName = app => {
        const findApp = selectedApp.find(
            item => item.appName === app && item.isSelected === true
        );

        if (findApp) {
            setDisableBtn(false);
            return findApp.isSelected;
        }
    };

    const handleSelectApp = app => {
        setSelectedApp(
            selectedApp.map(item =>
                item.appName === app
                    ? { ...item, isSelected: true }
                    : { ...item, isSelected: false }
            )
        );
    };

    const createSelectedAppObj = useCallback(() => {
        return openApps.map(item => {
            const app = item[0];
            const minimize = item[3];
            setDisableBtn(true);

            return { appName: app, appMinimize: minimize, isSelected: false };
        });
    }, [openApps]);

    useEffect(() => {
        setSelectedApp(createSelectedAppObj());
    }, [createSelectedAppObj, openApps]);

    const showApps = () => {
        const widget = openApps.map(item => {
            const app = item[0];
            const icon = item[1];
            const appDisplayName = item[4];

            return (
                <WidgetApp
                    key={app}
                    app={app}
                    widgetIcon={icon}
                    getSelectedAppName={getSelectedAppName}
                    handleSelectApp={handleSelectApp}
                    iconDisplayName={appDisplayName}
                    selectedApp={selectedApp[app]}
                />
            );
        });
        return widget;
    };

    return (
        <FolderApp
            appMinimize={'taskManagerMinimize'}
            appOpen={'taskManagerOpen'}
            appIndexName='taskManager'
            appIndexValue={index.taskManager}
            folderName='Task Manager'
            marginLeft='7rem'
            marginTop='7rem'
        >
            <Container>
                <Table>
                    <TableHead>
                        <div className='app-name'>Name</div>
                        <div className='category'>Ram</div>
                        <div className='category'>Open Time</div>
                        <div className='category'>Ceva</div>
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