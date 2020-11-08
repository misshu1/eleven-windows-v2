import { useState } from 'react';
import { useNotificationsContext } from 'contexts';

const gapi = window.gapi;

const initClient = async () => {
    return await gapi.client
        .init({
            apiKey: process.env.REACT_APP_GOOGLE_CALENDAR_API,
            clientId: process.env.REACT_APP_GOOGLE_CALENDAR_CLIENT_ID,
            discoveryDocs: JSON.parse(
                process.env.REACT_APP_GOOGLE_CALENDAR_DISCOVERY_DOCS
            ),
            scope: process.env.REACT_APP_GOOGLE_CALENDAR_SCOPES
        })
        .then(() => {
            gapi.client.load('calendar', 'v3');
        });
};

export function useCalendarApi() {
    const { showError } = useNotificationsContext();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const initCalendar = async () => {
        await gapi.load('client:auth2', initClient);
    };

    const getCalendarEvents = async (
        calendarId = 'primary',
        fromToday = true
    ) => {
        const date = new Date();
        if (!fromToday) {
            date.setDate(date.getDate() - 30);
        }

        const events = await gapi.client.calendar.events
            .list({
                calendarId,
                timeMin: date.toISOString(),
                showDeleted: false,
                singleEvents: true,
                maxResults: 50,
                orderBy: 'startTime'
            })
            .then((data) => {
                const events = data.result.items;

                return events;
            })
            .catch((err) => {
                showError(
                    'Error',
                    err.result.error.errors[0].message ||
                        'Failed to get the calendar events from the database!',
                    err.result.error.code || 500
                );
            });

        return events;
    };

    const getCalendarEvent = async (id) => {
        // TODO Update this
        const { data } = fetch(
            `https://www.googleapis.com/calendar/v3/calendars/primary/events/${id}`
        );

        return data;
    };

    const createEvent = (calendarEvent, calendarId = 'primary') => {
        return gapi.client.calendar.events.insert({
            calendarId: calendarId,
            resource: calendarEvent
        });
    };

    // List of all calendars
    const getCalendarList = async () => {
        const calendars = await gapi.client.calendar.calendarList
            .list()
            .then((data) => data.result.items)
            .catch((err) => {
                showError(
                    'Error',
                    err.result.error.errors[0].message ||
                        'Failed to get the calendar list from the database!',
                    err.result.error.code || 500
                );
            });

        return calendars;
    };

    const getAllCalendarsEvents = async () => {
        const calendarList = await getCalendarList();
        const promisesArray = await calendarList.map((item) => {
            return getCalendarEvents(item.id, false);
        });
        const settledCalendars = await Promise.allSettled(promisesArray);

        settledCalendars
            .filter((item) => item.status === 'rejected')
            .map((err) => {
                showError(
                    'Error',
                    err.result.error.errors[0].message ||
                        'Failed to get the calendar events from the database!',
                    err.result.error.code || 500
                );
            });

        const dbCalendars = settledCalendars
            .filter((item) => item.status === 'fulfilled')
            .map((item) => item.value);

        const calendarEvents = [];
        dbCalendars.map((calendar) => {
            calendar.map((events) => calendarEvents.push(events));
        });

        return calendarEvents;
    };

    async function checkSignIn() {
        await gapi.load('client:auth2', () => {
            gapi.auth2.getAuthInstance().isSignedIn.listen((bool) => {
                console.log('run');
                setIsLoggedIn(bool);
            });
        });

        return isLoggedIn;
    }

    const signin = async () => {
        await gapi.auth2.getAuthInstance().signIn();
    };

    const signout = async () => {
        await gapi.auth2.getAuthInstance().signOut();
    };

    return {
        checkSignIn,
        initCalendar,
        getCalendarEvents,
        getCalendarEvent,
        createEvent,
        getCalendarList,
        getAllCalendarsEvents,
        signin,
        signout,
        isLoggedIn
    };
}
