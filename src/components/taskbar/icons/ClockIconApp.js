import React, { useEffect, useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ClockContainer } from '../style';
import { TaskbarContext } from '../../../contexts/taskbarContext';

const ClockIconApp = () => {
    const { startTaskbarApp, handleKeyPress } = useContext(TaskbarContext);
    const [clock, setClock] = useState({
        hour: new Date().getHours(),
        minute: new Date().getMinutes(),
        year: new Date().getFullYear(),
        month: new Date().getMonth(),
        day: new Date().getDate()
    });
    const { hour, minute, year, month, day } = clock;
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
        const update = () => {
            setClock(prevState => ({
                ...prevState,
                hour: new Date().getHours(),
                minute: new Date().getMinutes(),
                year: new Date().getFullYear(),
                month: new Date().getMonth(),
                day: new Date().getDate()
            }));
        };
        setInterval(update, 1000);

        return function() {
            clearInterval(update);
        };
    }, [setClock]);

    return (
        <ClockContainer
            tabIndex='0'
            onKeyPress={e => handleKeyPress(e, 'calendarOpen')}
            onClick={() => startTaskbarApp('calendarOpen')}
        >
            {`${hours}:${minutes}${session}`} <br />
            {`${currentDay}-${t(
                `calendar.monthAbrev.${currentMonth}`
            )}-${year}`}
        </ClockContainer>
    );
};

export default ClockIconApp;
