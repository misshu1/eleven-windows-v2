import React, { useContext, useCallback } from 'react';
import { TaskbarContext } from '../../contexts/taskbarContext';
import { Desktop } from './style';
import IconContainer from './DesktopIconApp';
import { FolderContext, ICON_LOCATION } from '../../contexts/folderContext';

const DesktopApp = () => {
    const { closeAllApps } = useContext(TaskbarContext);
    const { folderState, sortByAppName } = useContext(FolderContext);

    const desktopIcons = useCallback(() => {
        const apps = folderState.apps.sort(sortByAppName);
        return apps.map(app => {
            return app.iconLocation.map(
                location =>
                    location === ICON_LOCATION.desktop && (
                        <IconContainer
                            key={app.id}
                            appId={app.id}
                            iconName={app.appName}
                            link={app.link}
                            widgetIcon={app.widgetIcon}
                        />
                    )
            );
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <Desktop onClick={closeAllApps}>{desktopIcons()}</Desktop>;
};

export default DesktopApp;
