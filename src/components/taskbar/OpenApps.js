import React, { useContext } from 'react';
import { OpenAppsContainer, AppIcon } from './style';
import { FolderContext, FOLDER_ACTIONS } from '../../contexts/folderContext';
import Tooltip from '@material-ui/core/Tooltip';

const OpenApps = () => {
    const { folderState, folderDispatch } = useContext(FolderContext);

    const showIcons = () => {
        return folderState.openApps.map(item => {
            return folderState.apps.map(
                app =>
                    app.id === item.id && (
                        <Tooltip
                            title={item.appName}
                            placement='top'
                            enterDelay={500}
                            key={item.id}
                        >
                            <AppIcon
                                minimize={app.isMinimize}
                                appIndex={app.appIndex}
                                onClick={() => {
                                    if (app.isMinimize === true) {
                                        folderDispatch({
                                            type: FOLDER_ACTIONS.minimize,
                                            id: item.id,
                                            boolean: false
                                        });
                                    } else if (
                                        app.isMinimize !== true &&
                                        app.appIndex !== 100
                                    ) {
                                        folderDispatch({
                                            type: FOLDER_ACTIONS.minimize,
                                            id: item.id,
                                            boolean: true
                                        });
                                    }
                                    folderDispatch({
                                        type: FOLDER_ACTIONS.active,
                                        id: item.id
                                    });
                                }}
                            >
                                <img
                                    src={item.widgetIcon}
                                    alt={item.appName}
                                    draggable='false'
                                />
                            </AppIcon>
                        </Tooltip>
                    )
            );
        });
    };

    return <OpenAppsContainer>{showIcons()}</OpenAppsContainer>;
};

export default OpenApps;
