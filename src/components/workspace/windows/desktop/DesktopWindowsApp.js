import React, { useCallback, useRef } from 'react';

import { ICON_LOCATION, useFolderContext } from '../../../../contexts/folderContext';
import DesktopIconApp from './DesktopIconApp';
import { Desktop } from './style';

const DesktopWindowsApp = () => {
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

export default DesktopWindowsApp;
