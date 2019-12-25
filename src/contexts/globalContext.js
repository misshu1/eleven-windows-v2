import React, { useState, createContext } from 'react';

export const GlobalAppContext = createContext();
export const GlobalAppProvider = props => {
    const [globalApp, setGlobalApp] = useState({
        isMobile: window.matchMedia('(max-width: 28rem)').matches
            ? true
            : false,
        size: 16
    });

    const changeAppSize = size => {
        setGlobalApp({ ...globalApp, size });
    };

    return (
        <GlobalAppContext.Provider value={{ globalApp, changeAppSize }}>
            {props.children}
        </GlobalAppContext.Provider>
    );
};
