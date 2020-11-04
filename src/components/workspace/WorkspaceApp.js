import React from 'react';

import { useSettingsContext } from 'contexts';
import { useMediaQuery } from 'hooks';
import QuickAccessApp from 'components/quickAccess/QuickAccessApp';
import FolderRoutes from 'components/routes/FolderRoutes';
import WorkspaceLinux from 'components/workspace/linux/WorkspaceLinux';
import WorkspaceMobile from 'components/workspace/mobile/WorkspaceMobile';
import WorkspaceWindows from 'components/workspace/windows/WorkspaceWindows';

const WorkspaceApp = () => {
    const {
        isLinuxSelected,
        isWindowsSelected,
        isMobileSelected
    } = useSettingsContext();
    const isMobile = useMediaQuery('(max-width: 450px)');

    return (
        <>
            {/* Render folder routes only when the route '/' is rendered from Routes.js file */}
            {/* P.S: Don't move this '<FolderRoutes />' to 'App.js' */}
            <FolderRoutes />
            {!isMobile && <QuickAccessApp />}
            {isLinuxSelected() && <WorkspaceLinux />}
            {isWindowsSelected() && <WorkspaceWindows />}
            {isMobileSelected() && <WorkspaceMobile />}
        </>
    );
};

export default WorkspaceApp;
