import React, { useState, createContext } from 'react';

export const IndexContext = createContext();
export const IndexProvider = props => {
    const [index, setIndex] = useState({
        readme: 100,
        myProjects: 100,
        calculator: 100,
        memoryGame: 100,
        settings: 100
    });

    const activeWindow = newActive => {
        const newObj = {};
        Object.keys(index).forEach(item => (newObj[item] = 100));
        const activedWindow = Object.assign({}, newObj, { [newActive]: 104 });
        setIndex(activedWindow);
    };

    return (
        <IndexContext.Provider value={{ index, setIndex, activeWindow }}>
            {props.children}
        </IndexContext.Provider>
    );
};
