import React, { lazy, Suspense, useRef } from 'react';

import { useSettingsContext } from '../../../../contexts/settingsContext';
import useOnClickOutside from '../../../../hooks/useOnClickOutside';
import SpinnerGlobalApp from '../../../style/SpinnerGlobalApp';
import { useStartMenuContext } from './contexts/startMenuContext';
import LogoIconApp from './icons/logo/LogoIconApp';

const StartMenuApp = lazy(() => import('./apps/startMenu/StartMenuApp'));
const AppsMenu = lazy(() =>
    import('../../mobile/taskbar/apps/appsMenu/AppsMenu')
);

const StartMenuAndLogo = () => {
    const { isStartMenuOpen, closeStartMenu } = useStartMenuContext();
    const { isWindowsSelected, isMobileSelected } = useSettingsContext();
    const startMenuRef = useRef(null);
    const logoRef = useRef(null);

    useOnClickOutside(
        [startMenuRef, logoRef],
        () => isStartMenuOpen && closeStartMenu()
    );

    return (
        <>
            <LogoIconApp logoRef={logoRef} />
            <Suspense fallback={<SpinnerGlobalApp delay={200} />}>
                {isWindowsSelected() && isStartMenuOpen && (
                    <StartMenuApp startMenuRef={startMenuRef} />
                )}
                {isMobileSelected() && isStartMenuOpen && <AppsMenu />}
            </Suspense>
        </>
    );
};
export default StartMenuAndLogo;
