import i18n from 'i18next';
import React, { createContext, useCallback, useContext, useLayoutEffect, useMemo, useRef, useState } from 'react';

import globeImg from '../assets/images/flags/globe.svg';
import DarkTheme from '../components/theme/DarkTheme';
import { backgrounds } from '../components/theme/DesktopBackground';
import LightTheme from '../components/theme/LightTheme';
import { THEME } from '../components/theme/theme';
import { videoBackgrounds } from '../components/theme/VideoBackgrounds';
import useMediaQuery from '../hooks/useMediaQuery';
import i18next, { languages } from '../services/translation/i18next';

const OS_THEME = {
    windows: 'WINDOWS',
    linux: 'LINUX',
    mobile: 'MOBILE',
};

export const SettingsContext = createContext();
export const SettingsProvider = ({ children }) => {
    const [currentOS, setCurrentOS] = useState(OS_THEME.windows);
    const [isVideoBgEnabled, setIsVideoBgEnabled] = useState(false);
    const [videoBg, setVideoBg] = useState(videoBackgrounds);
    const [background, setBackground] = useState(backgrounds);
    const [theme, setTheme] = useState(DarkTheme);
    const prevOSRef = useRef(null); // Here we keep the 'currentOS' old state
    const isMobile = useMediaQuery('(max-width: 450px)');
    const isTablet = useMediaQuery('(max-width: 800px)');

    const getSelectedVideoBgMP4 = useCallback(() => {
        const vid = videoBg.find((item) => item.isSelected === true);
        return vid.video.mp4;
    }, [videoBg]);

    const getSelectedVideoBgWEBM = useCallback(() => {
        const vid = videoBg.find((item) => item.isSelected === true);
        return vid.video.webm;
    }, [videoBg]);

    const getSelectedVideoBgName = useCallback(() => {
        const vid = videoBg.find((item) => item.isSelected === true);
        return vid.name;
    }, [videoBg]);

    const getSelectedVideoPreview = useCallback(() => {
        const vid = videoBg.find((item) => item.isSelected === true);
        return vid.preview;
    }, [videoBg]);

    const getSelectedBackground = useCallback(() => {
        const bg = background.find((item) => item.isSelected === true);
        return bg.bg;
    }, [background]);

    const getSelectedBackgroundName = useCallback(() => {
        const bg = background.find((item) => item.isSelected === true);
        return bg.name;
    }, [background]);

    const enableVideoBg = (e) => {
        localStorage.setItem('isVideoBgEnabled', e.target.checked);
        setIsVideoBgEnabled(e.target.checked);
    };

    // New 'videoBg' state, this function is usled only in this file
    const newVideoBgState = useCallback(
        (id) => {
            return videoBg.map((item) =>
                item.id === id
                    ? { ...item, isSelected: true }
                    : { ...item, isSelected: false }
            );
        },
        [videoBg]
    );

    // New 'background' state, this function is usled only in this file
    const newBackgroundState = useCallback(
        (id) => {
            return background.map((item) =>
                item.id === id
                    ? { ...item, isSelected: true }
                    : { ...item, isSelected: false }
            );
        },
        [background]
    );

    const changeBackground = useCallback(
        (id) => {
            localStorage.setItem('background', id);
            const checkBackground = background.find((item) => item.id === id);

            if (!checkBackground.isSelected) {
                setBackground(newBackgroundState(id));
            }
        },
        [background, newBackgroundState]
    );

    const changeVideoBg = useCallback(
        (id) => {
            localStorage.setItem('videoBg', id);
            const checkVideo = videoBg.find((item) => item.id === id);

            if (!checkVideo.isSelected) {
                setVideoBg(newVideoBgState(id));
            }
        },
        [newVideoBgState, videoBg]
    );

    const checkLocalStorageVideoBg = () => {
        const videoBgLocalStorage = localStorage.getItem('videoBg');

        // Set initial selected video in local storage
        if (!videoBgLocalStorage) {
            const getSelectedVideo = videoBackgrounds.find(
                (item) => item.isSelected === true
            );
            localStorage.setItem('videoBg', getSelectedVideo.id);
        } else {
            setVideoBg(newVideoBgState(videoBgLocalStorage));
        }
    };

    const checkLocalStorageBackground = () => {
        const bg = localStorage.getItem('background');

        // Set initial selected background in local storage
        if (!bg) {
            const getSelectedBackground = backgrounds.find(
                (item) => item.isSelected === true
            );
            localStorage.setItem('background', getSelectedBackground.id);
        } else {
            setBackground(newBackgroundState(bg));
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
        const isVideoBgEnabled = localStorage.getItem('isVideoBgEnabled');
        if (!isVideoBgEnabled) {
            localStorage.setItem('isVideoBgEnabled', false);
        } else {
            setIsVideoBgEnabled(JSON.parse(isVideoBgEnabled));
        }
    }, []);

    useLayoutEffect(() => {
        checkLocalStorageTheme();
        checkLocalStorageBackground();
        checkLocalStorageVideoBg();
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

    const selectDarkTheme = useCallback(() => {
        changeTheme(THEME.dark);
    }, []);

    const selectLightTheme = useCallback(() => {
        changeTheme(THEME.light);
    }, []);

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

    const isDarkThemeSelected = useCallback(() => {
        return theme.id === THEME.dark;
    }, [theme.id]);

    const isLightThemeSelected = useCallback(() => {
        return theme.id === THEME.light;
    }, [theme.id]);

    const isLinuxSelected = useCallback(() => {
        return currentOS === OS_THEME.linux;
    }, [currentOS]);

    const isWindowsSelected = useCallback(() => {
        return currentOS === OS_THEME.windows;
    }, [currentOS]);

    const isMobileSelected = useCallback(() => {
        return currentOS === OS_THEME.mobile;
    }, [currentOS]);

    const isVideoEnabledOnDesktop = useCallback(() => {
        return !isTablet && isVideoBgEnabled;
    }, [isTablet, isVideoBgEnabled]);

    const selectWindowsOS = () => {
        setCurrentOS(OS_THEME.windows);
    };

    const selectLinuxOS = () => {
        setCurrentOS(OS_THEME.linux);
    };

    const settingsValue = useMemo(() => {
        return {
            isLinuxSelected,
            isWindowsSelected,
            isMobileSelected,
            isDarkThemeSelected,
            isLightThemeSelected,
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
            isVideoEnabledOnDesktop,
            isVideoBgEnabled,
            getSelectedVideoBgMP4,
            getSelectedVideoBgWEBM,
            getSelectedVideoBgName,
            changeVideoBg,
            videoBg,
            enableVideoBg,
            getSelectedVideoPreview,
        };
    }, [
        background,
        changeBackground,
        changeVideoBg,
        getSelectedBackground,
        getSelectedBackgroundName,
        getSelectedVideoBgMP4,
        getSelectedVideoBgName,
        getSelectedVideoBgWEBM,
        getSelectedVideoPreview,
        isDarkThemeSelected,
        isLightThemeSelected,
        isLinuxSelected,
        isMobileSelected,
        isVideoBgEnabled,
        isVideoEnabledOnDesktop,
        isWindowsSelected,
        selectDarkTheme,
        selectLightTheme,
        theme,
        videoBg,
    ]);

    return (
        <SettingsContext.Provider value={settingsValue}>
            {children}
        </SettingsContext.Provider>
    );
};

export const useSettingsContext = () => {
    return useContext(SettingsContext);
};
