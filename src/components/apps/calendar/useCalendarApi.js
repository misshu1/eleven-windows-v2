import { useNotificationsContext } from 'contexts';

const gapi = window.gapi;

const initClient = () => {
    gapi.client.init({
        apiKey: process.env.REACT_APP_GOOGLE_CALENDAR_API,
        clientId: process.env.REACT_APP_GOOGLE_CALENDAR_CLIENT_ID,
        discoveryDocs: JSON.parse(
            process.env.REACT_APP_GOOGLE_CALENDAR_DISCOVERY_DOCS
        ),
        scope: process.env.REACT_APP_GOOGLE_CALENDAR_SCOPES
    });
};

export function useCalendarApi() {
    const { showError } = useNotificationsContext();

    const initCalendar = async () => {
        await gapi.load('client:auth2', initClient);
    };

    const getCalendarEvents = async (
        calendarId = 'primary',
        fromToday = true
    ) => {
        if (gapi) {
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
                        `Failed to get the calendar events from the database! ${err.reason?.message}`,
                        500
                    );
                });

            return events;
        } else {
            console.log('Error: gapi not loaded');
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
        return gapi.client.calendar.events.insert({
            calendarId: calendarId,
            resource: calendarEvent
        });
    };

    const getCalendarList = async () => {
        if (gapi) {
            const calendars = await gapi.client.calendar.calendarList
                .list()
                .then((data) => data.result.items)
                .catch((err) => {
                    showError(
                        'Error',
                        `Failed to get the calendar list from the database! ${err.reason?.message}`,
                        500
                    );
                });

            return calendars;
        } else {
            console.log('Error: gapi not loaded');
        }
    };

    const getAllCalendarsEcents = async () => {
        if (gapi) {
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
                        `Failed to get the calendar events from the database! ${err.reason?.message}`,
                        500
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
        } else {
            console.log('Error: gapi not loaded');
        }
    };

    const signin = async () => {
        if (gapi) {
            const googleUser = await gapi.auth2.getAuthInstance().signIn();
            const tokenId = googleUser.getAuthResponse().id_token;
            const accessToken = googleUser.getAuthResponse().access_token;

            // gapi.client.request({
            //     'method': 'GET',
            //     'path': 'https://www.googleapis.com/calendar/v3',
            //     headers: {
            //         'Content-Type': 'application/json',
            //         'Authorization': `Bearer ${accessToken}`
            //       },
            //   });
        } else {
            console.log('Error: gapi not loaded');
        }
    };

    const signout = () => {
        if (gapi) {
            gapi.auth2.getAuthInstance().signOut();
        } else {
            console.log('Error: gapi not loaded');
        }
    };

    return {
        initCalendar,
        getCalendarEvents,
        getCalendarEvent,
        createEvent,
        getCalendarList,
        getAllCalendarsEcents,
        signin,
        signout
    };
}
