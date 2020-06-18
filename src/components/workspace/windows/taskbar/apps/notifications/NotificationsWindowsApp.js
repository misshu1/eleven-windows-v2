import React from 'react';
import ReactDOM from 'react-dom';

import useMediaQuery from '../../../../../../hooks/useMediaQuery';
import NotificationsApp from '../../../../../notifications/NotificationsApp';
import { Container } from './style';
import WidgetsApp from './widgets/WidgetsApp';

const NotificationsWindowsApp = ({ notificationMenuRef }) => {
    const isMobile = useMediaQuery('(max-width: 450px)');

    return ReactDOM.createPortal(
        <Container ref={notificationMenuRef}>
            <NotificationsApp />
            {!isMobile && <WidgetsApp />}
        </Container>,
        document.getElementById('desktop')
    );
};
export default NotificationsWindowsApp;
