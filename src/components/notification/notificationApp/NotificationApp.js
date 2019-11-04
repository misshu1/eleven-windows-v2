import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';
import { NotificationContainer, Notification, WidgetsContainer } from './style';
import { TaskbarContext } from '../../../contexts/taskbarContext';
import { NotificationContext } from '../../../contexts/notificationContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Scrollbar from 'react-scrollbars-custom';
import WidgetApp from './WidgetApp';
import cogIcon from '../../../assets/images/icons/cog.svg';

const NotificationApp = () => {
    const [widget] = useState([
        {
            iconDisplayName: 'Settings',
            useWidgetIcon: true,
            widgetIcon: cogIcon,
            fontIcon: ['fas', 'cog'],
            appIndexName: 'settings',
            appMinimize: 'settingsMinimize',
            appOpen: 'settingsOpen'
        },
        {
            iconDisplayName: 'Task Manager',
            useWidgetIcon: false,
            widgetIcon: null,
            fontIcon: ['fas', 'sitemap'],
            appIndexName: 'taskManager',
            appMinimize: 'taskManagerMinimize',
            appOpen: 'taskManagerOpen'
        }
    ]);
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
                                                        style={{
                                                            position:
                                                                'relative',
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
                    </Scrollbar>
                    <span className='clear' onClick={clearAllNotifications}>
                        {t('notification.clear')}
                    </span>
                    <WidgetsContainer>
                        {widget.map(item => (
                            <WidgetApp
                                key={item.appOpen}
                                iconDisplayName={item.iconDisplayName}
                                widgetIcon={item.widgetIcon}
                                fontIcon={item.fontIcon}
                                appIndexName={item.appIndexName}
                                appMinimize={item.appMinimize}
                                appOpen={item.appOpen}
                                useWidgetIcon={item.useWidgetIcon}
                            />
                        ))}
                    </WidgetsContainer>
                </NotificationContainer>
            )}
        </React.Fragment>,
        document.querySelector('#desktop')
    );
};
export default NotificationApp;
