import { useState, useEffect, useCallback } from 'react';
import { useNotificationsContext } from 'contexts';
import { useScript, status } from 'hooks';

const params = {
    apiKey: process.env.REACT_APP_GOOGLE_CALENDAR_API,
    clientId: process.env.REACT_APP_GOOGLE_CALENDAR_CLIENT_ID,
    discoveryDocs: JSON.parse(
        process.env.REACT_APP_GOOGLE_CALENDAR_DISCOVERY_DOCS
    ),
    scope: process.env.REACT_APP_GOOGLE_CALENDAR_SCOPES
};

export function useCalendarApi() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { showError } = useNotificationsContext();
    const { scriptStatus } = useScript('https://apis.google.com/js/api.js');

    const initClient = useCallback(async () => {
        const loadClient = new Promise(function (resolve, reject) {
            window.gapi.load('client:auth2', resolve);
        });

        return loadClient.then(async () => {
            await window.gapi.client.init(params);
            await window.gapi.client.load('calendar', 'v3');
        });
    }, []);

    const initAuth = useCallback(async () => {
        const loadAuth = new Promise(function (resolve, reject) {
            window.gapi.load('auth2', resolve);
        });

        return loadAuth.then(async () => {
            return await window.gapi.auth2.init(params).then((authInstance) => {
                setIsLoggedIn(authInstance.isSignedIn.get());
            });
        });
    }, []);

    useEffect(() => {
        if (scriptStatus === status.ready) {
            initClient();
            initAuth();
        }

        return () => {};
    }, [initAuth, initClient, scriptStatus]);

    const getCalendarEvents = async (
        calendarId = 'primary',
        fromToday = true
    ) => {
        if (scriptStatus === status.ready) {
            const date = new Date();
            if (!fromToday) {
                date.setDate(date.getDate() - 30);
            }

            const events = await window.gapi.client.calendar.events
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
        }
    };

    const getCalendarEvent = async (id) => {
        // TODO Update this
        const { data } = fetch(
            `https://www.googleapis.com/calendar/v3/calendars/primary/events/${id}`
        );

        return data;
    };

    const createEvent = (calendarEvent, calendarId = 'primary') => {
        if (scriptStatus === status.ready) {
            return window.gapi.client.calendar.events.insert({
                calendarId: calendarId,
                resource: calendarEvent
            });
        }
    };

    // List of all calendars
    const getCalendarList = async () => {
        if (scriptStatus === status.ready) {
            const calendars = await window.gapi.client.calendar.calendarList
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
        }
    };

    const getAllCalendarsEvents = async () => {
        if (scriptStatus === status.ready) {
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
        }
    };

    const signin = async () => {
        if (scriptStatus === status.ready) {
            await window.gapi.auth2.getAuthInstance().signIn();
        }
    };

    const signout = async () => {
        if (scriptStatus === status.ready) {
            await window.gapi.auth2.getAuthInstance().signOut();
        }
    };

    return {
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
