import React, { createContext, lazy, useContext, useReducer } from 'react';

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
const isMobile = window.matchMedia('(max-width: 28rem)').matches ? true : false;

const FOLDER_ACTIONS = {
    open: 'OPEN',
    close: 'CLOSE',
    active: 'ACTIVE',
    minimizeUp: 'MINIMIZE_UP',
    minimizeDown: 'MINIMIZE_DOWN',
};

export const ICON_LOCATION = {
    desktop: 'DESKTOP',
    startMenuLeft: 'START_MENU_LEFT',
    startMenuRight: 'START_MENU_RIGHT',
    notificationsWindow: 'NOTIFICATIONS_WINDOW',
};

const APPS_STATE = [
    {
        id: 1,
        appName: 'Settings',
        widgetIcon: <SettingsIcon />,
        link: '/settings',
        component: <SettingsApp />,
        isOpen: isMobile ? 'open' : 'close',
        isMinimize: null,
        appIndex: 100,
        iconLocation: [
            ICON_LOCATION.desktop,
            ICON_LOCATION.notificationsWindow,
            ICON_LOCATION.startMenuLeft,
        ],
    },
    {
        id: 2,
        appName: 'Docs',
        widgetIcon: <DocsIcon />,
        link: '/docs',
        component: <DocsApp />,
        isOpen: isMobile ? 'open' : 'close',
        isMinimize: null,
        appIndex: 100,
        iconLocation: [ICON_LOCATION.desktop, ICON_LOCATION.startMenuRight],
    },
    {
        id: 3,
        appName: 'Calculator',
        widgetIcon: <CalculatorIcon />,
        link: '/calculator',
        component: <CalculatorApp />,
        isOpen: isMobile ? 'open' : 'close',
        isMinimize: null,
        appIndex: 100,
        iconLocation: [ICON_LOCATION.startMenuRight],
    },
    {
        id: 4,
        appName: 'Store',
        widgetIcon: <StoreIcon />,
        link: '/store',
        component: <StoreApp />,
        isOpen: isMobile ? 'open' : 'close',
        isMinimize: null,
        appIndex: 100,
        iconLocation: [ICON_LOCATION.desktop, ICON_LOCATION.startMenuRight],
    },
    {
        id: 5,
        appName: 'Task Manager',
        widgetIcon: <TaskIcon />,
        link: '/taskManager',
        component: <TaskManagerApp />,
        isOpen: isMobile ? 'open' : 'close',
        isMinimize: null,
        appIndex: 100,
        iconLocation: [ICON_LOCATION.notificationsWindow],
    },
];

const folderReducer = (state, action) => {
    switch (action.type) {
        case FOLDER_ACTIONS.open:
            const selectedOpenApp = state.apps.find(
                (item) => item.id === action.payload
            );

            if (selectedOpenApp.isOpen === 'close') {
                return {
                    ...state,
                    apps: state.apps.map((item) =>
                        item.id === action.payload
                            ? { ...item, isOpen: 'open', appIndex: 104 }
                            : { ...item, appIndex: 100 }
                    ),
                    openApps: [
                        ...state.openApps,
                        { ...selectedOpenApp, openSince: new Date().getTime() },
                    ],
                };
            } else {
                return state;
            }
        case FOLDER_ACTIONS.close:
            const selectedCloseApp = state.apps.find(
                (item) => item.id === action.payload
            );

            if (selectedCloseApp.isOpen === 'open') {
                return {
                    ...state,
                    apps: state.apps.map((item) =>
                        item.id === action.payload
                            ? {
                                  ...item,
                                  isOpen: 'close',
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
            const selectedMinimizeUp = state.apps.find(
                (item) => item.id === action.payload
            );

            if (selectedMinimizeUp.isMinimize === true) {
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
            const selectedMinimizeDown = state.apps.find(
                (item) => item.id === action.payload
            );

            if (selectedMinimizeDown.isMinimize !== true) {
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
            const selectedActiveApp = state.apps.find(
                (item) => item.id === action.payload
            );

            if (selectedActiveApp.appIndex !== 104) {
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
        default:
            return state;
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
