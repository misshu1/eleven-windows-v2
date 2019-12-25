import React, { useState, createContext, useCallback } from 'react';
import DarkTheme from '../components/theme/DarkTheme';
import LightTheme from '../components/theme/LightTheme';
import DesktopBackground from '../components/theme/DesktopBackground';

const createBackgroundObject = () => {
    const obj = Object.keys(DesktopBackground).map((item, index) => ({
        name: `Backgorund ${index + 1}`,
        bg: item,
        isSelected: false
    }));

    const setDefault = obj.map(item =>
        item.bg === 'bg11' ? { ...item, isSelected: true } : item
    );

    return setDefault;
};

export const ThemeContext = createContext();
export const ThemeProvider = props => {
    const [theme, setTheme] = useState(DarkTheme);
    const [background, setBackground] = useState(createBackgroundObject());

    const getSelectedBackground = () => {
        return background.find(item => item.isSelected === true);
    };

    const changeBackground = useCallback(
        selected => {
            localStorage.setItem('background', selected);

            const filterBg = background.map(item =>
                item.bg === selected
                    ? { ...item, isSelected: true }
                    : { ...item, isSelected: false }
            );

            const checkBackground = background.find(
                item => item.bg === selected
            );

            if (!checkBackground.isSelected) {
                setBackground(filterBg);
            }
        },
        [background]
    );

    const checkLocalStorageBackground = useCallback(() => {
        const bg = localStorage.getItem('background');
        if (!bg || bg === undefined || bg === null || bg === '') {
            localStorage.setItem('background', 'bg11');
            changeBackground('bg11');
        } else {
            changeBackground(bg);
        }
    }, [changeBackground]);

    const checkLocalStorageTheme = useCallback(() => {
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
    }, []);

    const changeTheme = useCallback(themeName => {
        localStorage.setItem('theme', themeName);
        setTheme(() => {
            if (themeName === 'dark') {
                return DarkTheme;
            } else if (themeName === 'light') {
                return LightTheme;
            }
        });
    }, []);

    return (
        <ThemeContext.Provider
            value={{
                theme,
                changeTheme,
                background,
                changeBackground,
                getSelectedBackground,
                checkLocalStorageTheme,
                checkLocalStorageBackground
            }}
        >
            {props.children}
        </ThemeContext.Provider>
    );
};
