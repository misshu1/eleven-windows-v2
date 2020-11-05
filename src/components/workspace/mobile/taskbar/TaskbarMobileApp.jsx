import React from 'react';
import ReactDOM from 'react-dom';

import AppsMenuAndLogo from './AppsMenuAndLogo';
import CartMenuAndIcon from './CartMenuAndIcon';
import NotificationMenuAndIcon from './NotificationMenuAndIcon';
import { Container } from './style';

const TaskbarMobileApp = () => {
    return ReactDOM.createPortal(
        <Container>
            <NotificationMenuAndIcon />
            <AppsMenuAndLogo />
            <CartMenuAndIcon />
        </Container>,
        document.getElementById('taskbar')
    );
};

export default TaskbarMobileApp;
