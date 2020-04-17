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

// const MENU_ACTIONS = {
//     open: 'OPEN',
//     close: 'CLOSE',
//     active: 'ACTIVE',
// };

const SIDE_MENU_STATE = [
    {
        id: 1,
        name: 'Apps',
        fontIcon: ['fas', 'th'],
        component: <AppsPreview />, // this is for expanded view content
        isActive: true,
    },
];

const sideMenuReducer = (state, action) => {};

const SideMenuContext = createContext();
export const SideMenuProvider = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(null);

    const [
        sideMenuState,
        //  sideMenuDispatch
    ] = useReducer(sideMenuReducer, SIDE_MENU_STATE);

    const openSideMenu = () => {
        !isMenuOpen && setIsMenuOpen(true);
    };

    const closeSideMenu = () => {
        isMenuOpen && setIsMenuOpen(false);
    };
    return (
        <SideMenuContext.Provider
            value={{ sideMenuState, isMenuOpen, openSideMenu, closeSideMenu }}
        >
            {children}
        </SideMenuContext.Provider>
    );
};

export const useSideMenuContext = () => {
    return useContext(SideMenuContext);
};
