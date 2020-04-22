import { library } from '@fortawesome/fontawesome-svg-core';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Badge from '@material-ui/core/Badge';
import Tooltip from '@material-ui/core/Tooltip';
import React, { useCallback, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { NotificationContext } from '../../../../../../contexts/notificationContext';
import { useNotificationsTaskbarContext } from '../../contexts/notificationsTaskbarContext';
import { Container } from './style';

library.add(faCommentAlt);

const NotificationIconApp = ({ notificationIconRef }) => {
    const { notification, hideAllModals } = useContext(NotificationContext);
    const {
        toggleNotificationMenu,
        isNotificationMenuOpen,
    } = useNotificationsTaskbarContext();
    const { t } = useTranslation();

    const start = useCallback(() => {
        toggleNotificationMenu();
        hideAllModals();
    }, [hideAllModals, toggleNotificationMenu]);

    const tooltipNotifications =
        notification.length === 0
            ? t('tooltip.emptyNotifications')
            : `${notification.length} ${t('tooltip.notifications')}`;

    return (
        <Tooltip title={tooltipNotifications} placement='top' enterDelay={500}>
            <Container
                open={isNotificationMenuOpen}
                tabIndex='0'
                onClick={start}
                ref={notificationIconRef}
            >
                {notification.length > 0 ? (
                    <Badge
                        badgeContent={notification.length}
                        color='error'
                        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                        showZero={false}
                    >
                        <FontAwesomeIcon icon={['fas', 'comment-alt']} />
                    </Badge>
                ) : (
                    <FontAwesomeIcon icon={['far', 'comment-alt']} />
                )}
            </Container>
        </Tooltip>
    );
};
export default NotificationIconApp;
