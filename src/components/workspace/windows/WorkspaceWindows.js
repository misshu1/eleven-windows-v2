import React, { lazy, Suspense } from 'react';
import SpinnerApp from 'components/common/SpinnerApp';

const TaskbarWindowsApp = lazy(() => import('./taskbar/TaskbarWindowsApp'));
const DesktopWindowsApp = lazy(() => import('./desktop/DesktopWindowsApp'));

const WorkspaceWindows = () => {
    return (
        <Suspense fallback={<SpinnerApp global delay={200} />}>
            <DesktopWindowsApp />
            <TaskbarWindowsApp />
        </Suspense>
    );
};

export default WorkspaceWindows;
