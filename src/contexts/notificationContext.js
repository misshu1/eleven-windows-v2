import React, { useState, createContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const isMobile = window.matchMedia('(max-width: 28rem)').matches ? true : false;

export const NotificationContext = createContext();
export const NotificationProvider = props => {
    const [notification, setNotification] = useState([]);
    const [disable, setDesable] = useState(false);

    const disableNotifications = e => {
        if (notification.length !== 0 && (e === true || e.target)) {
            setNotification(
                notification.map(item => ({ ...item, isVisible: false }))
            );
        }

        if (e.target) {
            localStorage.setItem('showNotifications', e.target.checked);
            setDesable(e.target.checked);
        } else {
            setDesable(e);
        }
    };

    const checkLocalStorageNotification = () => {
        const showNotifications = localStorage.getItem('showNotifications');
        if (
            !showNotifications ||
            showNotifications === undefined ||
            showNotifications === null ||
            showNotifications === ''
        ) {
            if (isMobile) {
                localStorage.setItem('showNotifications', true);
                disableNotifications(true);
            } else {
                localStorage.setItem('showNotifications', false);
                disableNotifications(false);
            }
        } else {
            disableNotifications(JSON.parse(showNotifications));
        }
    };

    useEffect(() => {
        checkLocalStorageNotification();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const hideAllModals = () => {
        if (notification.length > 0) {
            setNotification(
                notification.map(item => ({ ...item, isVisible: false }))
            );
        }
    };

    const hideModal = e => {
        const eventTargetID = e.target.id;
        setNotification(
            notification.map(item =>
                item.id === +eventTargetID
                    ? { ...item, closeAnimation: true }
                    : item
            )
        );
        setTimeout(() => {
            setNotification(
                notification.map(item =>
                    item.id === +eventTargetID
                        ? { ...item, isVisible: false }
                        : item
                )
            );
        }, 300);
    };

    const closeNotification = e => {
        setNotification(notification.filter(item => item.id !== +e.target.id));
    };

    const createNotificationWarn = (
        notificationTitle,
        notificationInfo,
        code
    ) => {
        setNotification([
            {
                id: Math.random(),
                isVisible: disable ? false : true,
                closeAnimation: false,
                notificationTitle,
                notificationInfo,
                code: `Warn ${code}`,
                type: 'warn',
                icon: (
                    <FontAwesomeIcon
                        icon={['fas', 'exclamation-circle']}
                        size='lg'
                    />
                )
            },
            ...notification
        ]);
    };

    const createNotificationError = (
        notificationTitle,
        notificationInfo,
        code
    ) => {
        setNotification([
            {
                id: Math.random(),
                isVisible: disable ? false : true,
                closeAnimation: false,
                notificationTitle,
                notificationInfo,
                code: `Error ${code}`,
                type: 'error',
                icon: (
                    <FontAwesomeIcon
                        icon={['fas', 'exclamation-triangle']}
                        size='lg'
                    />
                )
            },
            ...notification
        ]);
    };

    const createNotificationSuccess = (notificationTitle, notificationInfo) => {
        setNotification([
            {
                id: Math.random(),
                isVisible: disable ? false : true,
                closeAnimation: false,
                notificationTitle,
                notificationInfo,
                type: 'success',
                icon: (
                    <FontAwesomeIcon icon={['fas', 'check-square']} size='lg' />
                )
            },
            ...notification
        ]);
    };

    const clearAllNotifications = () => {
        if (notification.length > 0) {
            setNotification([]);
        }
    };

    return (
        <NotificationContext.Provider
            value={{
                notification,
                setNotification,
                createNotificationWarn,
                createNotificationSuccess,
                createNotificationError,
                clearAllNotifications,
                hideModal,
                closeNotification,
                hideAllModals,
                disableNotifications,
                disable
            }}
        >
            {props.children}
        </NotificationContext.Provider>
    );
};
