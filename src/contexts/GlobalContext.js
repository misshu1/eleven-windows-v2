import React, { useState, createContext } from 'react';

export const GlobalAppContext = createContext();
export const GlobalAppProvider = props => {
    const [globalApp, setGlobalApp] = useState({
        isMobile: window.matchMedia('(max-width: 28rem)').matches ? true : false
    });

    return (
        <GlobalAppContext.Provider value={{ globalApp, setGlobalApp }}>
            {props.children}
        </GlobalAppContext.Provider>
    );
};
