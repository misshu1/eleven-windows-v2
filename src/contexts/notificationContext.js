import React, { useState, createContext, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import uuid from 'uuid';

const isMobile = window.matchMedia('(max-width: 28rem)').matches ? true : false;

export const NotificationContext = createContext();
export const NotificationProvider = props => {
    const [notification, setNotification] = useState([]);
    const [disable, setDesable] = useState(false);

    const disableNotifications = e => {
        if (notification.length !== 0) {
            setNotification(
                notification.map(item => ({ ...item, isVisible: false }))
            );
        }
        localStorage.setItem('disableNotifications', e.target.checked);
        setDesable(e.target.checked);
    };

    const checkLocalStorageNotification = useCallback(() => {
        const disableNotifications = localStorage.getItem(
            'disableNotifications'
        );
        if (
            !disableNotifications ||
            disableNotifications === undefined ||
            disableNotifications === null ||
            disableNotifications === ''
        ) {
            if (isMobile) {
                localStorage.setItem('disableNotifications', true);
                setDesable(true);
            } else {
                localStorage.setItem('disableNotifications', false);
                setDesable(false);
            }
        } else {
            setDesable(JSON.parse(disableNotifications));
        }
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
                item.id === eventTargetID
                    ? { ...item, closeAnimation: true }
                    : item
            )
        );
        setTimeout(() => {
            setNotification(
                notification.map(item =>
                    item.id === eventTargetID
                        ? { ...item, isVisible: false }
                        : item
                )
            );
        }, 300);
    };

    const closeNotification = e => {
        setNotification(notification.filter(item => item.id !== e.target.id));
    };

    const createNotificationWarn = (
        notificationTitle,
        notificationInfo,
        code
    ) => {
        setNotification([
            {
                id: uuid.v4(),
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
                id: uuid.v4(),
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
                id: uuid.v4(),
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
                disable,
                checkLocalStorageNotification
            }}
        >
            {props.children}
        </NotificationContext.Provider>
    );
};
