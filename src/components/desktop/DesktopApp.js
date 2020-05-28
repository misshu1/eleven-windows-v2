import React, { lazy, Suspense } from 'react';

import { useSettingsContext } from '../../contexts/settingsContext';
import useMediaQuery from '../../hooks/useMediaQuery';
import SpinnerApp from '../style/SpinnerApp';
import { SideMenuProvider } from '../workspace/linux/contexts/sideMenuContext';

const DesktopLinuxApp = lazy(() =>
    import('../workspace/linux/desktop/DesktopLinuxApp')
);
const DesktopMobileApp = lazy(() =>
    import('../workspace/mobile/desktop/DesktopMobileApp')
);
const DesktopWindowsApp = lazy(() =>
    import('../workspace/windows/desktop/DesktopWindowsApp')
);

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
            {isMobileSelected() && (
                <Suspense fallback={<SpinnerApp delay={200} />}>
                    <DesktopMobileApp />
                </Suspense>
            )}
            {isWindowsSelected() && (
                <Suspense fallback={<SpinnerApp delay={200} />}>
                    <DesktopWindowsApp />
                </Suspense>
            )}
            {isLinuxSelected() && (
                <Suspense fallback={<SpinnerApp delay={200} />}>
                    <SideMenuProvider>
                        <DesktopLinuxApp />
                    </SideMenuProvider>
                </Suspense>
            )}
        </>
    );
};

export default DesktopApp;
