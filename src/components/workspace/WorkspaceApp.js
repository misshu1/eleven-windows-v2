import React, { lazy, Suspense } from 'react';

import { FolderProvider } from '../../contexts/folderContext';
import RoutesApp from '../routes/RoutesApp';
import SpinnerApp from '../style/SpinnerApp';

const TaskbarApp = lazy(() => import('../taskbar/TaskbarApp'));
const DesktopApp = lazy(() => import('../desktop/DesktopApp'));

const WorkspaceApp = () => {
    return (
        <FolderProvider>
            <RoutesApp />
            <Suspense fallback={<SpinnerApp delay={200} />}>
                <DesktopApp />
                <TaskbarApp />
            </Suspense>
        </FolderProvider>
    );
};

export default WorkspaceApp;
