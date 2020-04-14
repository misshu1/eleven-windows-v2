import React, { createContext, useContext, useReducer } from 'react';

const MENU_ACTIONS = {
    open: 'OPEN',
    close: 'CLOSE',
    active: 'ACTIVE',
};

SIDE_MENU_STATE = {
    icons: [
        {
            id: 1,
            name: 'Apps',
            widgetIcon: null, // icon menu
            component: null, // this is for expanded view content
            isActive: false,
        },
    ],
    isMenuOpen: false,
};

const SideMenuContext = createContext();
const SideMenuProvider = (props) => {
    const [folderState, folderDispatch] = useReducer(
        reducerName,
        SIDE_MENU_STATE
    );

    return (
        <SideMenuContext.Provider value={{}}>
            {props.children}
        </SideMenuContext.Provider>
    );
};

export const useSideMenuContext = () => {
    return useContext(SideMenuContext);
};
