import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconButton from '@material-ui/core/IconButton';
import React from 'react';

import { NOTIFICATION_TYPE, useNotificationsContext } from '../../contexts/notificationsContext';
import { Container } from './style';

// This component is used inside Notifications window(Windows) and Notifications Side Menu(Linux)
// Similar to NotificationApp.js but without forwardRef
const NotificationStaticApp = ({ id, message, title, code, type }) => {
    const { closeNotification } = useNotificationsContext();

    return (
        <Container type={type} showInComponent>
            <div className='icon'>
                {type === NOTIFICATION_TYPE.success && (
                    <FontAwesomeIcon icon={['fas', 'check']} />
                )}
                {type === NOTIFICATION_TYPE.error && (
                    <FontAwesomeIcon icon={['fas', 'exclamation']} />
                )}
                {type === NOTIFICATION_TYPE.warning && (
                    <FontAwesomeIcon icon={['fas', 'exclamation-triangle']} />
                )}
                {type === NOTIFICATION_TYPE.info && (
                    <FontAwesomeIcon icon={['fas', 'info']} />
                )}
            </div>
            <div className='content'>
                <span className='title'>
                    <h3>{title}</h3>
                    <IconButton
                        size='small'
                        onClick={() => closeNotification(id)}
                        style={{ padding: '0.5rem' }}
                    >
                        <FontAwesomeIcon
                            icon={['fas', 'times']}
                            style={{ color: '#fff' }}
                        />
                    </IconButton>
                </span>
                <p>{message}</p>
                {code && type === NOTIFICATION_TYPE.error && (
                    <p>
                        {`Error code `}
                        <span className='code'>{code}</span>
                    </p>
                )}

                {code && type === NOTIFICATION_TYPE.warning && (
                    <p>
                        {`Warn code `}
                        <span className='code'>{code}</span>
                    </p>
                )}
            </div>
        </Container>
    );
};

export default NotificationStaticApp;
