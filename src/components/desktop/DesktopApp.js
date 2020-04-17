import React, { useCallback, useContext, useRef } from 'react';

import { ICON_LOCATION, useFolderContext } from '../../contexts/folderContext';
import { OS_THEME, ThemeContext } from '../../contexts/themeContext';
import DesktopIconApp from './DesktopIconApp';
import { Desktop } from './style';
import LinuxDesktopApp from '../linux/desktop/LinuxDesktopApp';
import { SideMenuProvider } from '../linux/contexts/sideMenuContext';

const DesktopApp = () => {
    const { folderState, sortByAppName } = useFolderContext();
    const { currentOS, setCurrentOS } = useContext(ThemeContext);
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

    return (
        <>
            <button onClick={() => setCurrentOS(OS_THEME.windows)}>
                Windows OS
            </button>
            <button onClick={() => setCurrentOS(OS_THEME.linux)}>
                Linux OS
            </button>
            {currentOS === OS_THEME.windows && (
                <Desktop>{desktopIcons()}</Desktop>
            )}
            {currentOS === OS_THEME.linux && (
                <SideMenuProvider>
                    <LinuxDesktopApp />
                </SideMenuProvider>
            )}
        </>
    );
};

export default DesktopApp;
