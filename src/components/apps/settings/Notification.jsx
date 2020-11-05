import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { useNotificationsContext } from 'contexts';
import {
    NotificationContainer,
    NotificationText,
    Spacer,
    Title
} from './style';

const useStyles = makeStyles({
    switchBase: {
        color: 'var(--primary)',
        '&$checked': {
            color: 'var(--primary)'
        },
        '&$checked + $track': {
            backgroundColor: 'var(--primary)'
        }
    },
    checked: {
        color: 'var(--primary)'
    },
    track: {
        color: 'var(--primary)'
    },
    thumb: {
        color: 'var(--primaryDark)'
    }
});

const Notification = () => {
    const classes = useStyles();
    const { t } = useTranslation();
    const { disable, disableNotifications } = useNotificationsContext();

    return (
        <Spacer>
            <Title>{t('settings.title.notifications')}</Title>
            <NotificationContainer>
                <Switch
                    checked={disable}
                    onChange={(e) => disableNotifications(e.target.checked)}
                    value={disable}
                    classes={{
                        switchBase: classes.switchBase,
                        track: classes.track,
                        thumb: classes.thumb,
                        checked: classes.checked
                    }}
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
