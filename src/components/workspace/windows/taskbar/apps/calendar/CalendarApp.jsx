import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Calendar from 'react-calendar';
import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';

import { ScrollbarApp } from 'components/common';
import { ClockContainer, Container, CustomCalendarStyles } from './style';

const CalendarApp = ({ calendarRef }) => {
    const [calendar, setCalendar] = useState({
        value: new Date(),
        startDate: new Date()
    });
    const { i18n } = useTranslation();

    const changeDate = (value) => {
        setCalendar({ value, startDate: null });
    };

    const goToToday = useCallback(() => {
        setCalendar({ value: new Date(), startDate: new Date() });
    }, []);

    return ReactDOM.createPortal(
        <Container ref={calendarRef}>
            <ScrollbarApp>
                <div>
                    <CalendarClock goToToday={goToToday} />
                    <CustomCalendarStyles>
                        <Calendar
                            value={calendar.value}
                            onChange={changeDate}
                            locale={i18n.language}
                            showFixedNumberOfWeeks={true}
                            activeStartDate={calendar.startDate}
                            onActiveStartDateChange={(e) =>
                                changeDate(e.activeStartDate)
                            }
                            nextLabel={
                                <FontAwesomeIcon
                                    icon={['fas', 'chevron-right']}
                                    size='sm'
                                />
                            }
                            next2Label={
                                <FontAwesomeIcon
                                    icon={['fas', 'angle-double-right']}
                                    size='lg'
                                />
                            }
                            prevLabel={
                                <FontAwesomeIcon
                                    icon={['fas', 'chevron-left']}
                                    size='sm'
                                />
                            }
                            prev2Label={
                                <FontAwesomeIcon
                                    icon={['fas', 'angle-double-left']}
                                    size='lg'
                                />
                            }
                        />
                    </CustomCalendarStyles>
                </div>
            </ScrollbarApp>
        </Container>,
        document.getElementById('desktop')
    );
};

function CalendarClock({ goToToday }) {
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
    const currentMonth = month + 1;

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
        const update = setInterval(() => {
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
        <ClockContainer>
            <span>{`${hours}:${minutes}:${seconds}`}</span>
            <span>{session}</span>
            <span onClick={goToToday}>
                {`${t(`calendar.day.${wDay + 1}`)}, ${day} ${t(
                    `calendar.month.${currentMonth}`
                )}, ${year}`}
            </span>
        </ClockContainer>
    );
}

CalendarClock.propTypes = {
    goToToday: PropTypes.func.isRequired
};

export default CalendarApp;
