import Tooltip from '@material-ui/core/Tooltip';
import React from 'react';

import { useDispatchFolderContext, useFolderContext } from '../../../../../../contexts/folderContext';
import { AppIcon, Container } from './style';

const OpenApps = () => {
    const { folderState } = useFolderContext();
    const {
        activeFolder,
        minimizeUp,
        minimizeDown,
    } = useDispatchFolderContext();

    const showIcons = () => {
        return folderState.openApps.map((openApp) => {
            return folderState.apps.map(
                (app) =>
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

    return <Container>{showIcons()}</Container>;
};
export default OpenApps;
