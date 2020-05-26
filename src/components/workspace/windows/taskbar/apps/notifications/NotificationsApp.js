import React from 'react';
import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';
import Scrollbar from 'react-scrollbars-custom';

import { useNotificationsContext } from '../../../../../../contexts/notificationsContext';
import useMediaQuery from '../../../../../../hooks/useMediaQuery';
import { Container } from './style';
import WidgetsApp from './widgets/WidgetsApp';

const NotificationsApp = ({ notificationMenuRef }) => {
    const isMobile = useMediaQuery('(max-width: 450px)');
    const { t } = useTranslation();
    const {
        notificationsHistory,
        clearAllNotifications,
    } = useNotificationsContext();

    return ReactDOM.createPortal(
        <Container ref={notificationMenuRef}>
            {notificationsHistory.length > 0 ? (
                <Scrollbar style={{ width: '100%', height: '100%' }}>
                    <div
                        style={{
                            flex: 1,
                            padding: '1rem',
                            overflowY: 'auto',
                        }}
                    >
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
            {!isMobile && <WidgetsApp />}
        </Container>,
        document.querySelector('#desktop')
    );
};
export default NotificationsApp;
