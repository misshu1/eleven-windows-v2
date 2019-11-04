import React, { useContext } from 'react';
import Switch from '@material-ui/core/Switch';
import { NotificationContext } from '../../../contexts/notificationContext';
import {
    Title,
    NotificationContainer,
    Spacer,
    NotificationText
} from './style';

const Notification = () => {
    const { disable, disableNotifications } = useContext(NotificationContext);

    return (
        <Spacer>
            <Title>Notifications</Title>
            <NotificationContainer>
                <Switch
                    checked={disable}
                    onChange={disableNotifications}
                    value={disable}
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
                <h4>Disable notifications alerts.</h4>
            </NotificationContainer>
            <NotificationText>
                <strong>*</strong>You will still see them inside notification
                window.
            </NotificationText>
        </Spacer>
    );
};

export default Notification;
