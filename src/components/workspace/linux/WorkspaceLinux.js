import React, { lazy, Suspense } from 'react';

import SpinnerApp from '../../style/SpinnerApp';
import { SideMenuProvider } from './contexts/sideMenuContext';

const TaskbarLinuxApp = lazy(() => import('./taskbar/TaskbarLinuxApp'));
const DesktopLinuxApp = lazy(() => import('./desktop/DesktopLinuxApp'));

const WorkspaceLinux = () => {
    return (
        <Suspense fallback={<SpinnerApp delay={200} />}>
            <SideMenuProvider>
                <DesktopLinuxApp />
            </SideMenuProvider>
            <TaskbarLinuxApp />
        </Suspense>
    );
};

export default WorkspaceLinux;
