import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import FolderApp from 'components/folder/FolderApp';
import Calendar from 'react-calendar';
import { Container, CustomCalendarStyles, Event } from './style';
import { useCalendarApi } from './useCalendarApi';

// const events = [
//     { message: 'message 1' },
//     { message: 'message 2 something longer here for some reason' },
//     { message: 'message 3' },
//     { message: 'message 4' },
//     { message: 'message 4' },
//     { message: 'message 4' },
//     { message: 'message 4' }
// ];

function CalendarApp() {
    const [events, setEvents] = useState([]);
    const [calendar, setCalendar] = useState({
        value: new Date(),
        startDate: new Date()
    });
    const { initCalendar, getCalendarEvents, signin } = useCalendarApi();
    useEffect(() => {
        initCalendar();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const test = async () => {
        // await GAPI.auth2.getAuthInstance().signIn();
        await signin();
        const events = await getCalendarEvents();
        setEvents(events);
        console.log(events);
    };

    const renderEvents = (activeStartDate, date, view) => {
        if (view === 'month') {
            return events.map((item, index) => {
                if (
                    date.getDate() ===
                        new Date(item.start.dateTime).getDate() &&
                    date.getMonth() ===
                        new Date(item.start.dateTime).getMonth() &&
                    date.getYear() === new Date(item.start.dateTime).getYear()
                ) {
                    return <Event key={item.id}>{item.summary}</Event>;
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
                        value={calendar.value}
                        // onChange={changeDate}
                        // locale={i18n.language}
                        showFixedNumberOfWeeks
                        view='month'
                        showWeekNumbers
                        // activeStartDate={calendar.startDate}
                        // onActiveStartDateChange={(e) =>
                        //     changeDate(e.activeStartDate)
                        // }
                        tileContent={({ activeStartDate, date, view }) =>
                            renderEvents(activeStartDate, date, view)
                        }
                    />
                </CustomCalendarStyles>
            </Container>
        </FolderApp>
    );
}

export default CalendarApp;
