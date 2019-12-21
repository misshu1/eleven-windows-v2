import ReactDOM from 'react-dom';
import React, { useContext } from 'react';
import { NotificationContainer, Notification, WidgetsContainer } from './style';
import { FolderContext, ICON_LOCATION } from '../../../contexts/folderContext';
import { NotificationContext } from '../../../contexts/notificationContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { TaskbarContext } from '../../../contexts/taskbarContext';
import Scrollbar from 'react-scrollbars-custom';
import WidgetApp from './WidgetApp';

const NotificationApp = () => {
    const { folderState } = useContext(FolderContext);
    const { taskbar } = useContext(TaskbarContext);
    const {
        notification,
        closeNotification,
        clearAllNotifications
    } = useContext(NotificationContext);
    const { t } = useTranslation();

    const widgetIcons = () => {
        return folderState.apps.map(item => {
            return item.iconLocation.map(
                location =>
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
