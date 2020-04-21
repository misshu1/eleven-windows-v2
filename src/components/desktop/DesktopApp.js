import React from 'react';

import { useSettingsContext } from '../../contexts/settingsContext';
import { SideMenuProvider } from '../workspace/linux/contexts/sideMenuContext';
import DesktopLinuxApp from '../workspace/linux/desktop/DesktopLinuxApp';
import DesktopWindowsApp from '../workspace/windows/desktop/DesktopWindowsApp';

const DesktopApp = () => {
    const {
        isLinuxSelected,
        isWindowsSelected,
        selectWindowsOS,
        selectLinuxOS,
    } = useSettingsContext();

    return (
        <>
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: '6.5rem',
                    right: 0,
                    bottom: 'auto',
                }}
            >
                <button onClick={selectWindowsOS}>Windows OS</button>
                <button onClick={selectLinuxOS}>Linux OS</button>
                <h3 style={{ color: '#b6b8de' }}>
                    Some features might be disabled, we are working on
                    refactoring our codebase.
                </h3>
            </div>
            {isWindowsSelected() && <DesktopWindowsApp />}
            {isLinuxSelected() && (
                <SideMenuProvider>
                    <DesktopLinuxApp />
                </SideMenuProvider>
            )}
        </>
    );
};

export default DesktopApp;
