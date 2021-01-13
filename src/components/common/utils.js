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
    memoryGame: '/memory-game',
    terms: '/terms',
    privacy: '/privacy-policy',
    contact: '/contact',
    404: '/404',
    401: '/401',
    500: '/500'
};

export const formatTime = (timer) => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
};

export function isFunction(obj) {
    return typeof obj == 'function' || false;
}

export function isObject(obj) {
    const type = typeof obj;
    return type === 'function' || (type === 'object' && !!obj);
}

export function disableReactDevTools() {
    // Ensure the React Developer Tools global hook exists
    if (!isObject(window.__REACT_DEVTOOLS_GLOBAL_HOOK__)) {
        return;
    }

    // Replace all global hook properties with a no-op function or a null value
    for (const prop in window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
        window.__REACT_DEVTOOLS_GLOBAL_HOOK__[prop] = isFunction(
            window.__REACT_DEVTOOLS_GLOBAL_HOOK__[prop]
        )
            ? Function.prototype
            : null;
    }
}
