import React, { createContext, useContext, useState } from 'react';

export const SettingsContext = createContext();
export const SettingsProvider = ({ children }) => {
    return (
        <SettingsContext.Provider value={{}}>
            {children}
        </SettingsContext.Provider>
    );
};

export const useSettingsContext = () => {
    return useContext(SettingsContext);
};
