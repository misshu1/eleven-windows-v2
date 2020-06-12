import i18n from 'i18next';
import React, { createContext, useContext, useLayoutEffect, useRef, useState } from 'react';

import globeImg from '../assets/images/flags/globe.svg';
import DarkTheme from '../components/theme/DarkTheme';
import { backgrounds } from '../components/theme/DesktopBackground';
import LightTheme from '../components/theme/LightTheme';
import { videoBackgrounds } from '../components/theme/VideoBackgrounds';
import useMediaQuery from '../hooks/useMediaQuery';
import i18next, { languages } from '../services/translation/i18next';

const OS_THEME = {
    windows: 'WINDOWS',
    linux: 'LINUX',
    mobile: 'MOBILE',
};

const THEME = {
    dark: 'DARK',
    light: 'LIGHT',
};

export const SettingsContext = createContext();
export const SettingsProvider = ({ children }) => {
    const [currentOS, setCurrentOS] = useState(OS_THEME.windows);
    const [isVideoBgEnabled, setIsVideoBgEnabled] = useState(false);
    const [videoBg, setVideoBg] = useState(videoBackgrounds);
    const [background, setBackground] = useState(backgrounds);
    const [theme, setTheme] = useState(DarkTheme);
    const prevVideoRef = useRef(null); // Here we keep the 'isVideoBgEnabled' old state
    const prevOSRef = useRef(null); // Here we keep the 'currentOS' old state
    const isMobile = useMediaQuery('(max-width: 450px)');
    const isTablet = useMediaQuery('(max-width: 800px)');

    const getSelectedVideoBg = () => {
        const vid = videoBg.find((item) => item.isSelected === true);
        return vid.video;
    };

    const getSelectedVideoBgName = () => {
        const vid = videoBg.find((item) => item.isSelected === true);
        return vid.name;
    };

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
                    `There is no theme with the name: ${themeName}`
                );
        }
    };

    useLayoutEffect(() => {
        if (isVideoBgEnabled) {
            prevVideoRef.current = isVideoBgEnabled;
        }
        if (isTablet) {
            setIsVideoBgEnabled(false);
        } else if (!isTablet && !isVideoBgEnabled) {
            setIsVideoBgEnabled(prevVideoRef.current);
        }
    }, [isTablet, isVideoBgEnabled]);

    useLayoutEffect(() => {
        checkLocalStorageTheme();
        checkLocalStorageBackground();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useLayoutEffect(() => {
        if (currentOS !== OS_THEME.mobile) {
            // Store the old OS value in prevOSRef
            prevOSRef.current = currentOS;
        }
        if (isMobile) {
            setCurrentOS(OS_THEME.mobile);
        } else if (!isMobile && currentOS === OS_THEME.mobile) {
            setCurrentOS(prevOSRef.current);
        }
    }, [currentOS, isMobile]);

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

    const isMobileSelected = () => {
        return currentOS === OS_THEME.mobile;
    };

    const isVideoSelectedOnDesktop = () => {
        return !isTablet && isVideoBgEnabled;
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
                isMobileSelected,
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
                isVideoSelectedOnDesktop,
                getSelectedVideoBg,
                getSelectedVideoBgName,
            }}
        >
            {children}
        </SettingsContext.Provider>
    );
};

export const useSettingsContext = () => {
    return useContext(SettingsContext);
};
