import React, { useState, createContext, useContext } from 'react';
import cogIcon from '../assets/images/icons/cog.svg';
import docsIcon from '../assets/images/icons/docs.svg';
import storeIcon from '../assets/images/icons/store.svg';
import taskIcon from '../assets/images/icons/task.svg';
import calcIcon from '../assets/images/icons/calculator.svg';

const ICON_LOCATION = {
    desktop: 'DESKTOP',
    startMenuLeft: 'START_MENU_LEFT',
    startMenuRight: 'START_MENU_RIGHT',
    notificationsWindow: 'NOTIFICATIONS_WINDOW'
};

const AppIconsContext = createContext();
const AppIconsProvider = props => {
    const [icons] = useState([
        {
            iconDisplayName: 'Docs',
            widgetIcon: docsIcon,
            linkMobile: '/docs',
            appIndexName: 'docs',
            appMinimize: 'docsMinimize',
            appOpen: 'docsOpen',
            iconLocation: [ICON_LOCATION.desktop, ICON_LOCATION.startMenuRight]
        },
        {
            iconDisplayName: 'Store',
            widgetIcon: storeIcon,
            linkMobile: '/store',
            appIndexName: 'store',
            appMinimize: 'storeMinimize',
            appOpen: 'storeOpen',
            iconLocation: [ICON_LOCATION.desktop, ICON_LOCATION.startMenuRight]
        },
        {
            iconDisplayName: 'Settings',
            widgetIcon: cogIcon,
            linkMobile: '/settings',
            appIndexName: 'settings',
            appMinimize: 'settingsMinimize',
            appOpen: 'settingsOpen',
            iconLocation: [
                ICON_LOCATION.desktop,
                ICON_LOCATION.notificationsWindow,
                ICON_LOCATION.startMenuLeft
            ]
        },
        {
            iconDisplayName: 'Task Manager',
            widgetIcon: taskIcon,
            linkMobile: 'taskManager',
            appIndexName: 'taskManager',
            appMinimize: 'taskManagerMinimize',
            appOpen: 'taskManagerOpen',
            iconLocation: [ICON_LOCATION.notificationsWindow]
        },
        {
            iconDisplayName: 'Calculator',
            widgetIcon: calcIcon,
            linkMobile: '/calculator',
            appIndexName: 'calculator',
            appMinimize: 'calculatorMinimize',
            appOpen: 'calculatorOpen',
            iconLocation: [ICON_LOCATION.startMenuRight]
        }
    ]);

    return (
        <AppIconsContext.Provider value={{ icons, ICON_LOCATION }}>
            {props.children}
        </AppIconsContext.Provider>
    );
};

const useAppIconsContext = () => {
    return useContext(AppIconsContext);
};

export { AppIconsProvider, useAppIconsContext };
