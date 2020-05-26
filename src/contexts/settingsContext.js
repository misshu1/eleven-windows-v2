import i18n from 'i18next';
import React, { createContext, useContext, useLayoutEffect, useState } from 'react';

import globeImg from '../assets/images/flags/globe.svg';
import DarkTheme from '../components/theme/DarkTheme';
import { backgrounds } from '../components/theme/DesktopBackground';
import LightTheme from '../components/theme/LightTheme';
import i18next, { languages } from '../services/translation/i18next';

const OS_THEME = {
    windows: 'WINDOWS',
    linux: 'LINUX',
};

const THEME = {
    dark: 'DARK',
    light: 'LIGHT',
};

export const SettingsContext = createContext();
export const SettingsProvider = ({ children }) => {
    const [currentOS, setCurrentOS] = useState(OS_THEME.windows);
    const [theme, setTheme] = useState(DarkTheme);
    const [background, setBackground] = useState(backgrounds);

    const getSelectedBackground = () => {
        const bg = background.find((item) => item.isSelected === true);
        return bg.bg;
    };

    const getSelectedBackgroundName = () => {
        const bg = background.find((item) => item.isSelected === true);
        return bg.name;
    };

    const changeBackground = (id) => {
        localStorage.setItem('background', id);
        const filterBg = background.map((item) =>
            item.id === id
                ? { ...item, isSelected: true }
                : { ...item, isSelected: false }
        );
        const checkBackground = background.find((item) => item.id === id);

        if (!checkBackground.isSelected) {
            setBackground(filterBg);
        }
    };

    const checkLocalStorageBackground = () => {
        const bg = localStorage.getItem('background');
        if (!bg) {
            localStorage.setItem('background', 'bg11');
            changeBackground('bg11');
        } else {
            changeBackground(bg);
        }
    };

    const checkLocalStorageTheme = () => {
        const theme = localStorage.getItem('theme');
        if (!theme) {
            localStorage.setItem('theme', THEME.dark);
            setTheme(DarkTheme);
        }
        if (theme === THEME.dark) {
            setTheme(DarkTheme);
        } else if (theme === THEME.light) {
            setTheme(LightTheme);
        }
    };

    const changeTheme = (themeName) => {
        switch (themeName) {
            case THEME.dark:
                localStorage.setItem('theme', THEME.dark);
                return setTheme(DarkTheme);
            case THEME.light:
                localStorage.setItem('theme', THEME.light);
                return setTheme(LightTheme);
            default:
                throw new Error(
                    `THere is no theme with the name: ${themeName}`
                );
        }
    };

    useLayoutEffect(() => {
        checkLocalStorageTheme();
        checkLocalStorageBackground();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const selectDarkTheme = () => {
        changeTheme(THEME.dark);
    };

    const selectLightTheme = () => {
        changeTheme(THEME.light);
    };

    const languageFlag = () => {
        const locationLanguage = i18next.language;
        const lang = languages.find((item) => item.lang === i18next.language);
        const checkLanguage = languages.find(
            (item) => item.lang === locationLanguage
        );

        return !checkLanguage ? globeImg : lang.flag;
    };

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    const isLinuxSelected = () => {
        return currentOS === OS_THEME.linux;
    };

    const isWindowsSelected = () => {
        return currentOS === OS_THEME.windows;
    };

    const selectWindowsOS = () => {
        setCurrentOS(OS_THEME.windows);
    };

    const selectLinuxOS = () => {
        setCurrentOS(OS_THEME.linux);
    };

    return (
        <SettingsContext.Provider
            value={{
                isLinuxSelected,
                isWindowsSelected,
                selectWindowsOS,
                selectLinuxOS,
                languageFlag,
                changeLanguage,
                selectLightTheme,
                selectDarkTheme,
                getSelectedBackgroundName,
                getSelectedBackground,
                changeBackground,
                theme,
                background,
            }}
        >
            {children}
        </SettingsContext.Provider>
    );
};

export const useSettingsContext = () => {
    return useContext(SettingsContext);
};
