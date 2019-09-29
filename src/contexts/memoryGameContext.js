import React, { useState, createContext } from 'react';

export const MemoryGameContext = createContext();
export const MemoryGameProvider = props => {
    const [memoryGame, setMemoryGame] = useState({
        open: false,
        minimize: null
    });
    return (
        <MemoryGameContext.Provider value={{ memoryGame, setMemoryGame }}>
            {props.children}
        </MemoryGameContext.Provider>
    );
};
