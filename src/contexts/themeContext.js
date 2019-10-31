import React, { useState, createContext, useLayoutEffect } from 'react';
import DarkTheme from '../components/theme/DarkTheme';
import LightTheme from '../components/theme/LightTheme';

export const ThemeContext = createContext();
export const ThemeStateProvider = props => {
    const checkLocalStorageTheme = () => {
        const theme = localStorage.getItem('theme');
        if (!theme || theme === undefined || theme === null || theme === '') {
            localStorage.setItem('theme', 'dark');
            setTheme(DarkTheme);
        }
        if (theme === 'dark') {
            setTheme(DarkTheme);
        } else if (theme === 'light') {
            setTheme(LightTheme);
        }
    };

    useLayoutEffect(() => {
        checkLocalStorageTheme();
    }, []);

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

    const [theme, setTheme] = useState(DarkTheme);
    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
};
