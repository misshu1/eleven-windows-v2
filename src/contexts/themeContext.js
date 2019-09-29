import React, { useState, createContext } from 'react';
import DarkTheme from '../components/theme/DarkTheme';
import LightTheme from '../components/theme/LightTheme';

export const ThemeContext = createContext();
export const ThemeStateProvider = props => {
    const checkLocalStorageTheme = () => {
        const theme = localStorage.getItem('theme');
        if (!theme || theme === undefined || theme === null || theme === '') {
            return DarkTheme;
        }
        if (theme === 'dark') {
            return DarkTheme;
        } else if (theme === 'light') {
            return LightTheme;
        }
    };

    const [theme, setTheme] = useState(checkLocalStorageTheme());
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
};
