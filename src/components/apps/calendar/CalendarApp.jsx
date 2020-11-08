import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import FolderApp from 'components/folder/FolderApp';
import Calendar from 'react-calendar';
import { Container, CustomCalendarStyles, Event } from './style';
import { useCalendarApi } from './useCalendarApi';

function CalendarApp() {
    const [events, setEvents] = useState([]);
    const [calendar, setCalendar] = useState({
        value: new Date(),
        startDate: new Date()
    });
    const {
        initCalendar,
        getCalendarEvents,
        getAllCalendarsEcents,
        signin
    } = useCalendarApi();
    useEffect(() => {
        initCalendar();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const test = async () => {
        await signin();
        const events = await getAllCalendarsEcents();
        setEvents(events);
    };

    const renderEvents = (activeStartDate, date, view) => {
        if (view === 'month') {
            return events.map((item) => {
                if (
                    date.getDate() ===
                        new Date(item.start.dateTime).getDate() &&
                    date.getMonth() ===
                        new Date(item.start.dateTime).getMonth() &&
                    date.getYear() === new Date(item.start.dateTime).getYear()
                ) {
                    return (
                        <Event key={item.id} colorId={item.colorId}>
                            {item.summary}
                        </Event>
                    );
                }
            });
        }
    };

    return (
        <FolderApp appId={6} marginLeft={150} marginTop={150}>
            <button
                onClick={test}
                style={{ zIndex: 500, position: 'absolute' }}
            >
                asdasdda
            </button>
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
            </Container>
        </FolderApp>
    );
}

export default CalendarApp;
