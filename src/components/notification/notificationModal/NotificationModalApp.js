import React, { useContext, memo } from 'react';
import ReactDOM from 'react-dom';
import { Container, Notification } from './style';
import { NotificationContext } from '../../../contexts/notificationContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NotificationModalApp = memo(props => {
    const { notification, hideModal } = useContext(NotificationContext);

    return ReactDOM.createPortal(
        <Container>
            {notification
                .filter(item => item.isVisible)
                .map(item => (
                    <Notification
                        key={item.id}
                        visible={item.isVisible}
                        close={item.closeAnimation}
                        type={item.type}
                    >
                        <div className='icon'>{item.icon}</div>
                        <div className='content'>
                            <span className='title'>
                                <h3>{item.notificationTitle}</h3>
                                <button onClick={hideModal} id={item.id}>
                                    <FontAwesomeIcon icon={['fas', 'times']} />
                                </button>
                            </span>
                            <p>{item.notificationInfo}</p>
                            <p>{item.code}</p>
                        </div>
                    </Notification>
                ))}
        </Container>,
        document.querySelector('#modal')
    );
});

export default NotificationModalApp;
