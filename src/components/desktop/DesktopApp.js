import React, { useContext, useCallback } from 'react';
import { FolderContext, ICON_LOCATION } from '../../contexts/folderContext';
import { Desktop } from './style';
import IconContainer from './DesktopIconApp';

const DesktopApp = () => {
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

    return <Desktop>{desktopIcons()}</Desktop>;
};

export default DesktopApp;
