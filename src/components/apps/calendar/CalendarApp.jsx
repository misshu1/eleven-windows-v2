import React, { useEffect, useMemo, useState } from 'react';
import FolderApp from 'components/folder/FolderApp';
import { useCalendarApi } from 'components/api';
import { useAuth } from 'hooks';
import { useGapiContext, useFolderPagesContext } from 'contexts';
import MyCalendar from './MyCalendar';
import { DaySchedule } from './daySchedule/DaySchedule';
import { EventDetails } from './eventDetails/EventDetails';
import { EventForm } from './eventForm/EventForm';
import { CreateEvent } from './createEvent/CreateEvent';

function CalendarApp() {
    const [calendarEvents, setCalendarEvents] = useState([]);
    const [showDaySchedule, setShowDaySchedule] = useState(null);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [selectedDay, setSelectedDay] = useState(null);
    const { isGapiConnected, loginGapi, logoutGapi } = useGapiContext();
    const { getAllCalendarsEvents } = useCalendarApi();
    const { page, changePage, FOLDER_PAGES } = useFolderPagesContext();
    const { user } = useAuth();

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

    const toolbarMenu = useMemo(() => {
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isGapiConnected, user]);

    return (
        <FolderApp
            appId={6}
            marginLeft={150}
            marginTop={150}
            toolbarMenu={toolbarMenu}
            page={page}
            changePage={changePage}
        >
            {page === FOLDER_PAGES.level_1 && (
                <MyCalendar
                    setShowDaySchedule={setShowDaySchedule}
                    setSelectedDay={setSelectedDay}
                />
            )}
            {page === FOLDER_PAGES.level_2 && showDaySchedule && (
                <DaySchedule
                    setSelectedEvent={setSelectedEvent}
                    setShowDaySchedule={setShowDaySchedule}
                    selectedDay={selectedDay}
                />
            )}
            {page === FOLDER_PAGES.level_2 && !showDaySchedule && (
                <CreateEvent />
            )}
            {page === FOLDER_PAGES.level_3 && (
                <EventDetails selectedEvent={selectedEvent} />
            )}
            {page === FOLDER_PAGES.level_4 && <EventForm />}
        </FolderApp>
    );
}

export default CalendarApp;
