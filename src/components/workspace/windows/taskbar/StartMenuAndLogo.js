import React, { lazy, Suspense, useRef } from 'react';

import useOnClickOutsideMultipleRefs from '../../../../hooks/useOnClickOutsideMultipleRefs';
import SpinnerApp from '../../../style/SpinnerApp';
import { useStartMenuContext } from './contexts/startMenuContext';
import LogoIconApp from './icons/logo/LogoIconApp';

const StartMenuApp = lazy(() => import('./apps/startMenu/StartMenuApp'));

const StartMenuAndLogo = () => {
    const { isStartMenuOpen, closeStartMenu } = useStartMenuContext();
    const startMenuRef = useRef(null);
    const logoRef = useRef(null);

    useOnClickOutsideMultipleRefs(
        [startMenuRef, logoRef],
        () => isStartMenuOpen && closeStartMenu()
    );

    return (
        <>
            <LogoIconApp logoRef={logoRef} />
            <Suspense fallback={<SpinnerApp delay={200} />}>
                {isStartMenuOpen && (
                    <StartMenuApp startMenuRef={startMenuRef} />
                )}
            </Suspense>
        </>
    );
};
export default StartMenuAndLogo;
