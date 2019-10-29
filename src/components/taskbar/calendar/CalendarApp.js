import React, { useContext, useCallback, useState } from 'react';
import ReactDOM from 'react-dom';
import Calendar from 'react-calendar/dist/entry.nostyle';
import { useTranslation } from 'react-i18next';
import { CalendarContainer, CalendarStyle } from './style';
import { TaskbarContext } from '../../../contexts/taskbarContext';
import CalendarClock from './CalendarClock';

const CalendarApp = () => {
    const [calendar, setCalendar] = useState({ value: new Date() });
    const { taskbar } = useContext(TaskbarContext);
    const { calendarOpen } = taskbar;
    const { i18n } = useTranslation();

    const calendarChange = value => {
        setCalendar(prevState => ({ ...prevState, value: value }));
    };

    const goToToday = useCallback(() => {
        setCalendar(prevState => ({ ...prevState, value: new Date() }));
    }, [setCalendar]);

    return ReactDOM.createPortal(
        <React.Fragment>
            {calendarOpen && (
                <CalendarContainer>
                    <CalendarClock goToToday={goToToday} />
                    <CalendarStyle>
                        <Calendar
                            onChange={calendarChange}
                            value={calendar.value}
                            locale={i18n.language}
                            showFixedNumberOfWeeks={true}
                        />
                    </CalendarStyle>
                </CalendarContainer>
            )}
        </React.Fragment>,
        document.querySelector('#desktop')
    );
};

export default CalendarApp;
