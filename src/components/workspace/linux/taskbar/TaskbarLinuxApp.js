import Tooltip from '@material-ui/core/Tooltip';
import React, { useCallback } from 'react';
import ReactDOM from 'react-dom';

import { useDispatchFolderContext, useFolderContext } from '../../../../contexts/folderContext';
import { AppIcon, Container } from './style';

const TaskbarLinuxApp = () => {
    const {
        checkUserPermisions,
        folderState,
        isFolderActive,
    } = useFolderContext();
    const {
        activeFolder,
        minimizeUp,
        minimizeDown,
    } = useDispatchFolderContext();

    const showIcons = useCallback(() => {
        return folderState.openApps.map((openApp) => {
            return folderState.apps.map(
                (app) =>
                    app.id === openApp.id &&
                    checkUserPermisions(app) && (
                        <Tooltip
                            title={app.appName}
                            placement='top'
                            enterDelay={500}
                            key={app.id}
                        >
                            <AppIcon
                                minimize={app.isMinimize}
                                isActive={isFolderActive(app.id)}
                                onClick={() => {
                                    if (app.isMinimize === true) {
                                        minimizeUp(app.id);
                                    } else if (
                                        app.isMinimize !== true &&
                                        app.appIndex !== 100
                                    ) {
                                        minimizeDown(app.id);
                                    }
                                    activeFolder(app.id);
                                }}
                            >
                                {app.widgetIcon}
                            </AppIcon>
                        </Tooltip>
                    )
            );
        });
    }, [
        activeFolder,
        checkUserPermisions,
        folderState,
        minimizeDown,
        minimizeUp,
        isFolderActive,
    ]);

    return ReactDOM.createPortal(
        <Container>{showIcons()}</Container>,
        document.getElementById('taskbar')
    );
};

export default TaskbarLinuxApp;
