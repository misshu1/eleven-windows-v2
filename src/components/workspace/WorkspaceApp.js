import React, { lazy, Suspense } from 'react';

import FolderRoutes from '../routes/FolderRoutes';
import SpinnerApp from '../style/SpinnerApp';

const TaskbarApp = lazy(() => import('../taskbar/TaskbarApp'));
const DesktopApp = lazy(() => import('../desktop/DesktopApp'));

const WorkspaceApp = () => {
    return (
        <>
            <FolderRoutes />
            <Suspense fallback={<SpinnerApp delay={200} />}>
                <DesktopApp />
                <TaskbarApp />
            </Suspense>
        </>
    );
};

export default WorkspaceApp;
