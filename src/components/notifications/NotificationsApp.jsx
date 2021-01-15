import React from 'react';
import { useTranslation } from 'react-i18next';

import { useNotificationsContext } from 'contexts';
import { ScrollbarApp } from 'components/common';
import { Container } from './style';
import { PrimaryButton } from 'components/common/Buttons';

const NotificationsApp = () => {
    const {
        notificationsHistory,
        clearAllNotifications
    } = useNotificationsContext();
    const { t } = useTranslation();

    return (
        <Container>
            {notificationsHistory.length > 0 ? (
                <ScrollbarApp>
                    <div className='notifications-container'>
                        {notificationsHistory.map((item) => item.component)}
                    </div>
                </ScrollbarApp>
            ) : (
                <div className='no-notifications'>
                    {t('notification.status')}
                </div>
            )}
            {notificationsHistory.length !== 0 && (
                <div className='btn-container'>
                    <PrimaryButton
                        aria-label='clear notifications'
                        onClick={clearAllNotifications}
                        fontIcon={['fas', 'trash-alt']}
                        fullWidth
                    >
                        {t('notification.clear')}
                    </PrimaryButton>
                </div>
            )}
        </Container>
    );
};

export default NotificationsApp;
