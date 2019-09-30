import React, { useState, createContext } from 'react';

export const ClockContext = createContext();
export const ClockProvider = props => {
    const [clock, setClock] = useState({
        hour: new Date().getHours(),
        minute: new Date().getMinutes(),
        year: new Date().getFullYear(),
        month: new Date().getMonth(),
        day: new Date().getDate()
    });
    return (
        <ClockContext.Provider value={{ clock, setClock }}>
            {props.children}
        </ClockContext.Provider>
    );
};
