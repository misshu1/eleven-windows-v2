import React, {
    createContext,
    lazy,
    useContext,
    useReducer,
    useState,
} from 'react';

const AppsPreview = lazy(() =>
    import('../sideMenu/components/apps/AppsPreview')
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
        name: 'Settings',
        fontIcon: ['fas', 'cog'],
        component: <p>settings content soon</p>,
        isActive: false,
    },
    {
        id: 3,
        name: 'Notifications',
        fontIcon: ['far', 'comment-alt'],
        component: <p>some notifications here coming soon</p>,
        isActive: false,
        showNotificationBadge: true,
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