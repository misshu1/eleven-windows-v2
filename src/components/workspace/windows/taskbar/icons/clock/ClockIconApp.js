import Tooltip from '@material-ui/core/Tooltip';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useClockCalendarContext } from '../../contexts/clockCalendarContext';
import { Container } from './style';

const ClockIconApp = ({ clockRef }) => {
    const [clock, setClock] = useState({
        hour: new Date().getHours(),
        minute: new Date().getMinutes(),
        year: new Date().getFullYear(),
        month: new Date().getMonth(),
        day: new Date().getDate(),
        wDay: new Date().getDay(),
    });
    const { hour, minute, year, month, day, wDay } = clock;
    const { toggleCalendar, isCalendarOpen } = useClockCalendarContext();
    const { t } = useTranslation();

    let currentDay = day;
    let hours = hour;
    let minutes = minute;
    let session = ' AM';
    let currentMonth = month + 1;

    if (currentDay < 10) {
        currentDay = '0' + day;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (hours > 12) {
        hours = hours - 12;
        session = ' PM';
    } else if (hours === 0) {
        hours = 12;
    }

    useEffect(() => {
        const update = setInterval(() => {
            setClock((prevState) => ({
                ...prevState,
                hour: new Date().getHours(),
                minute: new Date().getMinutes(),
                year: new Date().getFullYear(),
                month: new Date().getMonth(),
                day: new Date().getDate(),
            }));
        }, 1000);

        return function () {
            clearInterval(update);
        };
    }, [setClock]);

    return (
        <Tooltip
            title={`${t(`calendar.day.${wDay + 1}`)}, ${day} ${t(
                `calendar.month.${currentMonth}`
            )}, ${year}`}
            placement='top'
            enterDelay={500}
        >
            <Container
                open={isCalendarOpen}
                tabIndex='0'
                onClick={toggleCalendar}
                ref={clockRef}
            >
                {`${hours}:${minutes}${session}`} <br />
                {`${currentDay}-${t(
                    `calendar.monthAbrev.${currentMonth}`
                )}-${year}`}
            </Container>
        </Tooltip>
    );
};

export default ClockIconApp;
