import { library } from '@fortawesome/fontawesome-svg-core';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Badge from '@material-ui/core/Badge';
import Tooltip from '@material-ui/core/Tooltip';
import { useSnackbar } from 'notistack';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useNotificationsContext } from '../../../../../../contexts/notificationsContext';
import { useNotificationsTaskbarContext } from '../../contexts/notificationsTaskbarContext';
import { Container } from './style';

library.add(faCommentAlt);

const NotificationIconApp = ({ notificationIconRef }) => {
    const { notificationsHistory } = useNotificationsContext();
    const { closeSnackbar } = useSnackbar();

    const {
        toggleNotificationMenu,
        isNotificationMenuOpen,
    } = useNotificationsTaskbarContext();
    const { t } = useTranslation();

    const start = useCallback(() => {
        toggleNotificationMenu();
        closeSnackbar();
    }, [closeSnackbar, toggleNotificationMenu]);

    const tooltipNotifications =
        notificationsHistory.length === 0
            ? t('tooltip.emptyNotifications')
            : `${notificationsHistory.length} ${t('tooltip.notifications')}`;

    return (
        <Tooltip title={tooltipNotifications} placement='top' enterDelay={500}>
            <Container
                open={isNotificationMenuOpen}
                tabIndex='0'
                onClick={start}
                ref={notificationIconRef}
            >
                {notificationsHistory.length > 0 ? (
                    <Badge
                        badgeContent={notificationsHistory.length}
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
