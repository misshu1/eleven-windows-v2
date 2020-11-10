import React, { useCallback, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import FolderApp from 'components/folder/FolderApp';
import Calendar from 'react-calendar';
import { Container, CustomCalendarStyles, Event } from './style';
import { useCalendarApi } from './useCalendarApi';
import { useAuth } from 'hooks';
import { useGapiContext } from 'contexts';

function CalendarApp() {
    const [calendarEvents, setCalendarEvents] = useState([]);
    const [calendar, setCalendar] = useState({ value: new Date() });
    const { isGapiConnected, loginGapi, logoutGapi } = useGapiContext();
    const { getAllCalendarsEvents } = useCalendarApi();
    const { user } = useAuth();

    useEffect(() => {
        if (isGapiConnected) {
            getAllCalendarsEvents().then((events) => {
                setCalendarEvents(events);
            });
        } else {
            setCalendarEvents([]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isGapiConnected]);

    const toolbarMenu = useCallback(() => {
        const menu = [
            {
                name: 'Calendar settings',
                fontIcon: { icon: ['fas', 'cog'] },
                onClick: () => {
                    console.log('asdasdsa');
                }
            }
        ];

        // Show this option only for logged in users
        user &&
            menu.push({
                name: isGapiConnected
                    ? 'Disconnect Google account'
                    : 'Connect Google account',
                fontIcon: { icon: ['fab', 'google'] },
                onClick: async () => {
                    isGapiConnected ? logoutGapi() : loginGapi();
                }
            });

        return menu;
    }, [isGapiConnected, loginGapi, logoutGapi, user]);

    const renderEvents = (activeStartDate, date, view) => {
        const today = date.getDate();
        const thisMonth = date.getMonth();
        const thisYear = date.getYear();

        if (view === 'month') {
            return calendarEvents.map(
                ({ id, summary, colorId, start, end }) => {
                    const eventStartDay = new Date(
                        start.dateTime || start.date
                    ).getDate();
                    const eventStartMonth = new Date(
                        start.dateTime || start.date
                    ).getMonth();
                    const eventStartYear = new Date(
                        start.dateTime || start.date
                    ).getYear();
                    const eventEndDay = new Date(
                        end.dateTime || end.date
                    ).getDate();
                    const eventEndMonth = new Date(
                        end.dateTime || end.date
                    ).getMonth();
                    const eventEndYear = new Date(
                        end.dateTime || end.date
                    ).getYear();

                    // today === eventStartDay &&
                    // thisMonth === eventStartMonth &&
                    // thisYear === eventStartYear &&
                    // today <= eventEndDay &&
                    // thisMonth <= eventEndMonth &&
                    // thisYear <= eventEndYear

                    if (
                        today === eventStartDay &&
                        thisMonth === eventStartMonth &&
                        thisYear === eventStartYear
                        // &&
                        // today <= eventEndDay &&
                        // thisMonth <= eventEndMonth &&
                        // thisYear <= eventEndYear
                    ) {
                        return (
                            <Event key={id} colorId={colorId}>
                                {summary}
                            </Event>
                        );
                    }
                }
            );
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
        </FolderApp>
    );
}

export default CalendarApp;
