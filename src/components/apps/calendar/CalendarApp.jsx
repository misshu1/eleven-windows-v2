import React, { useEffect, useMemo, useState } from 'react';
import FolderApp from 'components/folder/FolderApp';
import { useCalendarApi } from 'components/api';
import { useGapiContext, useFolderPagesContext } from 'contexts';
import MyCalendar from './MyCalendar';
import { FOLDER_PAGES } from 'components/common';
import { CalendarProvider } from './CalendarContext';
import { CalendarSettings } from './settings/CalendarSettings';

function CalendarApp() {
    const [calendarEvents, setCalendarEvents] = useState([]);
    const { isGapiConnected, loginGapi, logoutGapi } = useGapiContext();
    const { getAllCalendarsEvents } = useCalendarApi();
    const { page, changePage } = useFolderPagesContext();

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
                    changePage(FOLDER_PAGES.level_2);
                }
            }
        ];

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
    }, [isGapiConnected]);

    return (
        <CalendarProvider>
            <FolderApp
                appId={6}
                marginLeft={150}
                marginTop={150}
                toolbarMenu={toolbarMenu}
                enablePagination
            >
                {page === FOLDER_PAGES.level_1 && <MyCalendar />}
                {page === FOLDER_PAGES.level_2 && <CalendarSettings />}
            </FolderApp>
        </CalendarProvider>
    );
}

export default CalendarApp;
