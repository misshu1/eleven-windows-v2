import React, { useState, createContext } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export const GlobalAppContext = createContext();
export const GlobalAppProvider = props => {
    const [globalApp, setGlobalApp] = useState({
        isMobile: useMediaQuery('(max-width: 28rem)'),
        size: 100
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
