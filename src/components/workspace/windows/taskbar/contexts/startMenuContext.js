import React, { createContext, useCallback, useContext, useState } from 'react';

const StartMenuContext = createContext();
export const StartMenuProvider = ({ children }) => {
    const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);

    const toggleStartMenu = useCallback(() => {
        setIsStartMenuOpen((prevState) => !prevState);
    }, [setIsStartMenuOpen]);

    const closeStartMenu = useCallback(() => {
        setIsStartMenuOpen(false);
    }, [setIsStartMenuOpen]);

    return (
        <StartMenuContext.Provider
            value={{
                toggleStartMenu,
                closeStartMenu,
                isStartMenuOpen,
            }}
        >
            {children}
        </StartMenuContext.Provider>
    );
};

export const useStartMenuContext = () => {
    return useContext(StartMenuContext);
};
