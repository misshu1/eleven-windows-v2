import { useSnackbar } from 'notistack';
import React, {
    createContext,
    useCallback,
    useContext,
    useLayoutEffect,
    useMemo,
    useState
} from 'react';
import { v4 as uuidv4 } from 'uuid';

import Notification from 'components/notifications/notification/Notification';
import { NOTIFICATION_TYPE } from 'components/common';

const NotificationsContext = createContext();
export const NotificationsProvider = ({ children }) => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const [notificationsHistory, setNotificationsHistory] = useState([]);
    const [disable, setDesable] = useState(false);

    useLayoutEffect(() => {
        const notificationsDisabled = localStorage.getItem(
            'disableNotifications'
        );
        if (!notificationsDisabled) {
            localStorage.setItem('disableNotifications', false);
        } else {
            const localStorageVal =
                notificationsDisabled !== 'undefined'
                    ? notificationsDisabled
                    : null;

            setDesable(!!JSON.parse(localStorageVal));
        }
    }, []);

    const disableNotifications = useCallback(
        (boolean) => {
            localStorage.setItem('disableNotifications', boolean);
            closeSnackbar();
            setDesable(boolean);
        },
        [closeSnackbar]
    );

    const closeNotification = (id) => {
        setNotificationsHistory((prevState) =>
            prevState.filter((item) => item.id !== id)
        );
    };

    const clearAllNotifications = useCallback(() => {
        if (notificationsHistory.length > 0) {
            setNotificationsHistory([]);
        }
    }, [notificationsHistory.length]);

    const areNotificationsDisabled = useCallback(() => {
        return disable;
    }, [disable]);

    const showSuccess = useCallback(
        (title, message) => {
            const id = uuidv4();
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
                    )
                },
                ...prevState
            ]);

            if (!disable) {
                enqueueSnackbar(message, {
                    content: (key) => (
                        <Notification
                            id={key}
                            message={message}
                            type={NOTIFICATION_TYPE.success}
                            title={title}
                            onClose={closeSnackbar}
                            isModal={true}
                        />
                    )
                });
            }
        },
        [closeSnackbar, disable, enqueueSnackbar]
    );

    const showError = useCallback(
        (title, message, code) => {
            const id = uuidv4();
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
                    )
                },
                ...prevState
            ]);

            if (!disable) {
                enqueueSnackbar(message, {
                    content: (key) => (
                        <Notification
                            id={key}
                            message={message}
                            type={NOTIFICATION_TYPE.error}
                            title={title}
                            code={code}
                            onClose={closeSnackbar}
                            isModal={true}
                        />
                    )
                });
            }
        },
        [closeSnackbar, disable, enqueueSnackbar]
    );

    const showWarning = useCallback(
        (title, message, code) => {
            const id = uuidv4();
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
                    )
                },
                ...prevState
            ]);

            if (!disable) {
                enqueueSnackbar(message, {
                    content: (key) => (
                        <Notification
                            id={key}
                            message={message}
                            type={NOTIFICATION_TYPE.warning}
                            title={title}
                            code={code}
                            onClose={closeSnackbar}
                            isModal={true}
                        />
                    )
                });
            }
        },
        [closeSnackbar, disable, enqueueSnackbar]
    );

    const showInfo = useCallback(
        (title, message) => {
            const id = uuidv4();
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
                    )
                },
                ...prevState
            ]);

            if (!disable) {
                enqueueSnackbar(message, {
                    content: (key) => (
                        <Notification
                            id={key}
                            message={message}
                            type={NOTIFICATION_TYPE.info}
                            title={title}
                            onClose={closeSnackbar}
                            isModal={true}
                        />
                    )
                });
            }
        },
        [closeSnackbar, disable, enqueueSnackbar]
    );

    const notificationsValue = useMemo(() => {
        return {
            disable,
            notificationsHistory,
            showSuccess,
            showError,
            showWarning,
            showInfo,
            clearAllNotifications,
            disableNotifications,
            closeNotification,
            areNotificationsDisabled
        };
    }, [
        areNotificationsDisabled,
        clearAllNotifications,
        disable,
        disableNotifications,
        notificationsHistory,
        showError,
        showInfo,
        showSuccess,
        showWarning
    ]);

    return (
        <NotificationsContext.Provider value={notificationsValue}>
            {children}
        </NotificationsContext.Provider>
    );
};

export const useNotificationsContext = () => {
    return useContext(NotificationsContext);
};
