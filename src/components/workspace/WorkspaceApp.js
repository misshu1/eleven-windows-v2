import React from 'react';

import { useSettingsContext } from '../../contexts/settingsContext';
import useMediaQuery from '../../hooks/useMediaQuery';
import FolderRoutes from '../routes/FolderRoutes';
import WorkspaceLinux from './linux/WorkspaceLinux';
import WorkspaceMobile from './mobile/WorkspaceMobile';
import WorkspaceWindows from './windows/WorkspaceWindows';

const WorkspaceApp = () => {
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
            {/* Render folder routes only when route '/' is rendered from Routes.js file */}
            {/* P.S: Don't move this '<FolderRoutes />' to 'App.js' */}
            <FolderRoutes />
            {isLinuxSelected() && <WorkspaceLinux />}
            {isWindowsSelected() && <WorkspaceWindows />}
            {isMobileSelected() && <WorkspaceMobile />}
        </>
    );
};

export default WorkspaceApp;
