import React, { createContext, lazy, useContext, useReducer } from 'react';

import FolderIcon from '../../../assets/images/icons/FolderIcon';

const AppsPreview = lazy(() =>
    import('../sideMenu/components/apps/AppsPreview')
);

const MENU_ACTIONS = {
    open: 'OPEN',
    close: 'CLOSE',
    active: 'ACTIVE',
};

const SIDE_MENU_STATE = [
    {
        id: 1,
        name: 'Apps',
        widgetIcon: <FolderIcon />,
        fontIcon: null,
        component: <AppsPreview />, // this is for expanded view content
        isActive: false,
    },
];

const sideMenuReducer = (state, action) => {};

const SideMenuContext = createContext();
export const SideMenuProvider = (props) => {
    const [sideMenuState, sideMenuDispatch] = useReducer(
        sideMenuReducer,
        SIDE_MENU_STATE
    );

    return (
        <SideMenuContext.Provider value={{ sideMenuState }}>
            {props.children}
        </SideMenuContext.Provider>
    );
};

export const useSideMenuContext = () => {
    return useContext(SideMenuContext);
};
