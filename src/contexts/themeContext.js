import React, { useState, createContext, useLayoutEffect } from 'react';
import DarkTheme from '../components/theme/DarkTheme';
import LightTheme from '../components/theme/LightTheme';

export const ThemeContext = createContext();
export const ThemeStateProvider = props => {
    const checkLocalStorageTheme = () => {
        const theme = localStorage.getItem('theme');
        if (!theme || theme === undefined || theme === null || theme === '') {
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

    const [theme, setTheme] = useState(DarkTheme);
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
};
