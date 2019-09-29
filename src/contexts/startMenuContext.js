import React, { useState, createContext } from 'react';

export const StartMenuContext = createContext();
export const StartMenuProvider = props => {
    const [startMenu, setStartMenu] = useState({
        open: false
    });
    return (
        <StartMenuContext.Provider value={{ startMenu, setStartMenu }}>
            {props.children}
        </StartMenuContext.Provider>
    );
};
