import React, { createContext, lazy, useContext, useLayoutEffect, useReducer } from 'react';

import CalculatorIcon from '../assets/images/icons/CalculatorIcon';
import DocsIcon from '../assets/images/icons/DocsIcon';
import SettingsIcon from '../assets/images/icons/SettingsIcon';
import StoreIcon from '../assets/images/icons/StoreIcon';
import TaskIcon from '../assets/images/icons/TaskIcon';

const DocsApp = lazy(() => import('../components/apps/docs/DocsApp'));
const SettingsApp = lazy(() =>
    import('../components/apps/settings/SettingsApp')
);
const StoreApp = lazy(() => import('../components/apps/store/StoreApp'));
const CalculatorApp = lazy(() =>
    import('../components/apps/calculator/CalculatorApp')
);
const TaskManagerApp = lazy(() =>
    import('../components/apps/taskManager/TaskManagerApp')
);

const FOLDER_ACTIONS = {
    open: 'OPEN',
    close: 'CLOSE',
    closeAll: 'CLOSE_ALL',
    active: 'ACTIVE',
    minimizeUp: 'MINIMIZE_UP',
    minimizeDown: 'MINIMIZE_DOWN',
    setIsAppOpen: 'SET_IS_APP_OPEN',
};

export const ICON_LOCATION = {
    windows: {
        desktop: 'WINDOWS_DESKTOP',
        notificationsWindow: 'WINDOWS_NOTIFICATIONS_WINDOW',
        startMenu: {
            left: 'WINDOWS_STARTMENU_LEFT',
            right: 'WINDOWS_STARTMENU_RIGHT',
        },
    },
    linux: {
        desktop: 'LINUX_DESKTOP',
        appsMenu: 'LINUX_APPS_MENU',
    },
    mobile: {
        homeScreen: 'MOBILE_HOME_SCREEN',
        appsMenu: 'MOBILE_APPS_MENU',
    },
    cart: {
        cartApp: 'CART_APP',
    },
};

const APPS_STATE = [
    {
        id: 1,
        appName: 'Settings',
        widgetIcon: <SettingsIcon />,
        link: '/settings',
        component: <SettingsApp />,
        isOpen: null,
        isMinimize: null,
        appIndex: 100,
        iconLocation: [
            ICON_LOCATION.windows.desktop,
            ICON_LOCATION.windows.notificationsWindow,
            ICON_LOCATION.windows.startMenu.left,
            ICON_LOCATION.mobile.homeScreen,
            ICON_LOCATION.mobile.appsMenu,
        ],
    },
    {
        id: 2,
        appName: 'Docs',
        widgetIcon: <DocsIcon />,
        link: '/docs',
        component: <DocsApp />,
        isOpen: null,
        isMinimize: null,
        appIndex: 100,
        iconLocation: [
            ICON_LOCATION.windows.desktop,
            ICON_LOCATION.windows.startMenu.right,
            ICON_LOCATION.mobile.homeScreen,
            ICON_LOCATION.mobile.appsMenu,
            ICON_LOCATION.linux.appsMenu,
        ],
    },
    {
        id: 3,
        appName: 'Calculator',
        widgetIcon: <CalculatorIcon />,
        link: '/calculator',
        component: <CalculatorApp />,
        isOpen: null,
        isMinimize: null,
        appIndex: 100,
        iconLocation: [
            ICON_LOCATION.windows.startMenu.right,
            ICON_LOCATION.linux.appsMenu,
            ICON_LOCATION.mobile.appsMenu,
        ],
    },
    {
        id: 4,
        appName: 'Store',
        widgetIcon: <StoreIcon />,
        link: '/store',
        component: <StoreApp />,
        isOpen: null,
        isMinimize: null,
        appIndex: 100,
        iconLocation: [
            ICON_LOCATION.windows.desktop,
            ICON_LOCATION.windows.startMenu.right,
            ICON_LOCATION.linux.appsMenu,
            ICON_LOCATION.mobile.homeScreen,
            ICON_LOCATION.mobile.appsMenu,
            ICON_LOCATION.cart.cartApp,
        ],
    },
    {
        id: 5,
        appName: 'Task Manager',
        widgetIcon: <TaskIcon />,
        link: '/taskManager',
        component: <TaskManagerApp />,
        isOpen: null,
        isMinimize: null,
        appIndex: 100,
        iconLocation: [ICON_LOCATION.windows.notificationsWindow],
    },
];

