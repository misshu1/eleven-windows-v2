import React, { useState, createContext } from 'react';

const isMobile = window.matchMedia('(max-width: 28rem)').matches ? true : false;

const ICON_LOCATION = {
    desktop: 'DESKTOP',
    startMenuLeft: 'START_MENU_LEFT',
    startMenuRight: 'START_MENU_RIGHT',
    notificationsWindow: 'NOTIFICATIONS_WINDOW'
};

export const FolderContext = createContext();
export const FolderProvider = props => {
    const [folder, setFolder] = useState({
        settingsOpen: isMobile ? 'open' : 'close',
        docsOpen: isMobile ? 'open' : 'close',
        calculatorOpen: isMobile ? 'open' : 'close',
        storeOpen: isMobile ? 'open' : 'close',
        taskManagerOpen: 'close',
        settingsMinimize: null,
        docsMinimize: null,
        calculatorMinimize: null,
        storeMinimize: null,
        taskManagerMinimize: null,
        openApps: [],
        apps: [
            {
                id: 1,
                appName: 'Settings',
                widgetIcon: '',
                linkMobile: '/settings',
                isOpen: isMobile ? 'open' : 'close',
                isMinimize: null,
                appIndex: 100,
                iconLocation: [
                    ICON_LOCATION.desktop,
                    ICON_LOCATION.notificationsWindow,
                    ICON_LOCATION.startMenuLeft
                ]
            },
            {
                id: 2,
                appName: 'Docs',
                widgetIcon: '',
                linkMobile: '/docs',
                isOpen: isMobile ? 'open' : 'close',
                isMinimize: null,
                appIndex: 100,
                iconLocation: [
                    ICON_LOCATION.desktop,
                    ICON_LOCATION.startMenuRight
                ]
            },
            {
                id: 3,
                appName: 'Calculator',
                widgetIcon: '',
                linkMobile: '/calculator',
                isOpen: isMobile ? 'open' : 'close',
                isMinimize: null,
                appIndex: 100,
                iconLocation: [ICON_LOCATION.startMenuRight]
            },
            {
                id: 4,
                appName: 'Store',
                widgetIcon: '',
                linkMobile: '/store',
                isOpen: isMobile ? 'open' : 'close',
                isMinimize: null,
                appIndex: 100,
                iconLocation: [
                    ICON_LOCATION.desktop,
                    ICON_LOCATION.startMenuRight
                ]
            },
            {
                id: 5,
                appName: 'Task Manager',
                widgetIcon: '',
                linkMobile: '/taskManager',
                isOpen: isMobile ? 'open' : 'close',
                isMinimize: null,
                appIndex: 100,
                iconLocation: [ICON_LOCATION.notificationsWindow]
            }
        ]
    });

    const testStartApp = id => {
        if (isMobile) {
            return;
        }

        folder.apps.map(filter => {
            if (filter.id === id && filter.isOpen === 'close') {
                setFolder(prevState => ({
                    ...prevState,
                    apps: prevState.apps.map(item =>
                        item.id === id && item.isOpen === 'close'
                            ? { ...item, isOpen: 'open' }
                            : item
                    ),
                    openApps: [...prevState.openApps, filter]
                }));
            }
        });
    };

    const testCloseApp = id => {
        if (isMobile) {
            return;
        }

        folder.apps.map(filter => {
            if (filter.id === id && filter.isOpen === 'open') {
                setFolder(prevState => ({
                    ...prevState,
                    apps: prevState.apps.map(item =>
                        item.id === id && item.isOpen === 'open'
                            ? { ...item, isOpen: 'close' }
                            : item
                    ),
                    openApps: [
                        ...prevState.openApps.filter(item => item.id !== id)
                    ]
                }));
            }
        });
    };

    const testMinimizeApp = (id, boolean) => {
        if (isMobile) {
            return;
        }

        folder.apps.map(filter => {
            if (
                filter.id === id &&
                (filter.isMinimize === null || filter.isMinimize !== boolean)
            ) {
                setFolder(prevState => ({
                    ...prevState,
                    apps: prevState.apps.map(item =>
                        item.id === id &&
                        (item.isMinimize === null ||
                            item.isMinimize !== boolean)
                            ? { ...item, isMinimize: boolean }
                            : item
                    )
                }));
            }
        });
    };

    const testActiveWindow = id => {
        folder.apps.map(filter => {
            if (filter.id === id && filter.appIndex === 100) {
                setFolder(prevState => ({
                    ...prevState,
                    apps: prevState.apps.map(item =>
                        item.id === id && item.appIndex === 100
                            ? { ...item, appIndex: 104 }
                            : { ...item, appIndex: 100 }
                    )
                }));
            }
        });
    };

    const startApp = (app, icon, zIndex, minimize, tooltipName) => {
        if (isMobile) {
            return;
        }

        if (folder[app] === 'close') {
            setFolder({
                ...folder,
                [app]: 'open',
                openApps: [
                    ...folder.openApps,
                    [app, icon, zIndex, minimize, tooltipName]
                ]
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
            value={{
                folder,
                setFolder,
                startApp,
                closeApp,
                minimizeApp,
                testStartApp,
                testCloseApp,
                testMinimizeApp,
                testActiveWindow
            }}
        >
            {props.children}
        </FolderContext.Provider>
    );
};
