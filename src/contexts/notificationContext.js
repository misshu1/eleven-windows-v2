import React, { useState, createContext } from 'react';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DescriptionIcon from '@material-ui/icons/Description';

export const NotificationContext = createContext();
export const NotificationProvider = props => {
    const [notification, setNotification] = useState([]);

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
        setNotification(
            notification.map(item => (item.id === +e.target.id ? '' : item))
        );
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
                icon: <DescriptionIcon />,
                type: 'warn',
                code: `Warn ${code}`
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
                icon: <ErrorOutlineIcon />,
                type: 'error',
                code: `Error ${code}`
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
                icon: <CheckCircleIcon />,
                type: 'success'
            },
            ...notification
        ]);
    };

    const clearAllNotifications = () => {
        setNotification([]);
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
                closeNotification
            }}
        >
            {props.children}
        </NotificationContext.Provider>
    );
};
