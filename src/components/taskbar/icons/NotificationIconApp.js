import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { NotificationContainer } from '../style';
import { NotificationContext } from '../../../contexts/notificationContext';
import { TaskbarContext } from '../../../contexts/taskbarContext';
library.add(faCommentAlt);

const NotificationIconApp = () => {
    const { notification, hideAllModals } = useContext(NotificationContext);
    const { startTaskbarApp, handleKeyPress } = useContext(TaskbarContext);

    return (
        <NotificationContainer
            tabIndex='0'
            onKeyPress={e => handleKeyPress(e, 'notificationsOpen')}
            onClick={() => {
                startTaskbarApp('notificationsOpen');
                hideAllModals();
            }}
        >
            {notification.length > 0 ? (
                <FontAwesomeIcon icon={['fas', 'comment-alt']} />
            ) : (
                <FontAwesomeIcon icon={['far', 'comment-alt']} />
            )}
        </NotificationContainer>
    );
};
export default NotificationIconApp;
