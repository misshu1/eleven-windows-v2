import React, { useCallback, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import FolderApp from 'components/folder/FolderApp';
import Calendar from 'react-calendar';
import { Container, CustomCalendarStyles, Event } from './style';
import { useCalendarApi } from './useCalendarApi';

function CalendarApp() {
    const [events, setEvents] = useState([]);
    const [calendar, setCalendar] = useState({ value: new Date() });
    const {
        getAllCalendarsEvents,
        signin,
        signout,
        isLoggedIn
    } = useCalendarApi();

    useEffect(() => {
        if (isLoggedIn && events.length === 0) {
            getAllCalendarsEvents().then((events) => setEvents(events));
        }
    }, [events.length, getAllCalendarsEvents, isLoggedIn]);

    const toolbarMenu = useCallback(() => {
        return [
            {
                name: 'Calendar settings',
                fontIcon: { icon: ['fas', 'cog'] },
                widgetIcon: null,
                link: null,
                scrollToRef: null,
                onClick: () => {
                    console.log('asdasdsa');
                }
            },
            {
                name: isLoggedIn
                    ? 'Disconnect Google account'
                    : 'Connect Google account',
                fontIcon: { icon: ['fab', 'google'] },
                widgetIcon: null,
                link: null,
                scrollToRef: null,
                onClick: async () => {
                    if (isLoggedIn) {
                        await signout().then(() => setEvents([]));
                    } else {
                        await signin();
                    }
                }
            }
        ];
    }, [isLoggedIn, signin, signout]);

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
        <FolderApp
            appId={6}
            marginLeft={150}
            marginTop={150}
            toolbarMenu={toolbarMenu()}
        >
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
                        next2Label={null}
                        prevLabel={
                            <FontAwesomeIcon
                                icon={['fas', 'chevron-left']}
                                size='sm'
                            />
                        }
                        prev2Label={null}
                    />
                </CustomCalendarStyles>
            </Container>
        </FolderApp>
    );
}

export default CalendarApp;
