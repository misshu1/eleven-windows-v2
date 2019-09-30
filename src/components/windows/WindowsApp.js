import React, { useContext, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from '../../contexts/themeContext';
import { useTranslation } from 'react-i18next';
import { GlobalStyle } from '../style/GlobalStyle';
import LightTheme from '../../components/theme/LightTheme';
import DarkTheme from '../../components/theme/DarkTheme';
import TaskbarApp from '../../components/taskbar/TaskbarApp';
import DesktopApp from '../../components/desktop/DesktopApp';

const WindowsApp = props => {
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
            <DesktopApp />
            <TaskbarApp />
        </ThemeProvider>
    );
};

export default WindowsApp;
