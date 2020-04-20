import React, { useContext } from 'react';

import { OS_THEME, ThemeContext } from '../../contexts/themeContext';
import { SideMenuProvider } from '../workspace/linux/contexts/sideMenuContext';
import DesktopLinuxApp from '../workspace/linux/desktop/DesktopLinuxApp';
import DesktopWindowsApp from '../workspace/windows/desktop/DesktopWindowsApp';

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
            <h3 style={{ color: '#b6b8de' }}>
                Some features might be disabled, we are working on refactoring
                our codebase.
            </h3>
            {currentOS === OS_THEME.windows && <DesktopWindowsApp />}
            {currentOS === OS_THEME.linux && (
                <SideMenuProvider>
                    <DesktopLinuxApp />
                </SideMenuProvider>
            )}
        </>
    );
};

export default DesktopApp;
