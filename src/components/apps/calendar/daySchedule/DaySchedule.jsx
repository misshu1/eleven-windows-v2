import React, { useEffect, useState } from 'react';
import { useFolderPagesContext, useGapiContext, FOLDER_PAGES } from 'contexts';
import { useCalendarApi } from 'components/api';
import { format, isSameDay, eachDayOfInterval } from 'date-fns';
import { Container, Summary, EventDay, SummaryContainer } from './style';
import { Fab, Tooltip } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { makeStyles } from '@material-ui/core/styles';
import { useAuth } from 'hooks';

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

export function DaySchedule({
    setSelectedEvent,
    selectedDay,
    setShowDaySchedule
}) {
    const [calendarEvents, setCalendarEvents] = useState([]);
    const { changePage } = useFolderPagesContext();
    const { isGapiConnected } = useGapiContext();
    const { getAllCalendarsEvents } = useCalendarApi();
    const { user } = useAuth();
    const classes = useStyles();

    useEffect(() => {
        if (isGapiConnected) {
            getAllCalendarsEvents(new Date(selectedDay)).then((events) => {
                setCalendarEvents(events);
            });
        } else {
            calendarEvents.length !== 0 && setCalendarEvents([]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isGapiConnected]);

    const renderEvents = () => {
        let monthDate = new Date(selectedDay).getDate();
        let weekDay = format(new Date(selectedDay), 'EEE');
        let date = null;

        return calendarEvents
            .sort(
                (a, b) =>
                    new Date(a.start.dateTime || a.start.date) -
                    new Date(b.start.dateTime || b.start.date)
            )
            .map((event) => {
                const { id, summary, colorId, start, end } = event;

                if (!isSameDay(date, new Date(start.dateTime || start.date))) {
                    monthDate = new Date(
                        start.dateTime || start.date
                    ).getDate();
                    weekDay = format(
                        new Date(start.dateTime || start.date),
                        'EEE'
                    );
                    date = new Date(start.dateTime || start.date);
                } else {
                    weekDay = null;
                    monthDate = null;
                }

                return (
                    <SummaryContainer key={id}>
                        <EventDay>
                            <span>{weekDay}</span>
                            <span>{monthDate}</span>
                        </EventDay>
                        <Summary
                            onClick={() => {
                                setSelectedEvent(event);
                                changePage(FOLDER_PAGES.level_3);
                            }}
                            colorId={colorId}
                        >
                            <span>{summary}</span>
                            {start.dateTime && (
                                <span>
                                    {`${format(
                                        new Date(start.dateTime),
                                        'HH:mm'
                                    )} -
                                ${format(new Date(end.dateTime), 'HH:mm')}`}
                                </span>
                            )}
                        </Summary>
                    </SummaryContainer>
                );
            });
    };

    return (
        <Container>
            {renderEvents()}
            {user && isGapiConnected && (
                <Tooltip title='Create event' placement='top' enterDelay={500}>
                    <Fab
                        size='medium'
                        aria-label='create-event'
                        classes={{ root: classes.addEventBtn }}
                        onClick={() => {
                            setShowDaySchedule(false);
                            // changePage(FOLDER_PAGES.level_2);
                        }}
                    >
                        <FontAwesomeIcon icon={['fas', 'plus']} size='lg' />
                    </Fab>
                </Tooltip>
            )}
        </Container>
    );
}
