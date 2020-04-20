import React, { Suspense, useState, useRef, useCallback, lazy } from 'react';
import SpinnerApp from '../../../style/SpinnerApp';
import { Container } from './style';
import LogoIconApp from './icons/logo/LogoIconApp';
import useOnClickOutsideMultipleRefs from '../../../../hooks/useOnClickOutsideMultipleRefs';

const StartMenuApp = lazy(() => import('./apps/startMenu/StartMenuApp'));

const TaskbarWindowsApp = () => {
    const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
    const startMenuRef = useRef(null);
    const logoRef = useRef(null);

    useOnClickOutsideMultipleRefs(
        [startMenuRef, logoRef],
        () => isStartMenuOpen && setIsStartMenuOpen(false)
    );

    const toggleStartMenu = useCallback(() => {
        setIsStartMenuOpen((prevState) => !prevState);
    }, [setIsStartMenuOpen]);

    const closeStartMenu = useCallback(() => {
        setIsStartMenuOpen(false);
    }, [setIsStartMenuOpen]);

    return (
        <Container>
            <LogoIconApp
                logoRef={logoRef}
                isStartMenuOpen={isStartMenuOpen}
                toggleStartMenu={toggleStartMenu}
            />
            <Suspense fallback={<SpinnerApp delay={200} />}>
                {isStartMenuOpen && (
                    <StartMenuApp
                        closeStartMenu={closeStartMenu}
                        startMenuRef={startMenuRef}
                        isStartMenuOpen={isStartMenuOpen}
                        setIsStartMenuOpen={setIsStartMenuOpen}
                    />
                )}
            </Suspense>
            {/* <OpenApps />
            <CartIconApp />
            <LanguageIconApp />
            <ClockIconApp />
            <NotificationIconApp /> */}
        </Container>
    );
};

export default TaskbarWindowsApp;
