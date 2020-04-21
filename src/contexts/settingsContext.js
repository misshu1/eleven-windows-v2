import React, { createContext, useContext, useState } from 'react';

const OS_THEME = {
    windows: 'WINDOWS',
    linux: 'LINUX',
};

export const SettingsContext = createContext();
export const SettingsProvider = ({ children }) => {
    const [currentOS, setCurrentOS] = useState(OS_THEME.linux);
    // Default HTML font size 16px
    const [appSize, setAppSize] = useState(16);

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
            }}
        >
            {children}
        </SettingsContext.Provider>
    );
};

export const useSettingsContext = () => {
    return useContext(SettingsContext);
};
