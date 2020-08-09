import i18n from 'i18next';
import React, { createContext, useCallback, useContext, useLayoutEffect, useMemo, useReducer, useRef } from 'react';

import globeImg from '../assets/images/flags/globe.svg';
import { backgrounds } from '../components/theme/DesktopBackground';
import { THEME } from '../components/theme/theme';
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
    theme: THEME.dark,
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
            if (state.theme !== action.payload) {
                switch (action.payload) {
                    case THEME.dark:
                        localStorage.setItem('theme', THEME.dark);
                        document.body.classList.remove('light');
                        document.body.classList.add('dark');
                        return {
                            ...state,
                            theme: THEME.dark,
                        };
                    case THEME.light:
                        localStorage.setItem('theme', THEME.light);
                        document.body.classList.remove('dark');
                        document.body.classList.add('light');
                        return {
                            ...state,
                            theme: THEME.light,
                        };
                    default:
                        throw new Error(
                            `There is no theme with the name: ${action.payload}`
                        );
                }
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

    const getSelectedBackground = useCallback(() => {
        const bg = settingsState.backgrounds.find(
            (item) => item.isSelected === true
        );

        return bg.bg;
    }, [settingsState.backgrounds]);

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
        const theme = localStorage.getItem('theme');
        if (!theme) {
            localStorage.setItem('theme', THEME.dark);
            settingsDispatch({
                type: SETTINGS_ACTIONS.changeTheme,
                payload: THEME.dark,
            });
        }

        if (theme === THEME.dark) {
            settingsDispatch({
                type: SETTINGS_ACTIONS.changeTheme,
                payload: THEME.dark,
            });
        } else if (theme === THEME.light) {
            settingsDispatch({
                type: SETTINGS_ACTIONS.changeTheme,
                payload: THEME.light,
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

    const selectDarkTheme = () => {
        settingsDispatch({
            type: SETTINGS_ACTIONS.changeTheme,
            payload: THEME.dark,
        });
    };

    const selectLightTheme = () => {
        settingsDispatch({
            type: SETTINGS_ACTIONS.changeTheme,
            payload: THEME.light,
        });
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

    const isDarkThemeSelected = useCallback(() => {
        return settingsState.theme === THEME.dark;
    }, [settingsState.theme]);

    const isLightThemeSelected = useCallback(() => {
        return settingsState.theme === THEME.light;
    }, [settingsState.theme]);

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

    const getTheme = useCallback(() => {
        return settingsState.theme;
    }, [settingsState.theme]);

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
            getTheme,
            getBackgrounds,
            getVideoBackgrounds,
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
        getTheme,
        getVideoBackgrounds,
    ]);

    const dispatchSettingsValue = useMemo(() => {
        return {
            selectWindowsOS,
            selectLinuxOS,
            selectLightTheme,
            selectDarkTheme,
            changeLanguage,
            languageFlag,
            enableVideoBg,
            changeVideoBg,
            changeBackground,
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
