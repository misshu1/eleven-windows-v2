import React, { lazy, Suspense, useRef } from 'react';

import useOnClickOutside from '../../../../hooks/useOnClickOutside';
import SpinnerGlobalApp from '../../../style/SpinnerGlobalApp';
import { useNotificationsTaskbarContext } from './contexts/notificationsTaskbarContext';
import NotificationIconApp from './icons/notifications/NotificationIconApp';

const NotificationsApp = lazy(() =>
    import('./apps/notifications/NotificationsApp')
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
                    <NotificationsApp
                        notificationMenuRef={notificationMenuRef}
                    />
                )}
            </Suspense>
        </>
    );
};
export default NotificationMenuAndIcon;
