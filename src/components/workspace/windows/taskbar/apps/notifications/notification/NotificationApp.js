import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';

import { NotificationContext } from '../../../../../../../contexts/notificationContext';
import { Container } from './style';

const NotificationApp = ({
    id,
    type,
    icon,
    notificationTitle,
    notificationInfo,
    code,
}) => {
    const { closeNotification } = useContext(NotificationContext);

    return (
        <Container key={id} type={type}>
            <div className='icon'>{icon}</div>
            <div className='content'>
                <span className='title'>
                    <h3>{notificationTitle}</h3>
                    <button onClick={closeNotification} id={id}>
                        <FontAwesomeIcon icon={['fas', 'times']} />
                    </button>
                </span>
                <p>{notificationInfo}</p>
                <p>{code}</p>
            </div>
        </Container>
    );
};
export default NotificationApp;
