import React, {
    createContext,
    lazy,
    useCallback,
    useContext,
    useMemo,
    useReducer
} from 'react';

import { CalculatorIcon } from 'assets/images/icons/CalculatorIcon';
import { SettingsIcon } from 'assets/images/icons/SettingsIcon';
import { DocsIcon } from 'assets/images/icons/DocsIcon';
import { TaskIcon } from 'assets/images/icons/TaskIcon';
import { StoreIcon } from 'assets/images/icons/StoreIcon';
import { MemoryGameIcon } from 'assets/images/icons/MemoryGameIcon';
import { CalendarIcon } from 'assets/images/icons/CalendarIcon';
import { zIndex } from 'components/theme/zIndex';
import { ICON_LOCATION, ROUTES } from 'components/common';
import { useAuth } from 'hooks';

const DocsApp = lazy(() => import('components/apps/docs/DocsApp'));
const SettingsApp = lazy(() => import('components/apps/settings/SettingsApp'));
const StoreApp = lazy(() => import('components/apps/store/StoreApp'));
const CalculatorApp = lazy(() =>
    import('components/apps/calculator/CalculatorApp')
);
const TaskManagerApp = lazy(() =>
    import('components/apps/taskManager/TaskManagerApp')
);
const CalendarApp = lazy(() => import('components/apps/calendar/CalendarApp'));
const MemoryGame = lazy(() => import('components/apps/memoryGame/MemoryGame'));
const MyAccountApp = lazy(() =>
    import('components/apps/myAccount/MyAccountApp')
);

const FOLDER_ACTIONS = {
    open: 'OPEN',
    close: 'CLOSE',
    closeAll: 'CLOSE_ALL',
    active: 'ACTIVE',
    minimizeUp: 'MINIMIZE_UP',
    minimizeDown: 'MINIMIZE_DOWN',
    maximizeUp: 'MAXIMIZE_UP',
    maximizeDown: 'MAXIMIZE_DOWN'
};

