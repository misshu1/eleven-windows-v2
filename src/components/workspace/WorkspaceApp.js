import React, { useContext, lazy, Suspense } from 'react';
import { GlobalAppContext } from '../../contexts/GlobalContext';
import { TaskbarContext } from '../../contexts/taskbarContext';
import { FolderProvider } from '../../contexts/FolderContext';
import { IndexProvider } from '../../contexts/indexContext';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from '../../contexts/themeContext';
import { GlobalStyle } from '../style/GlobalStyle';
import NotificationModalApp from '../notification/notificationModal/NotificationModalApp';
import TaskbarApp from '../taskbar/TaskbarApp';
import DesktopApp from '../desktop/DesktopApp';
import SpinnerApp from '../style/SpinnerApp';
import RoutesApp from '../routes/RoutesApp';

const CalendarApp = lazy(() => import('../taskbar/calendar/CalendarApp'));
const LanguageApp = lazy(() => import('../taskbar/language/LanguageApp'));
const StartMenuApp = lazy(() => import('../startMenu/StartMenuApp'));
const NotificationApp = lazy(() =>
    import('../notification/notificationApp/NotificationApp')
);

const WorkspaceApp = () => {
    const { theme } = useContext(ThemeContext);
    const { taskbar } = useContext(TaskbarContext);
    const { globalApp } = useContext(GlobalAppContext);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle size={globalApp.size} />
            <IndexProvider>
                <FolderProvider>
                    <RoutesApp />
                    <DesktopApp />
                    <TaskbarApp />

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
        </ThemeProvider>
    );
};

export default WorkspaceApp;
