import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { isWithinInterval, differenceInCalendarDays } from 'date-fns';
import { makeStyles } from '@material-ui/core/styles';
import { Fab, Tooltip } from '@material-ui/core';
import Calendar from 'react-calendar';

import { Container, CustomCalendarStyles, Summary } from './style';
import { useCalendarApi } from 'components/api';
import { useAuth } from 'hooks';
import { useGapiContext, useFolderPagesContext } from 'contexts';
import { FOLDER_PAGES } from 'components/common';

const useStyles = makeStyles(() => ({
    addEventBtn: {
        position: 'fixed',
        zIndex: '1',
        bottom: '1.5rem',
        right: '1.5rem',
        backgroundColor: 'var(--colorSuccess)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '100%',
        color: '#fff',

        '&:hover': {
            backgroundColor: 'var(--colorSuccess)'
        }
    }
}));

function MyCalendar({ setShowDaySchedule, setSelectedDay }) {
    const [calendarEvents, setCalendarEvents] = useState([]);
    const [calendar, setCalendar] = useState({ value: new Date() });
    const { isGapiConnected } = useGapiContext();
    const { getAllCalendarsEvents } = useCalendarApi();
    const { user } = useAuth();
    const classes = useStyles();
    const { changePage } = useFolderPagesContext();

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
                        showWeekNumbers
                        view='month'
                        tileContent={({ activeStartDate, date, view }) =>
                            renderEvents(activeStartDate, date, view)
                        }
                        tileDisabled={({ activeStartDate, date, view }) =>
                            disableOtherMontsTiles(activeStartDate, date, view)
                        }
                        onClickDay={(value) => {
                            setSelectedDay(value);
                            setShowDaySchedule(true);
                            changePage(FOLDER_PAGES.level_2);
                        }}
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
            {user && isGapiConnected && (
                <Tooltip title='Create event' placement='top' enterDelay={500}>
                    <Fab
                        size='medium'
                        aria-label='create-event'
                        classes={{ root: classes.addEventBtn }}
                        onClick={() => {
                            setShowDaySchedule(false);
                            changePage(FOLDER_PAGES.level_2);
                        }}
                    >
                        <FontAwesomeIcon icon={['fas', 'plus']} size='lg' />
                    </Fab>
                </Tooltip>
            )}
        </>
    );
}

export default MyCalendar;
