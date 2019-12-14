import ReactDOM from 'react-dom';
import React, { useContext, useCallback } from 'react';
import { NotificationContainer, Notification, WidgetsContainer } from './style';
import { NotificationContext } from '../../../contexts/notificationContext';
import { useAppIconsContext } from '../../../contexts/appIconsContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { TaskbarContext } from '../../../contexts/taskbarContext';
import Scrollbar from 'react-scrollbars-custom';
import WidgetApp from './WidgetApp';

const NotificationApp = () => {
    const { icons, ICON_LOCATION } = useAppIconsContext();
    const { taskbar } = useContext(TaskbarContext);
    const {
        notification,
        closeNotification,
        clearAllNotifications
    } = useContext(NotificationContext);
    const { t } = useTranslation();

    const widgetIcons = useCallback(() => {
        return icons.map(item => {
            return item.iconLocation.map(
                location =>
                    location === ICON_LOCATION.notificationsWindow && (
                        <WidgetApp
                            key={item.appOpen}
                            iconDisplayName={item.iconDisplayName}
                            widgetIcon={item.widgetIcon}
                            appIndexName={item.appIndexName}
                            appMinimize={item.appMinimize}
                            appOpen={item.appOpen}
                        />
                    )
            );
        });
    }, [ICON_LOCATION.notificationsWindow, icons]);

    return ReactDOM.createPortal(
        <React.Fragment>
            {taskbar.notificationsOpen && (
                <NotificationContainer>
                    <Scrollbar style={{ width: '100%', height: '100%' }}>
                        <div
                            style={{
                                flex: 1,
                                padding: '1rem',
                                overflowY: 'auto'
                            }}
                        >
                            {notification.length > 0 ? (
                                notification.map(item => (
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
                                ))
                            ) : (
                                <p>{t('notification.status')}</p>
                            )}
                        </div>
                    </Scrollbar>
                    <span className='clear' onClick={clearAllNotifications}>
                        {t('notification.clear')}
                    </span>
                    <WidgetsContainer>{widgetIcons()}</WidgetsContainer>
                </NotificationContainer>
            )}
        </React.Fragment>,
        document.querySelector('#desktop')
    );
};
export default NotificationApp;
