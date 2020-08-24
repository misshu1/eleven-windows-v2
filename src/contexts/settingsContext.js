import i18n from 'i18next';
import React, { createContext, useCallback, useContext, useLayoutEffect, useMemo, useReducer, useRef } from 'react';

import globeImg from '../assets/images/flags/globe.svg';
import { backgrounds } from '../components/theme/DesktopBackgrounds';
import { THEME_TYPE, themes } from '../components/theme/themes';
import { videoBackgrounds } from '../components/theme/VideoBackgrounds';
import useMediaQuery from '../hooks/useMediaQuery';
import i18next, { languages } from '../services/translation/i18next';

const OS_THEME = {
    windows: 'WINDOWS',
    linux: 'LINUX',
    mobile: 'MOBILE',
};

const SETTINGS_ACTIONS = {
    changeOS: 'CHANGE_OS',
    changeTheme: 'CHANGE_THEME',
    changeBackground: 'CHANGE_BACKGROUND',
    changeVideoBackground: 'CHANGE_VIDEO_BACKGROUND',
    enableVideoBackground: 'ENABLE_VIDEO_BACKGROUND',
};

const SETTINGS_STATE = {
    OS: OS_THEME.windows,
    themes: themes,
    backgrounds: backgrounds,
    videoBackgrounds: videoBackgrounds,
    isVideoBackgroundEnabled: false,
};

