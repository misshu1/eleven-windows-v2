import React, { useEffect, useContext, lazy, Suspense } from 'react';
import { NotificationContext } from '../../contexts/notificationContext';
import { TaskbarContext } from '../../contexts/taskbarContext';
import { FolderProvider } from '../../contexts/folderContext';
import { IndexProvider } from '../../contexts/indexContext';
import NotificationModalApp from '../notification/notificationModal/NotificationModalApp';
import SpinnerApp from '../style/SpinnerApp';
import RoutesApp from '../routes/RoutesApp';

const TaskbarApp = lazy(() => import('../taskbar/TaskbarApp'));
const DesktopApp = lazy(() => import('../desktop/DesktopApp'));
const CalendarApp = lazy(() => import('../taskbar/calendar/CalendarApp'));
const LanguageApp = lazy(() => import('../taskbar/language/LanguageApp'));
const StartMenuApp = lazy(() => import('../startMenu/StartMenuApp'));
const NotificationApp = lazy(() =>
    import('../notification/notificationApp/NotificationApp')
);

const WorkspaceApp = () => {
    const { checkLocalStorageNotification, clearAllNotifications } = useContext(
        NotificationContext
    );
    const { taskbar } = useContext(TaskbarContext);

    useEffect(() => {
        clearAllNotifications();
        checkLocalStorageNotification();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <React.Fragment>
            <IndexProvider>
                <FolderProvider>
                    <RoutesApp />

                    <Suspense fallback={<SpinnerApp delay={200} />}>
                        <DesktopApp />
                        <TaskbarApp />
                    </Suspense>

                    <Suspense fallback={<SpinnerApp delay={200} />}>
                        {taskbar.startMenuOpen && <StartMenuApp />}
                    </Suspense>

                    <Suspense fallback={<SpinnerApp delay={200} />}>
                        {taskbar.notificationsOpen && <NotificationApp />}
                    </Suspense>
                </FolderProvider>
            </IndexProvider>

            <Suspense fallback={<SpinnerApp delay={200} />}>
                {taskbar.languagesOpen && <LanguageApp />}
            </Suspense>

            <Suspense fallback={<SpinnerApp delay={200} />}>
                {taskbar.calendarOpen && <CalendarApp />}
            </Suspense>

            <NotificationModalApp />
        </React.Fragment>
    );
};

export default WorkspaceApp;