const folderReducer = (state, action) => {
    const app = state.apps.find((item) => item.id === action.payload);

    switch (action.type) {
        case FOLDER_ACTIONS.open:
            if (!app.isOpen) {
                return {
                    ...state,
                    apps: state.apps.map((item) =>
                        item.id === action.payload
                            ? { ...item, isOpen: true, appIndex: 104 }
                            : { ...item, appIndex: 100 }
                    ),
                    openApps: [
                        ...state.openApps,
                        { ...app, openSince: new Date().getTime() },
                    ],
                };
            } else {
                return state;
            }
        case FOLDER_ACTIONS.close:
            if (app.isOpen === true) {
                return {
                    ...state,
                    apps: state.apps.map((item) =>
                        item.id === action.payload
                            ? {
                                  ...item,
                                  isOpen: false,
                                  isMinimize: null,
                                  appIndex: 100,
                              }
                            : item
                    ),
                    openApps: state.openApps.filter(
                        (item) => item.id !== action.payload
                    ),
                };
            } else {
                return state;
            }

        case FOLDER_ACTIONS.minimizeUp:
            if (app.isMinimize === true) {
                return {
                    ...state,
                    apps: state.apps.map((item) =>
                        item.id === action.payload
                            ? { ...item, isMinimize: false }
                            : item
                    ),
                };
            } else {
                return state;
            }

        case FOLDER_ACTIONS.minimizeDown:
            if (app.isMinimize !== true) {
                return {
                    ...state,
                    apps: state.apps.map((item) =>
                        item.id === action.payload
                            ? { ...item, isMinimize: true }
                            : item
                    ),
                };
            } else {
                return state;
            }

        case FOLDER_ACTIONS.active:
            if (app.appIndex !== 104) {
                return {
                    ...state,
                    apps: state.apps.map((item) =>
                        item.id === action.payload
                            ? { ...item, appIndex: 104 }
                            : { ...item, appIndex: 100 }
                    ),
                };
            } else {
                return state;
            }

        case FOLDER_ACTIONS.closeAll:
            return {
                ...state,
                apps: state.apps.map((item) => ({
                    ...item,
                    isOpen: null,
                    isMinimize: null,
                    appIndex: 100,
                })),
                openApps: [],
            };

        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

const FolderContext = createContext();
const DispatchFolderContext = createContext();
export const FolderProvider = (props) => {
    const [folderState, folderDispatch] = useReducer(folderReducer, {
        apps: APPS_STATE,
        openApps: [],
    });

    const openFolder = (appId) => {
        folderDispatch({
            type: FOLDER_ACTIONS.open,
            payload: appId,
        });
    };

    const closeAllFolders = () => {
        folderDispatch({
            type: FOLDER_ACTIONS.closeAll,
        });
    };

    const closeFolder = (appId) => {
        folderDispatch({
            type: FOLDER_ACTIONS.close,
            payload: appId,
        });
    };

    const activeFolder = (appId) => {
        folderDispatch({
            type: FOLDER_ACTIONS.active,
            payload: appId,
        });
    };

    const minimizeUp = (appId) => {
        folderDispatch({
            type: FOLDER_ACTIONS.minimizeUp,
            payload: appId,
        });
    };

    const minimizeDown = (appId) => {
        folderDispatch({
            type: FOLDER_ACTIONS.minimizeDown,
            payload: appId,
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

    return (
        <FolderContext.Provider
            value={{
                folderState,
                sortByAppName,
            }}
        >
            <DispatchFolderContext.Provider
                value={{
                    openFolder,
                    closeFolder,
                    activeFolder,
                    minimizeUp,
                    minimizeDown,
                    closeAllFolders,
                }}
            >
                {props.children}
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
