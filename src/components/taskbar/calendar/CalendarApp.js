import React, { useContext, useEffect } from 'react';
import Calendar from 'react-calendar/dist/entry.nostyle';
import { useTranslation } from 'react-i18next';
import { CalendarContainer, CalendarStyle, ClockStyleCalendar } from './style';
import { CalendarContext } from '../../../contexts/calendarContext';
import { TaskbarContext } from '../../../contexts/taskbarContext';

const CalendarApp = () => {
    const { calendar, setCalendar } = useContext(CalendarContext);
    const { taskbar } = useContext(TaskbarContext);
    const { calendarOpen } = taskbar;
    const { value, hour, minute, second, year, month, day, wDay } = calendar;
    const { t, i18n } = useTranslation();

    let currentDay = day;
    let hours = hour;
    let minutes = minute;
    let seconds = second;
    let session = ' AM';
    let currentMonth = month + 1;

    if (currentDay < 10) {
        currentDay = '0' + day;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + second;
    }
    if (hours > 12) {
        hours = hours - 12;
        session = ' PM';
    } else if (hours === 0) {
        hours = 12;
    }

    useEffect(() => {
        const update = () => {
            setCalendar(prevState => ({
                ...prevState,
                hour: new Date().getHours(),
                minute: new Date().getMinutes(),
                second: new Date().getSeconds(),
                year: new Date().getFullYear(),
                month: new Date().getMonth(),
                day: new Date().getDate(),
                wDay: new Date().getDay()
            }));
        };
        setInterval(update, 1000);

        return function() {
            clearInterval(update);
        };
    }, [setCalendar]);

    const calendarChange = value => {
        setCalendar(prevState => ({ ...prevState, value: value }));
    };

    const goToToday = () => {
        setCalendar(prevState => ({ ...prevState, value: new Date() }));
    };

    return (
        <React.Fragment>
            {calendarOpen && (
                <CalendarContainer>
                    <ClockStyleCalendar>
                        <span>{`${hours}:${minutes}:${seconds}`}</span>
                        <span>{session}</span>
                        <span onClick={goToToday}>
                            {`${t(`calendar.day.${wDay + 1}`)}, ${t(
                                `calendar.month.${currentMonth}`
                            )}, ${year}`}
                        </span>
                    </ClockStyleCalendar>
                    <CalendarStyle>
                        <Calendar
                            onChange={calendarChange}
                            value={value}
                            locale={i18n.language}
                            showFixedNumberOfWeeks={true}
                        />
                    </CalendarStyle>
                </CalendarContainer>
            )}
        </React.Fragment>
    );
};

export default CalendarApp;
