import React, { useState, createContext } from 'react';

export const IndexContext = createContext();
export const IndexProvider = props => {
    const [index, setIndex] = useState({
        calculator: 100,
        settings: 100,
        docs: 100,
        store: 100,
        taskManager: 100
    });

    const activeWindow = newActive => {
        if (index[newActive] !== 104) {
            const newObj = {};
            Object.keys(index).forEach(item => (newObj[item] = 100));
            const activedWindow = Object.assign({}, newObj, {
                [newActive]: 104
            });
            setIndex(activedWindow);
        }
    };

    return (
        <IndexContext.Provider value={{ index, setIndex, activeWindow }}>
            {props.children}
        </IndexContext.Provider>
    );
};
