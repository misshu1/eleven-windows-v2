import React from 'react';
import ReactDOM from 'react-dom';

import NotificationsApp from '../../../../../notifications/NotificationsApp';
import { Container } from './style';

const NotificationsMobileApp = ({ notificationMenuRef }) => {
    return ReactDOM.createPortal(
        <Container ref={notificationMenuRef}>
            <NotificationsApp />
        </Container>,
        document.getElementById('desktop')
    );
};
export default NotificationsMobileApp;
