import React, { createContext, lazy, useContext, useReducer, useState } from 'react';

const AppsPreview = lazy(() =>
    import('../sideMenu/previewMenu/apps/AppsPreview')
);
const SettingsPreviewApp = lazy(() =>
    import('../sideMenu/previewMenu/settings/SettingsPreviewApp')
);
const NotificationsPreviewApp = lazy(() =>
    import('../sideMenu/previewMenu/notifications/NotificationsPreviewApp')
);

const CartPreviewApp = lazy(() =>
    import('../sideMenu/previewMenu/cart/CartPreviewApp')
);

const MENU_ACTIONS = {
    active: 'ACTIVE',
};

const SIDE_MENU_STATE = [
    {
        id: 1,
        name: 'Apps',
        fontIcon: ['fas', 'th'],
        component: <AppsPreview />,
        isActive: true,
    },
    {
        id: 2,
        name: 'Notifications',
        fontIcon: ['far', 'comment-alt'],
        component: <NotificationsPreviewApp />,
        isActive: false,
        showNotificationBadge: true,
    },
    {
        id: 3,
        name: 'Settings',
        fontIcon: ['fas', 'cog'],
        component: <SettingsPreviewApp />,
        isActive: false,
    },
    {
        id: 4,
        name: 'Cart',
        fontIcon: ['fas', 'shopping-cart'],
        component: <CartPreviewApp />,
        isActive: false,
        showCartBadge: true,
    },
];

const sideMenuReducer = (state, action) => {
    switch (action.type) {
        case MENU_ACTIONS.active:
            const selected = state.find((item) => item.id === action.payload);

            if (!selected.isActive) {
                return state.map((item) =>
                    item.id === action.payload
                        ? { ...item, isActive: true }
                        : { ...item, isActive: false }
                );
            } else {
                return state;
            }

        default:
            return state;
    }
};

const SideMenuContext = createContext();
export const SideMenuProvider = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(null);

    const [sideMenuState, sideMenuDispatch] = useReducer(
        sideMenuReducer,
        SIDE_MENU_STATE
    );

    const activeMenuIcon = (appId) => {
        sideMenuDispatch({
            type: MENU_ACTIONS.active,
            payload: appId,
        });
    };

    const openSideMenu = () => {
        activeMenuIcon(1);
        !isMenuOpen && setIsMenuOpen(true);
    };

    const closeSideMenu = () => {
        isMenuOpen && setIsMenuOpen(false);
    };
    return (
        <SideMenuContext.Provider
            value={{
                sideMenuState,
                isMenuOpen,
                openSideMenu,
                closeSideMenu,
                activeMenuIcon,
            }}
        >
            {children}
        </SideMenuContext.Provider>
    );
};

export const useSideMenuContext = () => {
    return useContext(SideMenuContext);
};
