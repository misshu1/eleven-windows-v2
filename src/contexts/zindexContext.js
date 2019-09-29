import React, { useState, createContext } from 'react';

export const ZindexContext = createContext();
export const ZindexProvider = props => {
    const [zindex, setZindex] = useState({
        calculator: 100,
        memoryGame: 100,
        settings: 100
    });
    return (
        <ZindexContext.Provider value={{ zindex, setZindex }}>
            {props.children}
        </ZindexContext.Provider>
    );
};
