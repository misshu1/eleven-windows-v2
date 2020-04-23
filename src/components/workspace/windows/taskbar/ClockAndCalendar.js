import React, { lazy, Suspense, useRef } from 'react';

import useOnClickOutside from '../../../../hooks/useOnClickOutside';
import SpinnerGlobalApp from '../../../style/SpinnerGlobalApp';
import { useClockCalendarContext } from './contexts/clockCalendarContext';
import ClockIconApp from './icons/clock/ClockIconApp';

const CalendarApp = lazy(() => import('./apps/calendar/CalendarApp'));

const ClockAndCalendar = () => {
    const { closeCalendar, isCalendarOpen } = useClockCalendarContext();
    const calendarRef = useRef(null);
    const clockRef = useRef(null);

    useOnClickOutside(
        [calendarRef, clockRef],
        () => isCalendarOpen && closeCalendar()
    );

    return (
        <>
            <ClockIconApp clockRef={clockRef} />
            <Suspense fallback={<SpinnerGlobalApp delay={200} />}>
                {isCalendarOpen && <CalendarApp calendarRef={calendarRef} />}
            </Suspense>
        </>
    );
};
export default ClockAndCalendar;
