import React, { lazy, Suspense, useContext } from 'react';

import { TaskbarContext } from '../../contexts/taskbarContext';
import SpinnerApp from '../style/SpinnerApp';

const CartApp = lazy(() => import('./cart/CartApp'));
const CalendarApp = lazy(() => import('./calendar/CalendarApp'));
const LanguageApp = lazy(() => import('./language/LanguageApp'));
const NotificationApp = lazy(() =>
    import('../notification/notificationApp/NotificationApp')
);

const TaskbarModalApps = () => {
    const {
        taskbar: { calendarOpen, languagesOpen, notificationsOpen, cartOpen },
    } = useContext(TaskbarContext);

    return (
        <>
            <Suspense fallback={<SpinnerApp delay={200} />}>
                {notificationsOpen && <NotificationApp />}
            </Suspense>

            <Suspense fallback={<SpinnerApp delay={200} />}>
                {languagesOpen && <LanguageApp />}
            </Suspense>

            <Suspense fallback={<SpinnerApp delay={200} />}>
                {calendarOpen && <CalendarApp />}
            </Suspense>

            <Suspense fallback={<SpinnerApp delay={200} />}>
                {cartOpen && <CartApp />}
            </Suspense>

            {/* {showBackdrop() && !isMobile && (
                <Backdrop
                    open={showBackdrop()}
                    style={{ zIndex: 220, background: 'rgba(0, 0, 0, 0.15)' }}
                    onClick={closeAllApps}
                ></Backdrop>
            )} */}
        </>
    );
};
export default TaskbarModalApps;
