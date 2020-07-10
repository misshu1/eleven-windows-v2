import React, { lazy, Suspense, useCallback, useRef, useState } from 'react';

import useOnClickOutside from '../../../../hooks/useOnClickOutside';
import SpinnerApp from '../../../common/SpinnerApp';
import LogoIconApp from './icons/logo/LogoIconApp';

const AppsMenu = lazy(() =>
    import('../../mobile/taskbar/apps/appsMenu/AppsMenu')
);

const AppsMenuAndLogo = () => {
    const [isAppsMenuOpen, setIsAppsMenuOpen] = useState(false);
    const appsMenuRef = useRef(null);
    const logoRef = useRef(null);

    useOnClickOutside(
        [appsMenuRef, logoRef],
        () => isAppsMenuOpen && closeAppsMenu()
    );

    const toggleAppsMenu = useCallback(() => {
        setIsAppsMenuOpen((prevState) => !prevState);
    }, [setIsAppsMenuOpen]);

    const closeAppsMenu = useCallback(() => {
        setIsAppsMenuOpen(false);
    }, [setIsAppsMenuOpen]);

    return (
        <>
            <LogoIconApp
                logoRef={logoRef}
                toggleAppsMenu={toggleAppsMenu}
                isAppsMenuOpen={isAppsMenuOpen}
            />
            <Suspense fallback={<SpinnerApp global delay={200} />}>
                {isAppsMenuOpen && (
                    <AppsMenu
                        appsMenuRef={appsMenuRef}
                        closeAppsMenu={closeAppsMenu}
                    />
                )}
            </Suspense>
        </>
    );
};
export default AppsMenuAndLogo;
