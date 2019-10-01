import React, { useState, createContext } from 'react';

export const CalendarContext = createContext();
export const CalendarProvider = props => {
    const [calendar, setCalendar] = useState({
        value: new Date(),
        hour: new Date().getHours(),
        minute: new Date().getMinutes(),
        second: new Date().getSeconds(),
        year: new Date().getFullYear(),
        month: new Date().getMonth(),
        day: new Date().getDate(),
        wDay: new Date().getDay()
    });
    return (
        <CalendarContext.Provider value={{ calendar, setCalendar }}>
            {props.children}
        </CalendarContext.Provider>
    );
};