const settingsReducer = (state, action) => {
    switch (action.type) {
        case SETTINGS_ACTIONS.changeOS:
            if (state.OS !== action.payload) {
                return {
                    ...state,
                    OS: action.payload,
                };
            } else {
                return state;
            }

        case SETTINGS_ACTIONS.changeTheme:
            const currentTheme = state.themes.find(
                (item) => item.id === action.payload
            );

            if (!currentTheme.isSelected) {
                state.themes.forEach((theme) => {
                    if (document.body.classList.contains(theme.className)) {
                        document.body.classList.remove(theme.className);
                    }
                });

                document.body.classList.add(currentTheme.className);
                return {
                    ...state,
                    themes: state.themes.map((theme) =>
                        theme.id === action.payload
                            ? { ...theme, isSelected: true }
                            : { ...theme, isSelected: false }
                    ),
                };
            } else {
                return state;
            }

        case SETTINGS_ACTIONS.changeBackground:
            const background = state.backgrounds.find(
                (item) => item.id === action.payload
            );

            if (!background.isSelected) {
                return {
                    ...state,
                    backgrounds: state.backgrounds.map((item) =>
                        item.id === action.payload
                            ? { ...item, isSelected: true }
                            : { ...item, isSelected: false }
                    ),
                };
            } else {
                return state;
            }

        case SETTINGS_ACTIONS.changeVideoBackground:
            const video = state.videoBackgrounds.find(
                (item) => item.id === action.payload
            );

            if (!video.isSelected) {
                return {
                    ...state,
                    videoBackgrounds: state.videoBackgrounds.map((item) =>
                        item.id === action.payload
                            ? { ...item, isSelected: true }
                            : { ...item, isSelected: false }
                    ),
                };
            } else {
                return state;
            }

        case SETTINGS_ACTIONS.enableVideoBackground:
            if (state.isVideoBackgroundEnabled !== action.payload) {
                return {
                    ...state,
                    isVideoBackgroundEnabled: action.payload,
                };
            } else {
                return state;
            }

        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

export const SettingsContext = createContext();
export const DispatchSettingsContext = createContext();
export const SettingsProvider = ({ children }) => {
    const [settingsState, settingsDispatch] = useReducer(
        settingsReducer,
        SETTINGS_STATE
    );

    const prevOSRef = useRef(null); // Here we keep the 'currentOS' old state
    const isMobile = useMediaQuery('(max-width: 450px)');
    const isTablet = useMediaQuery('(max-width: 800px)');

    const getSelectedVideoBgMP4 = useCallback(() => {
        const vid = settingsState.videoBackgrounds.find(
            (item) => item.isSelected === true
        );

        return vid.video.mp4;
    }, [settingsState.videoBackgrounds]);

    const getSelectedVideoBgWEBM = useCallback(() => {
        const vid = settingsState.videoBackgrounds.find(
            (item) => item.isSelected === true
        );

        return vid.video.webm;
    }, [settingsState.videoBackgrounds]);

    const getSelectedVideoBgName = useCallback(() => {
        const vid = settingsState.videoBackgrounds.find(
            (item) => item.isSelected === true
        );

        return vid.name;
    }, [settingsState.videoBackgrounds]);

    const getSelectedVideoPreview = useCallback(() => {
        const vid = settingsState.videoBackgrounds.find(
            (item) => item.isSelected === true
        );

        return vid.preview;
    }, [settingsState.videoBackgrounds]);

    const getSelectedTheme = useCallback(() => {
        const theme = settingsState.themes.find(
            (item) => item.isSelected === true
        );

        return theme.className;
    }, [settingsState.themes]);

    const getSelectedThemeName = useCallback(() => {
        const theme = settingsState.themes.find(
            (item) => item.isSelected === true
        );

        return theme.name;
    }, [settingsState.themes]);

    const getSelectedThemeType = useCallback(() => {
        const theme = settingsState.themes.find(
            (item) => item.isSelected === true
        );

        return theme.themeType;
    }, [settingsState.themes]);

    const getSelectedBackground = useCallback(() => {
        const bg = settingsState.backgrounds.find(
            (item) => item.isSelected === true
        );

        if (bg.type === 'image') {
            if (isMobile) {
                return bg.bg.mobile;
            } else {
                return bg.bg.desktop;
            }
        }

        return bg.bg;
    }, [isMobile, settingsState.backgrounds]);

    const getSelectedBackgroundName = useCallback(() => {
        const bg = settingsState.backgrounds.find(
            (item) => item.isSelected === true
        );

        return bg.name;
    }, [settingsState.backgrounds]);

    const enableVideoBg = (val) => {
        localStorage.setItem('isVideoBgEnabled', val);
        settingsDispatch({
            type: SETTINGS_ACTIONS.enableVideoBackground,
            payload: val,
        });
    };

    const changeTheme = (id) => {
        localStorage.setItem('currentTheme', id);

        settingsDispatch({
            type: SETTINGS_ACTIONS.changeTheme,
            payload: id,
        });
    };

    const changeBackground = (id) => {
        localStorage.setItem('background', id);

        settingsDispatch({
            type: SETTINGS_ACTIONS.changeBackground,
            payload: id,
        });
    };

    const changeVideoBg = (id) => {
        localStorage.setItem('videoBg', id);
        settingsDispatch({
            type: SETTINGS_ACTIONS.changeVideoBackground,
            payload: id,
        });
    };

    const checkLocalStorageVideoBg = () => {
        const videoBgLocalStorage = localStorage.getItem('videoBg');

        // Set initial selected video in local storage
        if (!videoBgLocalStorage) {
            const getSelectedVideo = settingsState.videoBackgrounds.find(
                (item) => item.isSelected === true
            );
            localStorage.setItem('videoBg', getSelectedVideo.id);
        } else {
            settingsDispatch({
                type: SETTINGS_ACTIONS.changeVideoBackground,
                payload: videoBgLocalStorage,
            });
        }
    };

    const checkLocalStorageBackground = () => {
        const bg = localStorage.getItem('background');

        // Set initial selected background in local storage
        if (!bg) {
            const getSelectedBackground = settingsState.backgrounds.find(
                (item) => item.isSelected === true
            );
            localStorage.setItem('background', getSelectedBackground.id);
        } else {
            settingsDispatch({
                type: SETTINGS_ACTIONS.changeBackground,
                payload: bg,
            });
        }
    };

    const checkLocalStorageTheme = () => {
        const theme = localStorage.getItem('currentTheme');

        // Set initial selected background in local storage
        if (!theme) {
            const getSelectedTheme = settingsState.themes.find(
                (item) => item.isSelected === true
            );
            localStorage.setItem('currentTheme', getSelectedTheme.id);
        } else {
            settingsDispatch({
                type: SETTINGS_ACTIONS.changeTheme,
                payload: theme,
            });
        }
    };

    useLayoutEffect(() => {
        const isVideoBgEnabled = localStorage.getItem('isVideoBgEnabled');
        if (!isVideoBgEnabled) {
            localStorage.setItem('isVideoBgEnabled', false);
        } else {
            const localStorageVal =
                isVideoBgEnabled !== 'undefined' ? isVideoBgEnabled : null;

            settingsDispatch({
                type: SETTINGS_ACTIONS.enableVideoBackground,
                payload: !!JSON.parse(localStorageVal),
            });
        }
    }, []);

    useLayoutEffect(() => {
        checkLocalStorageTheme();
        checkLocalStorageBackground();
        checkLocalStorageVideoBg();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useLayoutEffect(() => {
        if (settingsState.OS !== OS_THEME.mobile) {
            // Store the old OS value in prevOSRef
            prevOSRef.current = settingsState.OS;
        }
        if (isMobile) {
            settingsDispatch({
                type: SETTINGS_ACTIONS.changeOS,
                payload: OS_THEME.mobile,
            });
        } else if (!isMobile && settingsState.OS === OS_THEME.mobile) {
            settingsDispatch({
                type: SETTINGS_ACTIONS.changeOS,
                payload: prevOSRef.current,
            });
        }
    }, [isMobile, settingsState.OS]);

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
        return getSelectedThemeType() === THEME_TYPE.dark;
    }, [getSelectedThemeType]);

    const isLightThemeSelected = useCallback(() => {
        return getSelectedThemeType() === THEME_TYPE.light;
    }, [getSelectedThemeType]);

    const isLinuxSelected = useCallback(() => {
        return settingsState.OS === OS_THEME.linux;
    }, [settingsState.OS]);

    const isWindowsSelected = useCallback(() => {
        return settingsState.OS === OS_THEME.windows;
    }, [settingsState.OS]);

    const isMobileSelected = useCallback(() => {
        return settingsState.OS === OS_THEME.mobile;
    }, [settingsState.OS]);

    const isVideoBgEnabled = useCallback(() => {
        return settingsState.isVideoBackgroundEnabled;
    }, [settingsState.isVideoBackgroundEnabled]);

    const isVideoEnabledOnDesktop = useCallback(() => {
        return !isTablet && settingsState.isVideoBackgroundEnabled;
    }, [isTablet, settingsState.isVideoBackgroundEnabled]);

    const selectWindowsOS = () => {
        settingsDispatch({
            type: SETTINGS_ACTIONS.changeOS,
            payload: OS_THEME.windows,
        });
    };

    const selectLinuxOS = () => {
        settingsDispatch({
            type: SETTINGS_ACTIONS.changeOS,
            payload: OS_THEME.linux,
        });
    };

    const getThemes = useCallback(() => {
        return settingsState.themes;
    }, [settingsState.themes]);

    const getBackgrounds = useCallback(() => {
        return settingsState.backgrounds;
    }, [settingsState.backgrounds]);

    const getVideoBackgrounds = useCallback(() => {
        return settingsState.videoBackgrounds;
    }, [settingsState.videoBackgrounds]);

    const settingsValue = useMemo(() => {
        return {
            isVideoEnabledOnDesktop,
            isMobileSelected,
            isWindowsSelected,
            isLinuxSelected,
            isLightThemeSelected,
            isDarkThemeSelected,
            isVideoBgEnabled,
            getSelectedBackgroundName,
            getSelectedVideoBgMP4,
            getSelectedVideoBgWEBM,
            getSelectedVideoBgName,
            getSelectedVideoPreview,
            getSelectedBackground,
            getBackgrounds,
            getVideoBackgrounds,
            getSelectedTheme,
            getSelectedThemeName,
            getThemes,
        };
    }, [
        getBackgrounds,
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
        getVideoBackgrounds,
        getSelectedTheme,
        getSelectedThemeName,
        getThemes,
    ]);

    const dispatchSettingsValue = useMemo(() => {
        return {
            selectWindowsOS,
            selectLinuxOS,
            changeLanguage,
            languageFlag,
            enableVideoBg,
            changeVideoBg,
            changeBackground,
            changeTheme,
        };
    }, []);

    return (
        <SettingsContext.Provider value={settingsValue}>
            <DispatchSettingsContext.Provider value={dispatchSettingsValue}>
                {children}
            </DispatchSettingsContext.Provider>
        </SettingsContext.Provider>
    );
};

export const useSettingsContext = () => {
    return useContext(SettingsContext);
};

export const useDispatchSettingsContext = () => {
    return useContext(DispatchSettingsContext);
};
