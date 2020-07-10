import React, { lazy, Suspense } from 'react';

import SpinnerApp from '../../common/SpinnerApp';

const TaskbarMobileApp = lazy(() => import('./taskbar/TaskbarMobileApp'));
const DesktopMobileApp = lazy(() => import('./desktop/DesktopMobileApp'));

const WorkspaceMobile = () => {
    return (
        <Suspense fallback={<SpinnerApp global delay={200} />}>
            <DesktopMobileApp />
            <TaskbarMobileApp />
        </Suspense>
    );
};

export default WorkspaceMobile;
