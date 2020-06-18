import { useSnackbar } from 'notistack';
import React, { createContext, useContext, useLayoutEffect, useState } from 'react';
import uuid from 'uuid';

import Notification from '../components/notifications/notification/Notification';

export const NOTIFICATION_TYPE = {
    success: 'SUCCESS',
    error: 'ERROR',
    warning: 'WARNING',
    info: 'INFO',
};

const NotificationsContext = createContext();
export const NotificationsProvider = ({ children }) => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const [notificationsHistory, setNotificationsHistory] = useState([]);
    const [disable, setDesable] = useState(false);

    useLayoutEffect(() => {
        const disableNotifications = localStorage.getItem(
            'disableNotifications'
        );
        if (!disableNotifications) {
            localStorage.setItem('disableNotifications', false);
        } else {
            setDesable(JSON.parse(disableNotifications));
        }
    }, []);

    const disableNotifications = (boolean) => {
        localStorage.setItem('disableNotifications', boolean);
        closeSnackbar();
        setDesable(boolean);
    };

    const closeNotification = (id) => {
        setNotificationsHistory((prevState) =>
            prevState.filter((item) => item.id !== id)
        );
    };

    const clearAllNotifications = () => {
        if (notificationsHistory.length > 0) {
            setNotificationsHistory([]);
        }
    };

    const areNotificationsDisabled = () => {
        return disable;
    };

    const showSuccess = (title, message) => {
        const id = uuid.v4();
        setNotificationsHistory((prevState) => [
            {
                id: id,
                component: (
                    <Notification
                        key={id}
                        id={id}
                        message={message}
                        type={NOTIFICATION_TYPE.success}
                        title={title}
                        onClose={closeNotification}
                    />
                ),
            },
            ...prevState,
        ]);

        if (!disable) {
            enqueueSnackbar(message, {
                content: (key, message) => (
                    <Notification
                        id={key}
                        message={message}
                        type={NOTIFICATION_TYPE.success}
                        title={title}
                        onClose={closeSnackbar}
                        isModal={true}
                    />
                ),
            });
        }
    };

    const showError = (title, message, code) => {
        const id = uuid.v4();
        setNotificationsHistory((prevState) => [
            {
                id: id,
                component: (
                    <Notification
                        key={id}
                        id={id}
                        message={message}
                        type={NOTIFICATION_TYPE.error}
                        title={title}
                        onClose={closeNotification}
                        code={code}
                    />
                ),
            },
            ...prevState,
        ]);

        if (!disable) {
            enqueueSnackbar(message, {
                content: (key, message) => (
                    <Notification
                        id={key}
                        message={message}
                        type={NOTIFICATION_TYPE.error}
                        title={title}
                        code={code}
                        onClose={closeSnackbar}
                        isModal={true}
                    />
                ),
            });
        }
    };

    const showWarning = (title, message, code) => {
        const id = uuid.v4();
        setNotificationsHistory((prevState) => [
            {
                id: id,
                component: (
                    <Notification
                        key={id}
                        id={id}
                        message={message}
                        type={NOTIFICATION_TYPE.warning}
                        title={title}
                        onClose={closeNotification}
                        code={code}
                    />
                ),
            },
            ...prevState,
        ]);

        if (!disable) {
            enqueueSnackbar(message, {
                content: (key, message) => (
                    <Notification
                        id={key}
                        message={message}
                        type={NOTIFICATION_TYPE.warning}
                        title={title}
                        code={code}
                        onClose={closeSnackbar}
                        isModal={true}
                    />
                ),
            });
        }
    };

    const showInfo = (title, message) => {
        const id = uuid.v4();
        setNotificationsHistory((prevState) => [
            {
                id: id,
                component: (
                    <Notification
                        key={id}
                        id={id}
                        message={message}
                        type={NOTIFICATION_TYPE.info}
                        title={title}
                        onClose={closeNotification}
                    />
                ),
            },
            ...prevState,
        ]);

        if (!disable) {
            enqueueSnackbar(message, {
                content: (key, message) => (
                    <Notification
                        id={key}
                        message={message}
                        type={NOTIFICATION_TYPE.info}
                        title={title}
                        onClose={closeSnackbar}
                        isModal={true}
                    />
                ),
            });
        }
    };

    return (
        <NotificationsContext.Provider
            value={{
                disable,
                notificationsHistory,
                showSuccess,
                showError,
                showWarning,
                showInfo,
                clearAllNotifications,
                disableNotifications,
                closeNotification,
                areNotificationsDisabled,
            }}
        >
            {children}
        </NotificationsContext.Provider>
    );
};

export const useNotificationsContext = () => {
    return useContext(NotificationsContext);
};
