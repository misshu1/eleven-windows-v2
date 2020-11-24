export const ICON_LOCATION = {
    windows: {
        desktop: 'WINDOWS_DESKTOP',
        notificationsWindow: 'WINDOWS_NOTIFICATIONS_WINDOW',
        startMenu: {
            left: 'WINDOWS_STARTMENU_LEFT',
            right: 'WINDOWS_STARTMENU_RIGHT'
        }
    },
    linux: {
        desktop: 'LINUX_DESKTOP',
        appsMenu: 'LINUX_APPS_MENU'
    },
    mobile: {
        homeScreen: 'MOBILE_HOME_SCREEN',
        appsMenu: 'MOBILE_APPS_MENU'
    },
    cart: {
        cartApp: 'CART_APP'
    }
};

export const OS_THEME = {
    windows: 'WINDOWS',
    linux: 'LINUX',
    mobile: 'MOBILE'
};

export const NOTIFICATION_TYPE = {
    success: 'SUCCESS',
    error: 'ERROR',
    warning: 'WARNING',
    info: 'INFO'
};

export const FOLDER_PAGES = {
    level_1: 1,
    level_2: 2,
    level_3: 3,
    level_4: 4,
    level_5: 5,
    level_6: 6,
    level_7: 7,
    level_8: 8,
    level_9: 9,
    level_10: 10,
    level_11: 11,
    level_12: 12,
    level_13: 13,
    level_14: 14,
    level_15: 15
};

export const SCRIPT_STATUS = {
    idle: 'IDLE',
    loading: 'LOADING',
    ready: 'READY',
    error: 'ERROR'
};

export const ROUTES = {
    root: '/',
    workspace: '/*',
    login: '/login',
    checkout: '/checkout',
    settings: '/settings',
    store: '/store',
    docs: '/docs',
    calculator: '/calculator',
    taskManager: '/task-manager',
    calendar: '/calendar',
    myAccount: '/my-account',
    404: '/404',
    401: '/401',
    500: '/500'
};
