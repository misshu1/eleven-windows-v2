import React, { useState, createContext } from 'react';

export const CalendarContext = createContext();
export const CalendarProvider = props => {
    const [calendar, setCalendar] = useState({
        open: false
    });
    return (
        <CalendarContext.Provider value={{ calendar, setCalendar }}>
            {props.children}
        </CalendarContext.Provider>
    );
};
