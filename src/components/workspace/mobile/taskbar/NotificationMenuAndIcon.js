import React, { lazy, Suspense, useCallback, useRef, useState } from 'react';

import useOnClickOutside from '../../../../hooks/useOnClickOutside';
import SpinnerGlobalApp from '../../../style/SpinnerGlobalApp';
import NotificationIconApp from './icons/notifications/NotificationIconApp';

const NotificationsApp = lazy(() =>
    import('./apps/notifications/NotificationsApp')
);

const NotificationMenuAndIcon = () => {
    const [isNotificationMenuOpen, setIsNotificationMenuOpen] = useState(false);
    const notificationMenuRef = useRef(null);
    const notificationIconRef = useRef(null);

    useOnClickOutside(
        [notificationMenuRef, notificationIconRef],
        () => isNotificationMenuOpen && closeNotificationMenu()
    );

    const toggleNotificationMenu = useCallback(() => {
        setIsNotificationMenuOpen((prevState) => !prevState);
    }, [setIsNotificationMenuOpen]);

    const closeNotificationMenu = useCallback(() => {
        setIsNotificationMenuOpen(false);
    }, [setIsNotificationMenuOpen]);

    return (
        <>
            <NotificationIconApp
                notificationIconRef={notificationIconRef}
                toggleNotificationMenu={toggleNotificationMenu}
                isNotificationMenuOpen={isNotificationMenuOpen}
            />
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
