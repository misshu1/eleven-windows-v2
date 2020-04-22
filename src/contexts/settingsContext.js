import i18n from 'i18next';
import React, { createContext, useContext, useState } from 'react';

import globeImg from '../assets/images/flags/globe.svg';
import i18next, { languages } from '../services/translation/i18next';

const OS_THEME = {
    windows: 'WINDOWS',
    linux: 'LINUX',
};

export const SettingsContext = createContext();
export const SettingsProvider = ({ children }) => {
    const [currentOS, setCurrentOS] = useState(OS_THEME.linux);
    // Default HTML font size 16px
    const [appSize, setAppSize] = useState(16);

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

    const changeAppSize = (size) => {
        setAppSize(size);
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
                appSize,
                changeAppSize,
                languageFlag,
                changeLanguage,
            }}
        >
            {children}
        </SettingsContext.Provider>
    );
};

export const useSettingsContext = () => {
    return useContext(SettingsContext);
};
