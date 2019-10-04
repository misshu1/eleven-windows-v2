import React, { useState, createContext } from 'react';

export const FolderContext = createContext();
export const FolderProvider = props => {
    const isMobile = window.matchMedia('(max-width: 28rem)').matches
        ? true
        : false;

    const [folder, setFolder] = useState({
        startMenuOpen: isMobile ? 'open' : 'close',
        memoryGameOpen: isMobile ? 'open' : 'close',
        calendarOpen: isMobile ? 'open' : 'close',
        calculatorOpen: isMobile ? 'open' : 'close',
        settingsOpen: isMobile ? 'open' : 'close',
        weatherOpen: isMobile ? 'open' : 'close',
        neighborhoodOpen: isMobile ? 'open' : 'close',
        resumeOpen: isMobile ? 'open' : 'close',
        aboutOpen: isMobile ? 'open' : 'close',
        contactOpen: isMobile ? 'open' : 'close',
        myProjectsOpen: isMobile ? 'open' : 'close',
        businessCompanyOpen: isMobile ? 'open' : 'close',
        myReadsOpen: isMobile ? 'open' : 'close',
        memoryGameMinimize: null,
        calculatorMinimize: null,
        settingsMinimize: null,
        weatherMinimize: null,
        neighborhoodMinimize: null,
        resumeMinimize: null,
        aboutMinimize: null,
        contactMinimize: null,
        myProjectsMinimize: null,
        businessCompanyMinimize: null,
        myReadsMinimize: null,
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
        setFolder({ ...folder, [app]: boolean });
    };

    return (
        <FolderContext.Provider
            value={{ folder, setFolder, startApp, closeApp, minimizeApp }}
        >
            {props.children}
        </FolderContext.Provider>
    );
};
