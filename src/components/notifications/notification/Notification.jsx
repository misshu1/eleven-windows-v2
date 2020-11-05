import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconButton from '@material-ui/core/IconButton';
import React, { forwardRef } from 'react';

import { NOTIFICATION_TYPE } from 'contexts';
import { Container } from './style';

const Notification = forwardRef((props, ref) => {
    const { id, message, title, code, type, onClose, isModal } = props;
    console.log(id);
    return (
        <Container type={type} ref={ref} isModal={isModal}>
            <div className='icon'>
                {type === NOTIFICATION_TYPE.success && (
                    <FontAwesomeIcon icon={['fas', 'check']} size='lg' />
                )}
                {type === NOTIFICATION_TYPE.error && (
                    <FontAwesomeIcon icon={['fas', 'exclamation']} size='lg' />
                )}
                {type === NOTIFICATION_TYPE.warning && (
                    <FontAwesomeIcon
                        icon={['fas', 'exclamation-triangle']}
                        size='lg'
                    />
                )}
                {type === NOTIFICATION_TYPE.info && (
                    <FontAwesomeIcon icon={['fas', 'info']} size='lg' />
                )}
            </div>
            <div className='content'>
                <span className='title'>
                    <h3>{title}</h3>
                    <IconButton
                        size='small'
                        onClick={() => onClose(id)}
                        style={{ padding: '0.5rem' }}
                        aria-label='hide notification'
                    >
                        <FontAwesomeIcon
                            icon={['fas', 'times']}
                            style={{ color: '#fff' }}
                        />
                    </IconButton>
                </span>
                <p className='message'>{message}</p>
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
});

export default Notification;

Notification.displayName = 'Notification';
