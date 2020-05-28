import React, { lazy, Suspense } from 'react';

import SpinnerApp from '../../style/SpinnerApp';

const TaskbarWindowsApp = lazy(() =>
    import('../windows/taskbar/TaskbarWindowsApp')
);
const DesktopMobileApp = lazy(() => import('./desktop/DesktopMobileApp'));

const WorkspaceMobile = () => {
    return (
        <Suspense fallback={<SpinnerApp delay={200} />}>
            <DesktopMobileApp />
            <TaskbarWindowsApp />
        </Suspense>
    );
};

export default WorkspaceMobile;
