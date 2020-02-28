import React, { useContext } from 'react';
import { OpenAppsContainer, AppIcon } from './style';
import { FolderContext } from '../../contexts/folderContext';
import Tooltip from '@material-ui/core/Tooltip';

const OpenApps = () => {
    const { folderState, activeFolder, minimizeUp, minimizeDown } = useContext(
        FolderContext
    );

    const showIcons = () => {
        return folderState.openApps.map(openApp => {
            return folderState.apps.map(
                app =>
                    app.id === openApp.id && (
                        <Tooltip
                            title={app.appName}
                            placement='top'
                            enterDelay={500}
                            key={app.id}
                        >
                            <AppIcon
                                minimize={app.isMinimize}
                                appIndex={app.appIndex}
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
    };

    return <OpenAppsContainer>{showIcons()}</OpenAppsContainer>;
};

export default OpenApps;
