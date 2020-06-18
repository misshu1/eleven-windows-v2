import React, { lazy, Suspense } from 'react';

import { useSettingsContext } from '../../contexts/settingsContext';
import useMediaQuery from '../../hooks/useMediaQuery';
import FolderRoutes from '../routes/FolderRoutes';
import SpinnerApp from '../style/SpinnerApp';
import WorkspaceLinux from './linux/WorkspaceLinux';
import WorkspaceMobile from './mobile/WorkspaceMobile';
import WorkspaceWindows from './windows/WorkspaceWindows';

const VideoApp = lazy(() => import('../video/VideoApp'));
const QuickAccessApp = lazy(() => import('../quickAccess/QuickAccessApp'));

const WorkspaceApp = () => {
    const {
        isLinuxSelected,
        isWindowsSelected,
        isMobileSelected,
        isVideoEnabledOnDesktop,
    } = useSettingsContext();
    const isMobile = useMediaQuery('(max-width: 450px)');

    return (
        <>
            {/* Render folder routes only when the route '/' is rendered from Routes.js file */}
            {/* P.S: Don't move this '<FolderRoutes />' to 'App.js' */}
            <FolderRoutes />
            <Suspense fallback={<SpinnerApp delay={200} />}>
                {!isMobile && <QuickAccessApp />}
            </Suspense>
            {isLinuxSelected() && <WorkspaceLinux />}
            {isWindowsSelected() && <WorkspaceWindows />}
            {isMobileSelected() && <WorkspaceMobile />}
            {isVideoEnabledOnDesktop() && (
                <Suspense fallback={<SpinnerApp delay={200} />}>
                    <VideoApp />
                </Suspense>
            )}
        </>
    );
};

export default WorkspaceApp;
