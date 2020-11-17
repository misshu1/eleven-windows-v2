import React, { createContext, useContext, useState, useCallback } from 'react';

export const FOLDER_PAGES = {
    level_1: 1,
    level_2: 2,
    level_3: 3,
    level_4: 4,
    level_5: 5,
    level_6: 6,
    level_7: 7,
    level_8: 8,
    level_9: 9,
    level_10: 10,
    level_11: 11,
    level_12: 12,
    level_13: 13,
    level_14: 14,
    level_15: 15
};

// This context is used to manage folder pagination
const FolderPagesContext = createContext(null);
export const FolderPagesProvider = ({ children }) => {
    const [page, setPage] = useState(FOLDER_PAGES.level_1);

    const changePage = useCallback((newPage) => {
        setPage(newPage);
    }, []);

    return (
        <FolderPagesContext.Provider value={{ page, changePage }}>
            {children}
        </FolderPagesContext.Provider>
    );
};

export const useFolderPagesContext = () => {
    return useContext(FolderPagesContext);
};
