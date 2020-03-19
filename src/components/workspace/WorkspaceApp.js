import React, { lazy, Suspense, useContext, useEffect } from 'react';

import { FolderProvider } from '../../contexts/folderContext';
import { NotificationContext } from '../../contexts/notificationContext';
import { TaskbarProvider } from '../../contexts/taskbarContext';
import NotificationModalApp from '../notification/notificationModal/NotificationModalApp';
import RoutesApp from '../routes/RoutesApp';
import SpinnerApp from '../style/SpinnerApp';

const TaskbarModalApps = lazy(() => import('../taskbar/TaskbarModalApps'));
const TaskbarApp = lazy(() => import('../taskbar/TaskbarApp'));
const DesktopApp = lazy(() => import('../desktop/DesktopApp'));

const WorkspaceApp = () => {
    const { checkLocalStorageNotification, clearAllNotifications } = useContext(
        NotificationContext
    );

    useEffect(() => {
        clearAllNotifications();
        checkLocalStorageNotification();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <FolderProvider>
                <RoutesApp />
                <Suspense fallback={<SpinnerApp delay={200} />}>
                    <DesktopApp />

                    <TaskbarProvider>
                        <TaskbarModalApps />
                        <TaskbarApp />
                    </TaskbarProvider>
                </Suspense>
            </FolderProvider>

            <NotificationModalApp />
        </>
    );
};

export default WorkspaceApp;
