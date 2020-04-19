import React, { useRef, useCallback } from 'react';
import {
    useFolderContext,
    ICON_LOCATION,
} from '../../../../contexts/folderContext';
import { Desktop } from './style';
import DesktopIconApp from './DesktopIconApp';

const WindowsDesktopApp = () => {
    const { folderState, sortByAppName } = useFolderContext();
    const apps = useRef(folderState.apps.sort(sortByAppName));

    const desktopIcons = useCallback(() => {
        return apps.current.map((app) => {
            return app.iconLocation.map(
                (location) =>
                    location === ICON_LOCATION.desktop && (
                        <DesktopIconApp
                            key={app.id}
                            appId={app.id}
                            iconName={app.appName}
                            link={app.link}
                            widgetIcon={app.widgetIcon}
                        />
                    )
            );
        });
    }, []);
    return <Desktop>{desktopIcons()}</Desktop>;
};

export default WindowsDesktopApp;
