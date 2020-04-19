import React, { useContext } from 'react';

import { OS_THEME, ThemeContext } from '../../contexts/themeContext';
import { SideMenuProvider } from '../workspace/linux/contexts/sideMenuContext';
import LinuxDesktopApp from '../workspace/linux/desktop/LinuxDesktopApp';
import WindowsDesktopApp from '../workspace/windows/desktop/WindowsDesktopApp';

const DesktopApp = () => {
    const { currentOS, setCurrentOS } = useContext(ThemeContext);

    return (
        <>
            <button onClick={() => setCurrentOS(OS_THEME.windows)}>
                Windows OS
            </button>
            <button onClick={() => setCurrentOS(OS_THEME.linux)}>
                Linux OS
            </button>
            {currentOS === OS_THEME.windows && <WindowsDesktopApp />}
            {currentOS === OS_THEME.linux && (
                <SideMenuProvider>
                    <LinuxDesktopApp />
                </SideMenuProvider>
            )}
        </>
    );
};

export default DesktopApp;
