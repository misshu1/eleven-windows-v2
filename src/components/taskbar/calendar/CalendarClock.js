import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ClockStyleCalendar } from './style';
import { useTranslation } from 'react-i18next';

const CalendarClock = ({ goToToday }) => {
    const [clock, setClock] = useState({
        hour: new Date().getHours(),
        minute: new Date().getMinutes(),
        second: new Date().getSeconds(),
        year: new Date().getFullYear(),
        month: new Date().getMonth(),
        day: new Date().getDate(),
        wDay: new Date().getDay()
    });
    const { hour, minute, second, year, month, day, wDay } = clock;
    const { t } = useTranslation();

    let hours = hour;
    let minutes = minute;
    let seconds = second;
    let session = ' AM';
    let currentMonth = month + 1;

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
        let update = setInterval(() => {
            setClock({
                hour: new Date().getHours(),
                minute: new Date().getMinutes(),
                second: new Date().getSeconds(),
                year: new Date().getFullYear(),
                month: new Date().getMonth(),
                day: new Date().getDate(),
                wDay: new Date().getDay()
            });
        }, 1000);

        return () => {
            clearInterval(update);
        };
    }, [clock, setClock]);

    return (
        <ClockStyleCalendar>
            <span>{`${hours}:${minutes}:${seconds}`}</span>
            <span>{session}</span>
            <span onClick={goToToday}>
                {`${t(`calendar.day.${wDay + 1}`)}, ${day} ${t(
                    `calendar.month.${currentMonth}`
                )}, ${year}`}
            </span>
        </ClockStyleCalendar>
    );
};

export default CalendarClock;

CalendarClock.propTypes = {
    goToToday: PropTypes.func.isRequired
};
