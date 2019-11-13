import React, { useContext, useState, useEffect, useCallback } from 'react';
import { FolderContext } from '../../../contexts/FolderContext';
import { IndexContext } from '../../../contexts/indexContext';
import FolderApp from '../../folder/FolderApp';
import WidgetApp from './WidgetApp';
import { Container, TableHead } from './style';

const TaskManagerApp = () => {
    const [selectedApp, setSelectedApp] = useState([]);
    const { folder } = useContext(FolderContext);
    const { index } = useContext(IndexContext);
    const { openApps } = folder;

    const getSelectedAppName = app => {
        const findApp = selectedApp.find(
            item => item.appName === app && item.isSelected === true
        );

        if (findApp) {
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

            return { appName: app, isSelected: false };
        });
    }, [openApps]);

    useEffect(() => {
        setSelectedApp(createSelectedAppObj());
    }, [createSelectedAppObj, openApps]);

    const showApps = () => {
        return openApps.map(item => {
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
    };

    return (
        <FolderApp
            appMinimize={'taskManagerMinimize'}
            appOpen={'taskManagerOpen'}
            appIndexName='taskManager'
            appIndexValue={index.taskManager}
            folderName='Task Manager'
            open={folder.taskManagerOpen}
            marginLeft='7rem'
            marginTop='7rem'
        >
            <Container>
                <TableHead>
                    <div className='app-name'>Name</div>
                    <div className='category'>Ram</div>
                    <div className='category'>Open Time</div>
                    <div className='category'>Ceva</div>
                </TableHead>
                {showApps()}
            </Container>
        </FolderApp>
    );
};
export default TaskManagerApp;
