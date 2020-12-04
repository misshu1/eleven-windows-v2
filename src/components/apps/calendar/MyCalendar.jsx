import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { isWithinInterval, differenceInCalendarDays } from 'date-fns';
import { Tooltip } from '@material-ui/core';
import Calendar from 'react-calendar';

import { Container, CustomCalendarStyles, Summary } from './style';
import { useCalendarApi } from 'components/api';
import { useGapiContext } from 'contexts';
import { useTranslation } from 'react-i18next';
import { useCalendarContext } from './CalendarContext';

function MyCalendar() {
    const [calendarEvents, setCalendarEvents] = useState([]);
    const [calendar, setCalendar] = useState({ value: new Date() });
    const { calendarType, showWeekNumber } = useCalendarContext();
    const { isGapiConnected } = useGapiContext();
    const { getAllCalendarsEvents } = useCalendarApi();
    const { i18n } = useTranslation();

    useEffect(() => {
        if (isGapiConnected) {
            getAllCalendarsEvents().then((events) => {
                setCalendarEvents(events);
            });
        } else {
            calendarEvents.length !== 0 && setCalendarEvents([]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isGapiConnected]);

    const renderEvents = (activeStartDate, date, view) => {
        if (view !== 'month') return;

        return calendarEvents.map(({ id, summary, colorId, start, end }) => {
            const eventStart = new Date(start.dateTime || start.date);
            const eventEnd = new Date(end.dateTime || end.date);
            const daysDifference = differenceInCalendarDays(
                new Date(end.date),
                new Date(start.date)
            );

            // If the event has no 'timeZone' and it's lenght is 1 day
            // it means it's an all-day event
            const checkEndDate = daysDifference === 1 ? eventStart : eventEnd;

            if (
                (date.getDate() === eventStart.getDate() &&
                    date.getMonth() === eventStart.getMonth() &&
                    date.getFullYear() === eventStart.getFullYear()) ||
                isWithinInterval(date, {
                    start: eventStart,
                    end: checkEndDate
                })
            ) {
                return (
                    <Tooltip
                        key={id}
                        title={summary}
                        placement='top'
                        enterDelay={500}
                    >
                        <Summary colorId={colorId}>{summary}</Summary>
                    </Tooltip>
                );
            }
        });
    };

    const disableOtherMontsTiles = (activeStartDate, date, view) => {
        if (view !== 'month') return;
        if (activeStartDate.getMonth() !== date.getMonth()) return true;
    };

    return (
        <>
            <Container>
                <CustomCalendarStyles>
                    <Calendar
                        value={calendar.value}
                        showFixedNumberOfWeeks
                        showWeekNumbers={showWeekNumber}
                        view='month'
                        locale={i18n.language}
                        calendarType={calendarType}
                        tileContent={({ activeStartDate, date, view }) =>
                            renderEvents(activeStartDate, date, view)
                        }
                        tileDisabled={({ activeStartDate, date, view }) =>
                            disableOtherMontsTiles(activeStartDate, date, view)
                        }
                        nextLabel={
                            <FontAwesomeIcon
                                icon={['fas', 'chevron-right']}
                                size='sm'
                            />
                        }
                        prevLabel={
                            <FontAwesomeIcon
                                icon={['fas', 'chevron-left']}
                                size='sm'
                            />
                        }
                        next2Label={null}
                        prev2Label={null}
                    />
                </CustomCalendarStyles>
            </Container>
        </>
    );
}

export default MyCalendar;
