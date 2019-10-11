import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NotificationContainer } from './style';
import { NotificationContext } from '../../contexts/notificationContext';
import { TaskbarContext } from '../../contexts/taskbarContext';

const Notification = () => {
    const { notification, hideAllModals } = useContext(NotificationContext);
    const { toggleAppVisibility, handleKeyPress } = useContext(TaskbarContext);

    return (
        <NotificationContainer
            tabIndex='0'
            onKeyPress={e => handleKeyPress(e, 'notificationsOpen')}
            onClick={() => {
                toggleAppVisibility('notificationsOpen');
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
export default Notification;
