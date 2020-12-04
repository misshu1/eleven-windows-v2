import React, {
    createContext,
    useContext,
    useEffect,
    useLayoutEffect,
    useState
} from 'react';

// This values are coming from the 'assets/languages'
const WEEK_START_DAY = {
    monday: 'calendar.day.2',
    sunday: 'calendar.day.1'
};

const CALENDAR_TYPE = {
    iso8601: 'ISO 8601',
    us: 'US'
};

// If you need this settings in the calendar from startMenu
// Move this logic to 'settingsContext'
// And update the startMenu calendar to use this settings

const CalendarContext = createContext(null);
export const CalendarProvider = ({ children }) => {
    const [weekStartDay, setWeekStartDay] = useState(WEEK_START_DAY.monday);
    const [calendarType, setCalendarType] = useState(CALENDAR_TYPE.iso8601);
    const [showWeekNumber, setShowWeekNumber] = useState(true);

    useLayoutEffect(() => {
        const showWeekNumberLocalStorage = localStorage.getItem(
            'showWeekNumber'
        );

        if (!showWeekNumberLocalStorage) {
            localStorage.setItem('showWeekNumber', showWeekNumber);
        } else {
            setShowWeekNumber(JSON.parse(showWeekNumberLocalStorage));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useLayoutEffect(() => {
        const weekStartLocalStorage = localStorage.getItem('weekStart');

        if (!weekStartLocalStorage) {
            localStorage.setItem('weekStart', weekStartDay);
        } else {
            setWeekStartDay(weekStartLocalStorage);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (weekStartDay === WEEK_START_DAY.monday) {
            setFirstDayMonday();
        } else {
            setFirstDaySunday();
        }
    }, [weekStartDay]);

    function setFirstDayMonday() {
        localStorage.setItem('weekStart', WEEK_START_DAY.monday);
        setCalendarType(CALENDAR_TYPE.iso8601);
    }

    function setFirstDaySunday() {
        localStorage.setItem('weekStart', WEEK_START_DAY.sunday);
        setCalendarType(CALENDAR_TYPE.us);
    }

    function toggleShowWeekNumber(bool) {
        localStorage.setItem('showWeekNumber', bool);
        setShowWeekNumber(bool);
    }

    return (
        <CalendarContext.Provider
            value={{
                weekStartDay,
                setWeekStartDay,
                WEEK_START_DAY,
                calendarType,
                showWeekNumber,
                toggleShowWeekNumber
            }}
        >
            {children}
        </CalendarContext.Provider>
    );
};

export const useCalendarContext = () => {
    return useContext(CalendarContext);
};
