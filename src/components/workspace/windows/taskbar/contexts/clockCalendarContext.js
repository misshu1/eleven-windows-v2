import React, { createContext, useCallback, useContext, useState } from 'react';

const ClockCalendarContext = createContext();
export const ClockCalendarProvider = ({ children }) => {
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);

    const toggleCalendar = useCallback(() => {
        setIsCalendarOpen((prevState) => !prevState);
    }, [setIsCalendarOpen]);

    const closeCalendar = useCallback(() => {
        setIsCalendarOpen(false);
    }, [setIsCalendarOpen]);

    return (
        <ClockCalendarContext.Provider
            value={{
                toggleCalendar,
                closeCalendar,
                isCalendarOpen,
            }}
        >
            {children}
        </ClockCalendarContext.Provider>
    );
};

export const useClockCalendarContext = () => {
    return useContext(ClockCalendarContext);
};
