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
    const initCalendar = async () => {
        await gapi.load('client:auth2', initClient);
    };

    const getCalendarEvents = async (calendarId = 'primary') => {
        if (gapi) {
            return await gapi.client.calendar.events
                .list({
                    calendarId,
                    timeMin: new Date().toISOString(),
                    showDeleted: false,
                    singleEvents: true,
                    maxResults: 10,
                    orderBy: 'startTime'
                })
                .then((data) => {
                    const events = data.result.items;

                    return events;
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            console.log('Error: gapi not loaded');
        }
    };

    const getCalendarEvent = async (id) => {
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
        signin,
        signout
    };
}

// same order as the image above
// switch ($event->getColorId()) {
//     case 9: $color="#5484ED"; break;
//     case 1: $color="#A4BDFC"; break;
//     case 7: $color="#46D6DB"; break;
//     case 2: $color="#7AE7BF"; break;
//     case 10: $color="#51B749"; break;
//     case 5: $color="#FBD75B"; break;
//     case 6: $color="#FFB878"; break;
//     case 4: $color="#FF887C"; break;
//     case 11: $color="#DC2127"; break;
//     case 3: $color="#DBADFF"; break;
//     case 8: $color="#E1E1E1"; break;
//     default: $color="#AC725E"; // the first one in the picture, the one that is checked
//   }
