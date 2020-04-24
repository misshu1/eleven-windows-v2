import { useSnackbar } from 'notistack';
import React, { createContext, useContext, useLayoutEffect, useState } from 'react';
import uuid from 'uuid';

import NotificationApp from '../components/notification/NotificationApp';
import NotificationStaticApp from '../components/notification/NotificationStaticApp';

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

    const disableNotifications = (e) => {
        localStorage.setItem('disableNotifications', e.target.checked);
        closeSnackbar();
        setDesable(e.target.checked);
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

    const showSuccess = (title, message) => {
        const id = uuid.v4();
        setNotificationsHistory((prevState) => [
            {
                id: id,
                component: (
                    <NotificationStaticApp
                        key={id}
                        id={id}
                        message={message}
                        type={NOTIFICATION_TYPE.success}
                        title={title}
                    />
                ),
            },
            ...prevState,
        ]);

        if (!disable) {
            enqueueSnackbar(message, {
                content: (key, message) => (
                    <NotificationApp
                        id={key}
                        message={message}
                        type={NOTIFICATION_TYPE.success}
                        title={title}
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
                    <NotificationStaticApp
                        key={id}
                        id={id}
                        message={message}
                        type={NOTIFICATION_TYPE.error}
                        title={title}
                        code={code}
                    />
                ),
            },
            ...prevState,
        ]);

        if (!disable) {
            enqueueSnackbar(message, {
                content: (key, message) => (
                    <NotificationApp
                        id={key}
                        message={message}
                        type={NOTIFICATION_TYPE.error}
                        title={title}
                        code={code}
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
                    <NotificationStaticApp
                        key={id}
                        id={id}
                        message={message}
                        type={NOTIFICATION_TYPE.warning}
                        title={title}
                        code={code}
                    />
                ),
            },
            ...prevState,
        ]);

        if (!disable) {
            enqueueSnackbar(message, {
                content: (key, message) => (
                    <NotificationApp
                        id={key}
                        message={message}
                        type={NOTIFICATION_TYPE.warning}
                        title={title}
                        code={code}
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
                    <NotificationStaticApp
                        key={id}
                        id={id}
                        message={message}
                        type={NOTIFICATION_TYPE.info}
                        title={title}
                    />
                ),
            },
            ...prevState,
        ]);

        if (!disable) {
            enqueueSnackbar(message, {
                content: (key, message) => (
                    <NotificationApp
                        id={key}
                        message={message}
                        type={NOTIFICATION_TYPE.info}
                        title={title}
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
            }}
        >
            {children}
        </NotificationsContext.Provider>
    );
};

export const useNotificationsContext = () => {
    return useContext(NotificationsContext);
};
