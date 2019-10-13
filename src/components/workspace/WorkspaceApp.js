import React, { useContext, useEffect, lazy, Suspense } from 'react';
import { TaskbarProvider } from '../../contexts/taskbarContext';
import { FolderProvider } from '../../contexts/FolderContext';
import { useTranslation } from 'react-i18next';
import { IndexProvider } from '../../contexts/indexContext';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from '../../contexts/themeContext';
import { GlobalStyle } from '../style/GlobalStyle';
import NotificationModalApp from '../notification/notificationModal/NotificationModalApp';
import TaskbarApp from '../taskbar/TaskbarApp';
import DesktopApp from '../desktop/DesktopApp';
import LightTheme from '../theme/LightTheme';
import SpinnerApp from '../style/SpinnerApp';
import DarkTheme from '../theme/DarkTheme';
import RoutesApp from '../routes/RoutesApp';

const CalendarApp = lazy(() => import('../taskbar/calendar/CalendarApp'));
const LanguageApp = lazy(() => import('../taskbar/language/LanguageApp'));
const StartMenuApp = lazy(() => import('../startMenu/StartMenuApp'));
const NotificationApp = lazy(() =>
    import('../notification/notificationApp/NotificationApp')
);

const WorkspaceApp = props => {
    const { theme, setTheme } = useContext(ThemeContext);

    // Set initial "theme" value in localStorage
    useEffect(() => {
        if (!localStorage.theme) {
            localStorage.setItem('theme', 'dark');
        }
    }, []);

    // Store the "theme" value in localStorage and return selected theme
    const changeTheme = themeName => {
        localStorage.setItem('theme', themeName);
        setTheme(() => {
            if (themeName === 'dark') {
                return DarkTheme;
            } else if (themeName === 'light') {
                return LightTheme;
            }
        });
    };

    const { t, i18n } = useTranslation();

    const changeLanguage = lang => {
        i18n.changeLanguage(lang);
    };

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            {/* <div>
                <button onClick={() => changeTheme('light')}>Light</button>
                <button onClick={() => changeTheme('dark')}>Dark</button>

                <button onClick={() => changeLanguage('en-GB')}>gb</button>
                <button onClick={() => changeLanguage('en-US')}>us</button>
                <button onClick={() => changeLanguage('ro-RO')}>ro</button>
            </div>
            <h1>{t('desktop.title')}</h1> */}
            <Suspense fallback={<SpinnerApp />}>
                <TaskbarProvider>
                    <IndexProvider>
                        <FolderProvider>
                            <RoutesApp />
                            <DesktopApp />
                            <StartMenuApp />
                            <TaskbarApp />
                        </FolderProvider>
                    </IndexProvider>
                    <LanguageApp />
                    <CalendarApp />
                    <NotificationApp />
                </TaskbarProvider>
                <NotificationModalApp />
            </Suspense>
        </ThemeProvider>
    );
};

export default WorkspaceApp;
