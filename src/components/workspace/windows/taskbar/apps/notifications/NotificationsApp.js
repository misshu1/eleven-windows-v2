import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';
import Scrollbar from 'react-scrollbars-custom';

import { NotificationContext } from '../../../../../../contexts/notificationContext';
import useMediaQuery from '../../../../../../hooks/useMediaQuery';
import NotificationApp from './notification/NotificationApp';
import { Container } from './style';
import WidgetsApp from './widgets/WidgetsApp';

const NotificationsApp = ({ notificationMenuRef }) => {
    const isMobile = useMediaQuery('(max-width: 28rem)');
    const { t } = useTranslation();
    const { notification, clearAllNotifications } = useContext(
        NotificationContext
    );

    return ReactDOM.createPortal(
        <Container ref={notificationMenuRef}>
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
                            <NotificationApp
                                key={item.id}
                                id={item.id}
                                type={item.type}
                                icon={item.icon}
                                notificationTitle={item.notificationTitle}
                                notificationInfo={item.notificationInfo}
                                code={item.code}
                            />
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
            {!isMobile && <WidgetsApp />}
        </Container>,
        document.querySelector('#desktop')
    );
};
export default NotificationsApp;
