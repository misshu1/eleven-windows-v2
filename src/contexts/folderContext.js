import React, { createContext, useReducer, lazy } from 'react';
import cogIcon from '../assets/images/icons/cog.svg';
import docsIcon from '../assets/images/icons/docs.svg';
import storeIcon from '../assets/images/icons/store.svg';
import taskIcon from '../assets/images/icons/task.svg';
import calcIcon from '../assets/images/icons/calculator.svg';

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

export const FOLDER_ACTIONS = {
    open: 'OPEN',
    close: 'CLOSE',
    minimize: 'MINIMIZE',
    active: 'ACTIVE'
};

export const ICON_LOCATION = {
    desktop: 'DESKTOP',
    startMenuLeft: 'START_MENU_LEFT',
    startMenuRight: 'START_MENU_RIGHT',
    notificationsWindow: 'NOTIFICATIONS_WINDOW'
};

const APPS_STATE = [
    {
        id: 1,
        appName: 'Settings',
        widgetIcon: cogIcon,
        link: '/settings',
        component: <SettingsApp />,
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
        widgetIcon: docsIcon,
        link: '/docs',
        component: <DocsApp />,
        isOpen: isMobile ? 'open' : 'close',
        isMinimize: null,
        appIndex: 100,
        iconLocation: [ICON_LOCATION.desktop, ICON_LOCATION.startMenuRight]
    },
    {
        id: 3,
        appName: 'Calculator',
        widgetIcon: calcIcon,
        link: '/calculator',
        component: <CalculatorApp />,
        isOpen: isMobile ? 'open' : 'close',
        isMinimize: null,
        appIndex: 100,
        iconLocation: [ICON_LOCATION.startMenuRight]
    },
    {
        id: 4,
        appName: 'Store',
        widgetIcon: storeIcon,
        link: '/store',
        component: <StoreApp />,
        isOpen: isMobile ? 'open' : 'close',
        isMinimize: null,
        appIndex: 100,
        iconLocation: [ICON_LOCATION.desktop, ICON_LOCATION.startMenuRight]
    },
    {
        id: 5,
        appName: 'Task Manager',
        widgetIcon: taskIcon,
        link: '/taskManager',
        component: <TaskManagerApp />,
        isOpen: isMobile ? 'open' : 'close',
        isMinimize: null,
        appIndex: 100,
        iconLocation: [ICON_LOCATION.notificationsWindow]
    }
];

const folderReducer = (state, action) => {
    switch (action.type) {
        case FOLDER_ACTIONS.open:
            const selectedOpenApp = state.apps.find(
                item => item.id === action.id
            );

            if (selectedOpenApp.isOpen === 'close') {
                return {
                    ...state,
                    apps: state.apps.map(item =>
                        item.id === action.id
                            ? { ...item, isOpen: 'open', appIndex: 104 }
                            : { ...item, appIndex: 100 }
                    ),
                    openApps: [
                        ...state.openApps,
                        { ...selectedOpenApp, openSince: new Date().getTime() }
                    ]
                };
            } else {
                return state;
            }
        case FOLDER_ACTIONS.close:
            const selectedCloseApp = state.apps.find(
                item => item.id === action.id
            );

            if (selectedCloseApp.isOpen === 'open') {
                return {
                    ...state,
                    apps: state.apps.map(item =>
                        item.id === action.id
                            ? {
                                  ...item,
                                  isOpen: 'close',
                                  isMinimize: null,
                                  appIndex: 100
                              }
                            : item
                    ),
                    openApps: state.openApps.filter(
                        item => item.id !== action.id
                    )
                };
            } else {
                return state;
            }
        case FOLDER_ACTIONS.minimize:
            const selectedMinimizeApp = state.apps.find(
                item => item.id === action.id
            );

            if (selectedMinimizeApp.isMinimize !== action.boolean) {
                return {
                    ...state,
                    apps: state.apps.map(item =>
                        item.id === action.id
                            ? { ...item, isMinimize: action.boolean }
                            : item
                    )
                };
            } else {
                return state;
            }

        case FOLDER_ACTIONS.active:
            const selectedActiveApp = state.apps.find(
                item => item.id === action.id
            );

            if (selectedActiveApp.appIndex !== 104) {
                return {
                    ...state,
                    apps: state.apps.map(item =>
                        item.id === action.id
                            ? { ...item, appIndex: 104 }
                            : { ...item, appIndex: 100 }
                    )
                };
            } else {
                return state;
            }
        default:
            return state;
    }
};
export const FolderContext = createContext();
export const FolderProvider = props => {
    const [folderState, folderDispatch] = useReducer(folderReducer, {
        apps: APPS_STATE,
        openApps: []
    });

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
                folderDispatch,
                sortByAppName
            }}
        >
            {props.children}
        </FolderContext.Provider>
    );
};
