import React, { lazy, Suspense, useRef } from 'react';

import useOnClickOutside from '../../../../hooks/useOnClickOutside';
import SpinnerGlobalApp from '../../../style/SpinnerGlobalApp';
import { useNotificationsTaskbarContext } from './contexts/notificationsTaskbarContext';
import NotificationIconApp from './icons/notifications/NotificationIconApp';

const NotificationsWindowsApp = lazy(() =>
    import('./apps/notifications/NotificationsWindowsApp')
);

const NotificationMenuAndIcon = () => {
    const {
        closeNotificationMenu,
        isNotificationMenuOpen,
    } = useNotificationsTaskbarContext();
    const notificationMenuRef = useRef(null);
    const notificationIconRef = useRef(null);

    useOnClickOutside(
        [notificationMenuRef, notificationIconRef],
        () => isNotificationMenuOpen && closeNotificationMenu()
    );

    return (
        <>
            <NotificationIconApp notificationIconRef={notificationIconRef} />
            <Suspense fallback={<SpinnerGlobalApp delay={200} />}>
                {isNotificationMenuOpen && (
                    <NotificationsWindowsApp
                        notificationMenuRef={notificationMenuRef}
                    />
                )}
            </Suspense>
        </>
    );
};
export default NotificationMenuAndIcon;
