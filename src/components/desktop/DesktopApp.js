import React from 'react';

import { useSettingsContext } from '../../contexts/settingsContext';
import useMediaQuery from '../../hooks/useMediaQuery';
import { SideMenuProvider } from '../workspace/linux/contexts/sideMenuContext';
import DesktopLinuxApp from '../workspace/linux/desktop/DesktopLinuxApp';
import DesktopMobileApp from '../workspace/mobile/desktop/DesktopMobileApp';
import DesktopWindowsApp from '../workspace/windows/desktop/DesktopWindowsApp';

const DesktopApp = () => {
    const {
        isLinuxSelected,
        isWindowsSelected,
        isMobileSelected,
        selectWindowsOS,
        selectLinuxOS,
    } = useSettingsContext();
    const isMobile = useMediaQuery('(max-width: 450px)');

    return (
        <>
            {!isMobile && (
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
                </div>
            )}
            {isMobileSelected() && <DesktopMobileApp />}
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
