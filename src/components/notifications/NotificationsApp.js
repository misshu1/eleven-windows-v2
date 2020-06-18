import React from 'react';
import { useTranslation } from 'react-i18next';
import Scrollbar from 'react-scrollbars-custom';

import { useNotificationsContext } from '../../contexts/notificationsContext';
import { Container } from './style';

const NotificationsApp = () => {
    const {
        notificationsHistory,
        clearAllNotifications,
    } = useNotificationsContext();
    const { t } = useTranslation();

    return (
        <Container>
            {notificationsHistory.length > 0 ? (
                <Scrollbar>
                    <div className='notifications-container'>
                        {notificationsHistory.map((item) => item.component)}
                    </div>
                </Scrollbar>
            ) : (
                <div className='no-notifications'>
                    {t('notification.status')}
                </div>
            )}
            {notificationsHistory.length !== 0 && (
                <span className='clear' onClick={clearAllNotifications}>
                    {t('notification.clear')}
                </span>
            )}
        </Container>
    );
};

export default NotificationsApp;
