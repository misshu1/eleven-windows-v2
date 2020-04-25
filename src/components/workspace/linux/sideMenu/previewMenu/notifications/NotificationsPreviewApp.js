import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Scrollbar from 'react-scrollbars-custom';

import { useNotificationsContext } from '../../../../../../contexts/notificationsContext';
import { Container } from './style';

const NotificationsPreviewApp = () => {
    const {
        notificationsHistory,
        clearAllNotifications,
    } = useNotificationsContext();
    const { t } = useTranslation();

    return (
        <Container>
            <Typography variant='h5' component='h2' className='heading-name'>
                {t('notification.title')}
            </Typography>
            <Scrollbar>
                {notificationsHistory.length > 0 ? (
                    notificationsHistory.map((item) => item.component)
                ) : (
                    <div className='no-notifications'>
                        {t('notification.status')}
                    </div>
                )}
            </Scrollbar>
            {notificationsHistory.length !== 0 && (
                <span className='clear' onClick={clearAllNotifications}>
                    {t('notification.clear')}
                </span>
            )}
        </Container>
    );
};

export default NotificationsPreviewApp;
