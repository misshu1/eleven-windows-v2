import React, { createContext, useContext, useState, useCallback } from 'react';
import { folderPages } from 'components/folder/folderPages';

// This context is used to manage folder pagination
// Can be used in multiple folders
const FolderPagesContext = createContext(null);
export const FolderPagesProvider = ({ children }) => {
    const [page, setPage] = useState(folderPages.level_1);

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
