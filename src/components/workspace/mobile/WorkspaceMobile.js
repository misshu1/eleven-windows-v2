import React, { lazy, Suspense } from 'react';

import SpinnerApp from '../../style/SpinnerApp';

const TaskbarMobileApp = lazy(() => import('./taskbar/TaskbarMobileApp'));
const DesktopMobileApp = lazy(() => import('./desktop/DesktopMobileApp'));

const WorkspaceMobile = () => {
    return (
        <Suspense fallback={<SpinnerApp delay={200} />}>
            <DesktopMobileApp />
            <TaskbarMobileApp />
        </Suspense>
    );
};

export default WorkspaceMobile;
