import React, { createContext, useContext, useState, useCallback } from 'react';
import { FOLDER_PAGES } from 'components/common';

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