const APPS_STATE = [
    {
        id: 1,
        appName: 'Settings',
        widgetIcon: <SettingsIcon />,
        link: ROUTES.settings,
        component: <SettingsApp />,
        requireLogin: false,
        requireAdmin: false,
        isOpen: null,
        isMinimize: null,
        isMaximize: null,
        allowMaximize: true,
        appIndex: zIndex.folder.default,
        iconLocation: [
            ICON_LOCATION.windows.desktop,
            ICON_LOCATION.windows.notificationsWindow,
            ICON_LOCATION.windows.startMenu.left,
            ICON_LOCATION.mobile.homeScreen,
            ICON_LOCATION.mobile.appsMenu
        ]
    },
    {
        id: 2,
        appName: 'Docs',
        widgetIcon: <DocsIcon />,
        link: ROUTES.docs,
        component: <DocsApp />,
        requireLogin: true,
        requireAdmin: false,
        isOpen: null,
        isMinimize: null,
        isMaximize: null,
        allowMaximize: true,
        appIndex: zIndex.folder.default,
        iconLocation: [
            ICON_LOCATION.windows.desktop,
            ICON_LOCATION.windows.startMenu.right,
            ICON_LOCATION.mobile.homeScreen,
            ICON_LOCATION.mobile.appsMenu,
            ICON_LOCATION.linux.appsMenu
        ]
    },
    {
        id: 3,
        appName: 'Calculator',
        widgetIcon: <CalculatorIcon />,
        link: ROUTES.calculator,
        component: <CalculatorApp />,
        requireLogin: false,
        requireAdmin: false,
        isOpen: null,
        isMinimize: null,
        isMaximize: null,
        allowMaximize: false,
        appIndex: zIndex.folder.default,
        iconLocation: [
            ICON_LOCATION.windows.startMenu.right,
            ICON_LOCATION.linux.appsMenu,
            ICON_LOCATION.mobile.appsMenu
        ]
    },
    {
        id: 4,
        appName: 'Store',
        widgetIcon: <StoreIcon />,
        link: ROUTES.store,
        component: <StoreApp />,
        requireLogin: false,
        requireAdmin: false,
        isOpen: null,
        isMinimize: null,
        isMaximize: null,
        allowMaximize: true,
        appIndex: zIndex.folder.default,
        iconLocation: [
            ICON_LOCATION.windows.desktop,
            ICON_LOCATION.windows.startMenu.right,
            ICON_LOCATION.linux.appsMenu,
            ICON_LOCATION.mobile.homeScreen,
            ICON_LOCATION.mobile.appsMenu,
            ICON_LOCATION.cart.cartApp
        ]
    },
    {
        id: 5,
        appName: 'Task Manager',
        widgetIcon: <TaskIcon />,
        link: ROUTES.taskManager,
        component: <TaskManagerApp />,
        requireLogin: false,
        requireAdmin: false,
        isOpen: null,
        isMinimize: null,
        isMaximize: null,
        allowMaximize: true,
        appIndex: zIndex.folder.default,
        iconLocation: [
            ICON_LOCATION.windows.notificationsWindow,
            ICON_LOCATION.linux.appsMenu
        ]
    },
    {
        id: 6,
        appName: 'Calendar',
        widgetIcon: <CalendarIcon />,
        link: ROUTES.calendar,
        component: <CalendarApp />,
        requireLogin: false,
        requireAdmin: false,
        isOpen: null,
        isMinimize: null,
        isMaximize: null,
        allowMaximize: true,
        appIndex: zIndex.folder.default,
        iconLocation: [
            ICON_LOCATION.windows.desktop,
            ICON_LOCATION.windows.startMenu.right,
            ICON_LOCATION.linux.appsMenu,
            ICON_LOCATION.mobile.homeScreen,
            ICON_LOCATION.mobile.appsMenu
        ]
    },
    {
        id: 7,
        appName: 'My Account',
        widgetIcon: <SettingsIcon />,
        link: ROUTES.myAccount,
        component: <MyAccountApp />,
        requireLogin: true,
        requireAdmin: false,
        isOpen: null,
        isMinimize: null,
        isMaximize: null,
        allowMaximize: true,
        appIndex: zIndex.folder.default,
        iconLocation: [
            ICON_LOCATION.windows.desktop,
            ICON_LOCATION.windows.notificationsWindow,
            ICON_LOCATION.windows.startMenu.left,
            ICON_LOCATION.mobile.homeScreen,
            ICON_LOCATION.mobile.appsMenu,
            ICON_LOCATION.linux.appsMenu
        ]
    },
    {
        id: 8,
        appName: 'Memory Game',
        widgetIcon: <MemoryGameIcon />,
        link: ROUTES.memoryGame,
        component: <MemoryGame />,
        requireLogin: false,
        requireAdmin: false,
        isOpen: null,
        isMinimize: null,
        isMaximize: null,
        allowMaximize: true,
        appIndex: zIndex.folder.default,
        iconLocation: [
            ICON_LOCATION.windows.desktop,
            ICON_LOCATION.windows.startMenu.right,
            ICON_LOCATION.mobile.homeScreen,
            ICON_LOCATION.mobile.appsMenu,
            ICON_LOCATION.linux.appsMenu
        ]
    }
];

