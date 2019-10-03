import React, { useState, createContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const NotificationContext = createContext();
export const NotificationProvider = props => {
    const [notification, setNotification] = useState([]);

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
                isVisible: true,
                closeAnimation: false,
                notificationTitle,
                notificationInfo,
                code: `Warn ${code}`,
                icon: <FontAwesomeIcon icon={['fas', 'list-alt']} size='lg' />
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
                isVisible: true,
                closeAnimation: false,
                notificationTitle,
                notificationInfo,
                code: `Error ${code}`,
                icon: (
                    <FontAwesomeIcon
                        icon={['fas', 'exclamation-triangle']}
                        size='lg'
                        style={{ color: 'red' }}
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
                isVisible: true,
                closeAnimation: false,
                notificationTitle,
                notificationInfo,
                icon: (
                    <FontAwesomeIcon
                        icon={['fas', 'check-square']}
                        size='lg'
                        style={{ color: 'green' }}
                    />
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
                hideAllModals
            }}
        >
            {props.children}
        </NotificationContext.Provider>
    );
};
