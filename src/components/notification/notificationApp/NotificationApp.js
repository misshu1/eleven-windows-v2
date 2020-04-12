import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';
import Scrollbar from 'react-scrollbars-custom';

import { ICON_LOCATION, useFolderContext } from '../../../contexts/folderContext';
import { NotificationContext } from '../../../contexts/notificationContext';
import { TaskbarContext } from '../../../contexts/taskbarContext';
import { Notification, NotificationContainer, WidgetsContainer } from './style';
import WidgetApp from './WidgetApp';

const NotificationApp = () => {
    const { folderState, sortByAppName } = useFolderContext();
    const apps = useRef(folderState.apps.sort(sortByAppName));

    const {
        taskbar: { notificationsOpen },
    } = useContext(TaskbarContext);
    const {
        notification,
        closeNotification,
        clearAllNotifications,
    } = useContext(NotificationContext);
    const { t } = useTranslation();

    const widgetIcons = () => {
        return apps.current.map((item) => {
            return item.iconLocation.map(
                (location) =>
                    location === ICON_LOCATION.notificationsWindow && (
                        <WidgetApp
                            key={item.id}
                            appId={item.id}
                            iconDisplayName={item.appName}
                            widgetIcon={item.widgetIcon}
                        />
                    )
            );
        });
    };

    return ReactDOM.createPortal(
        <React.Fragment>
            {notificationsOpen && (
                <NotificationContainer>
                    {notification.length > 0 ? (
                        <Scrollbar style={{ width: '100%', height: '100%' }}>
                            <div
                                style={{
                                    flex: 1,
                                    padding: '1rem',
                                    overflowY: 'auto',
                                }}
                            >
                                {notification.map((item) => (
                                    <Notification
                                        key={item.id}
                                        type={item.type}
                                    >
                                        <div className='icon'>{item.icon}</div>
                                        <div className='content'>
                                            <span className='title'>
                                                <h3>
                                                    {item.notificationTitle}
                                                </h3>
                                                <button
                                                    onClick={closeNotification}
                                                    id={item.id}
                                                >
                                                    <FontAwesomeIcon
                                                        icon={['fas', 'times']}
                                                    />
                                                </button>
                                            </span>
                                            <p>{item.notificationInfo}</p>
                                            <p>{item.code}</p>
                                        </div>
                                    </Notification>
                                ))}
                            </div>
                        </Scrollbar>
                    ) : (
                        <div className='no-notifications'>
                            {t('notification.status')}
                        </div>
                    )}
                    {notification.length !== 0 && (
                        <span className='clear' onClick={clearAllNotifications}>
                            {t('notification.clear')}
                        </span>
                    )}
                    <WidgetsContainer>{widgetIcons()}</WidgetsContainer>
                </NotificationContainer>
            )}
        </React.Fragment>,
        document.querySelector('#desktop')
    );
};
export default NotificationApp;
