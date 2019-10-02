import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';
import {
    NotificationContainer,
    Notification,
    WidgetsContainer,
    Widget
} from './style';
import { TaskbarContext } from '../../../contexts/taskbarContext';
import { NotificationContext } from '../../../contexts/notificationContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NotificationApp = () => {
    const { taskbar } = useContext(TaskbarContext);
    const {
        notification,
        closeNotification,
        clearAllNotifications
    } = useContext(NotificationContext);
    const { t } = useTranslation();

    return ReactDOM.createPortal(
        <React.Fragment>
            {taskbar.notificationsOpen && (
                <NotificationContainer>
                    <div
                        style={{
                            flex: 1,
                            padding: '1rem',
                            overflowY: 'auto'
                        }}
                    >
                        {notification.length > 0 ? (
                            notification.map(item => (
                                <Notification key={item.id}>
                                    <div className='icon'>{item.icon}</div>
                                    <div className='content'>
                                        <span className='title'>
                                            <h2>{item.notificationTitle}</h2>
                                            <button
                                                onClick={e =>
                                                    closeNotification(e)
                                                }
                                                id={item.id}
                                            >
                                                <FontAwesomeIcon
                                                    icon={['fas', 'times']}
                                                    style={{
                                                        position: 'relative',
                                                        zIndex: '-1'
                                                    }}
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
                    <span className='clear' onClick={clearAllNotifications}>
                        {t('notification.clear')}
                    </span>
                    <WidgetsContainer>
                        <Widget>
                            <FontAwesomeIcon icon={['fas', 'cog']} size='lg' />
                            <div style={{ flex: 1 }}></div>
                            <h5>Settings</h5>
                        </Widget>
                        <Widget>
                            <FontAwesomeIcon
                                icon={['fas', 'sitemap']}
                                size='lg'
                            />
                            <div style={{ flex: 1 }}></div>
                            <h5>Task Manager</h5>
                        </Widget>
                    </WidgetsContainer>
                </NotificationContainer>
            )}
        </React.Fragment>,
        document.querySelector('#desktop')
    );
};
export default NotificationApp;
