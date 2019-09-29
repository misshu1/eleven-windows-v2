import React, { useState, createContext } from 'react';

export const OpenAppsContext = createContext();
export const OpenAppsProvider = props => {
    const [openApps, setOpenApps] = useState([]);
    return (
        <OpenAppsContext.Provider value={[openApps, setOpenApps]}>
            {props.children}
        </OpenAppsContext.Provider>
    );
};
