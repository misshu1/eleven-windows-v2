import React, { useState, createContext } from 'react';

const isMobile = window.matchMedia('(max-width: 28rem)').matches ? true : false;

export const FolderContext = createContext();
export const FolderProvider = props => {
    const [folder, setFolder] = useState({
        settingsOpen: isMobile ? 'open' : 'close',
        docsOpen: isMobile ? 'open' : 'close',
        calculatorOpen: isMobile ? 'open' : 'close',
        storeOpen: isMobile ? 'open' : 'close',
        taskManagerOpen: isMobile ? 'open' : 'close',
        settingsMinimize: null,
        docsMinimize: null,
        calculatorMinimize: null,
        storeMinimize: null,
        taskManagerMinimize: null,
        openApps: []
    });

    const startApp = (app, icon, zIndex, minimize) => {
        if (isMobile) {
            return;
        }
        if (folder[app] === 'close') {
            setFolder({
                ...folder,
                [app]: 'open',
                openApps: [...folder.openApps, [app, icon, zIndex, minimize]]
            });
        }
    };

    const closeApp = (app, minimize) => {
        if (isMobile) {
            return;
        }
        if (folder[app] === 'open') {
            setFolder({
                ...folder,
                [minimize]: null,
                [app]: 'close',
                openApps: [...folder.openApps.filter(item => item[0] !== app)]
            });
        }
    };

    const minimizeApp = (app, boolean) => {
        if (isMobile) {
            return;
        }
        if (folder[app] === null || folder[app] !== boolean) {
            setFolder({ ...folder, [app]: boolean });
        }
    };

    return (
        <FolderContext.Provider
            value={{ folder, setFolder, startApp, closeApp, minimizeApp }}
        >
            {props.children}
        </FolderContext.Provider>
    );
};