const folderReducer = (state, action) => {
    const currentApp = state.apps.find((app) => app.id === action.payload);

    switch (action.type) {
        case FOLDER_ACTIONS.open: {
            if (!currentApp.isOpen) {
                return {
                    ...state,
                    apps: state.apps.map((app) =>
                        app.id === action.payload
                            ? {
                                  ...app,
                                  isOpen: true,
                                  appIndex: zIndex.folder.active
                              }
                            : { ...app, appIndex: zIndex.folder.default }
                    ),
                    openApps: [
                        ...state.openApps,
                        { ...currentApp, openSince: new Date().getTime() }
                    ]
                };
            } else {
                return state;
            }
        }

        case FOLDER_ACTIONS.close: {
            if (currentApp.isOpen === true) {
                return {
                    ...state,
                    apps: state.apps.map((app) =>
                        app.id === action.payload
                            ? {
                                  ...app,
                                  isOpen: false,
                                  isMinimize: null,
                                  appIndex: zIndex.folder.default
                              }
                            : app
                    ),
                    openApps: state.openApps.filter(
                        (app) => app.id !== action.payload
                    )
                };
            } else {
                return state;
            }
        }

        case FOLDER_ACTIONS.minimizeUp: {
            if (currentApp.isMinimize) {
                return {
                    ...state,
                    apps: state.apps.map((app) =>
                        app.id === action.payload
                            ? { ...app, isMinimize: false }
                            : app
                    )
                };
            } else {
                return state;
            }
        }

        case FOLDER_ACTIONS.minimizeDown: {
            if (currentApp.isMinimize !== true) {
                return {
                    ...state,
                    apps: state.apps.map((app) =>
                        app.id === action.payload
                            ? { ...app, isMinimize: true }
                            : app
                    )
                };
            } else {
                return state;
            }
        }

        case FOLDER_ACTIONS.maximizeUp: {
            if (currentApp.isMaximize !== true) {
                return {
                    ...state,
                    apps: state.apps.map((app) =>
                        app.id === action.payload
                            ? { ...app, isMaximize: true }
                            : app
                    )
                };
            } else {
                return state;
            }
        }

        case FOLDER_ACTIONS.maximizeDown: {
            if (currentApp.isMaximize) {
                return {
                    ...state,
                    apps: state.apps.map((app) =>
                        app.id === action.payload
                            ? { ...app, isMaximize: false }
                            : app
                    )
                };
            } else {
                return state;
            }
        }

        case FOLDER_ACTIONS.active: {
            if (currentApp.appIndex !== zIndex.folder.active) {
                return {
                    ...state,
                    apps: state.apps.map((app) =>
                        app.id === action.payload
                            ? { ...app, appIndex: zIndex.folder.active }
                            : { ...app, appIndex: zIndex.folder.default }
                    )
                };
            } else {
                return state;
            }
        }

        case FOLDER_ACTIONS.closeAll: {
            return {
                ...state,
                apps: state.apps.map((app) => ({
                    ...app,
                    isOpen: null,
                    isMinimize: null,
                    appIndex: zIndex.folder.default
                })),
                openApps: []
            };
        }

        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
};

const FolderContext = createContext();
const DispatchFolderContext = createContext();
export const FolderProvider = ({ children }) => {
    const { isUserAdmin, isUserLoggedIn } = useAuth();
    const [folderState, folderDispatch] = useReducer(folderReducer, {
        apps: APPS_STATE,
        openApps: []
    });

    const openFolder = (appId) => {
        folderDispatch({
            type: FOLDER_ACTIONS.open,
            payload: appId
        });
    };

    const closeFolder = (appId) => {
        folderDispatch({
            type: FOLDER_ACTIONS.close,
            payload: appId
        });
    };

    const closeAllFolders = () => {
        folderDispatch({ type: FOLDER_ACTIONS.closeAll });
    };

    const activeFolder = (appId) => {
        folderDispatch({
            type: FOLDER_ACTIONS.active,
            payload: appId
        });
    };

    const minimizeUp = (appId) => {
        folderDispatch({
            type: FOLDER_ACTIONS.minimizeUp,
            payload: appId
        });
    };

    const minimizeDown = (appId) => {
        folderDispatch({
            type: FOLDER_ACTIONS.minimizeDown,
            payload: appId
        });
    };

    const maximizeUp = (appId) => {
        folderDispatch({
            type: FOLDER_ACTIONS.maximizeUp,
            payload: appId
        });
    };

    const maximizeDown = (appId) => {
        folderDispatch({
            type: FOLDER_ACTIONS.maximizeDown,
            payload: appId
        });
    };

    const sortByAppName = (a, b) => {
        const nameA = a.appName.toUpperCase();
        const nameB = b.appName.toUpperCase();

        let comparison = 0;
        if (nameA > nameB) {
            comparison = 1;
        } else if (nameA < nameB) {
            comparison = -1;
        }
        return comparison;
    };

    const getFolder = useCallback(
        (appId) => {
            return folderState.apps.find((app) => app.id === appId);
        },
        [folderState]
    );

    const isFolderActive = useCallback(
        (appId) => {
            const app = folderState.apps.find(
                (folderApp) => folderApp.id === appId
            );

            return app.appIndex === zIndex.folder.active;
        },
        [folderState]
    );

    const checkUserPermisions = useCallback(
        (app) => {
            if (app.requireAdmin && !isUserAdmin()) {
                return false;
            } else if (app.requireLogin && !isUserLoggedIn()) {
                return false;
            } else {
                return true;
            }
        },
        [isUserAdmin, isUserLoggedIn]
    );

    const folderContextValue = useMemo(() => {
        return {
            folderState,
            sortByAppName,
            getFolder,
            checkUserPermisions,
            isFolderActive
        };
    }, [checkUserPermisions, folderState, getFolder, isFolderActive]);

    const dispatchFolderContextValue = useMemo(() => {
        return {
            openFolder,
            closeFolder,
            closeAllFolders,
            activeFolder,
            minimizeUp,
            minimizeDown,
            maximizeUp,
            maximizeDown
        };
    }, []);

    return (
        <FolderContext.Provider value={folderContextValue}>
            <DispatchFolderContext.Provider value={dispatchFolderContextValue}>
                {children}
            </DispatchFolderContext.Provider>
        </FolderContext.Provider>
    );
};

export const useFolderContext = () => {
    return useContext(FolderContext);
};

export const useDispatchFolderContext = () => {
    return useContext(DispatchFolderContext);
};
