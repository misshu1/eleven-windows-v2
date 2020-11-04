import React, { lazy, Suspense } from 'react';

import SpinnerApp from 'components/common/SpinnerApp';
import { SideMenuProvider } from './contexts/sideMenuContext';

const TaskbarLinuxApp = lazy(() => import('./taskbar/TaskbarLinuxApp'));
const DesktopLinuxApp = lazy(() => import('./desktop/DesktopLinuxApp'));

const WorkspaceLinux = () => {
    return (
        <Suspense fallback={<SpinnerApp global delay={200} />}>
            <SideMenuProvider>
                <DesktopLinuxApp />
            </SideMenuProvider>
            <TaskbarLinuxApp />
        </Suspense>
    );
};

export default WorkspaceLinux;
