import React, { lazy, Suspense, useRef } from 'react';

import useOnClickOutside from '../../../../hooks/useOnClickOutside';
import SpinnerGlobalApp from '../../../style/SpinnerGlobalApp';
import { useStartMenuContext } from './contexts/startMenuContext';
import LogoIconApp from './icons/logo/LogoIconApp';

const StartMenuApp = lazy(() => import('./apps/startMenu/StartMenuApp'));

const StartMenuAndLogo = () => {
    const { isStartMenuOpen, closeStartMenu } = useStartMenuContext();
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
                {isStartMenuOpen && (
                    <StartMenuApp startMenuRef={startMenuRef} />
                )}
            </Suspense>
        </>
    );
};
export default StartMenuAndLogo;
