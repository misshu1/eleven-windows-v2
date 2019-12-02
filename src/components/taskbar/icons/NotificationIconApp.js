import React, { useContext } from 'react';
import { NotificationContainer } from '../style';
import { NotificationContext } from '../../../contexts/notificationContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TaskbarContext } from '../../../contexts/taskbarContext';
import { useTranslation } from 'react-i18next';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import Tooltip from '@material-ui/core/Tooltip';
library.add(faCommentAlt);

const NotificationIconApp = () => {
    const { notification, hideAllModals } = useContext(NotificationContext);
    const { startTaskbarApp, handleKeyPress } = useContext(TaskbarContext);
    const { t } = useTranslation();

    const tooltipNotifications =
        notification.length === 0
            ? t('tooltip.emptyNotifications')
            : `${notification.length} ${t('tooltip.notifications')}`;

    return (
        <Tooltip title={tooltipNotifications} placement='top' enterDelay={500}>
            <NotificationContainer
                tabIndex='0'
                onKeyPress={e => handleKeyPress(e, 'notificationsOpen')}
                onClick={() => {
                    startTaskbarApp('notificationsOpen');
                    hideAllModals();
                }}
            >
                {notification.length > 0 ? (
                    <span className='fa-layers fa-fw'>
                        <FontAwesomeIcon icon={['fas', 'comment-alt']} />
                        <span className='counter-style fa-layers-counter fa-layers-bottom-right fa-2x'>
                            {notification.length}
                        </span>
                    </span>
                ) : (
                    <FontAwesomeIcon icon={['far', 'comment-alt']} />
                )}
            </NotificationContainer>
        </Tooltip>
    );
};
export default NotificationIconApp;
