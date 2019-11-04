import React, { useContext } from 'react';
import Switch from '@material-ui/core/Switch';
import { NotificationContext } from '../../../contexts/notificationContext';
import { useTranslation } from 'react-i18next';
import {
    Title,
    NotificationContainer,
    Spacer,
    NotificationText
} from './style';

const Notification = () => {
    const { t } = useTranslation();
    const { disable, disableNotifications } = useContext(NotificationContext);

    return (
        <Spacer>
            <Title>{t('settings.title.notifications')}</Title>
            <NotificationContainer>
                <Switch
                    checked={disable}
                    onChange={disableNotifications}
                    value={disable}
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
                <h4>{t('settings.disableButton')}</h4>
            </NotificationContainer>
            <NotificationText>
                <strong>*</strong>
                {t('settings.disableButtonInfo')}
            </NotificationText>
        </Spacer>
    );
};

export default Notification;
