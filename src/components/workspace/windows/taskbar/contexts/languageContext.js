import React, { createContext, useCallback, useContext, useState } from 'react';

const LanguageContext = createContext();
export const LanguageProvider = ({ children }) => {
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);

    const toggleLanguage = useCallback(() => {
        setIsLanguageOpen((prevState) => !prevState);
    }, [setIsLanguageOpen]);

    const closeLanguage = useCallback(() => {
        setIsLanguageOpen(false);
    }, [setIsLanguageOpen]);

    return (
        <LanguageContext.Provider
            value={{
                toggleLanguage,
                closeLanguage,
                isLanguageOpen,
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguageContext = () => {
    return useContext(LanguageContext);
};
