import { useNotificationsContext } from 'contexts';

export function useCalendarApi() {
    const { showError } = useNotificationsContext();

    const getCalendarEvents = async (
        calendarId = 'primary',
        fromToday = true
    ) => {
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
                return data.result.items;
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
        try {
            return window.gapi.client.calendar.events.insert({
                calendarId: calendarId,
                resource: calendarEvent
            });
        } catch (err) {
            showError(
                'Error',
                err.result.error.errors[0].message ||
                    'Failed to create the calendar event.',
                err.result.error.code || 500
            );
        }
    };

    // List of all calendars
    const getCalendarList = async () => {
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

    return {
        getCalendarEvents,
        getCalendarEvent,
        createEvent,
        getCalendarList,
        getAllCalendarsEvents
    };
}
