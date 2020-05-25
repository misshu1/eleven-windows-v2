import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { useNotificationsContext } from '../../../contexts/notificationsContext';
import { useSettingsContext } from '../../../contexts/settingsContext';
import { NotificationContainer, NotificationText, Spacer, Title } from './style';

const useStyles = makeStyles({
    switchBase: (theme) => ({
        color: theme.accentBg,
        '&$checked': {
            color: theme.accentBg,
        },
        '&$checked + $track': {
            backgroundColor: theme.accentBg,
        },
    }),
    checked: (theme) => ({
        color: theme.accentBg,
    }),
    track: (theme) => ({
        color: theme.accentBg,
    }),
    thumb: (theme) => ({
        color: theme.switchColor,
    }),
});

const Notification = () => {
    const { theme } = useSettingsContext();
    const classes = useStyles(theme);
    const { t } = useTranslation();
    const { disable, disableNotifications } = useNotificationsContext();

    return (
        <Spacer>
            <Title>{t('settings.title.notifications')}</Title>
            <NotificationContainer>
                <Switch
                    checked={disable}
                    onChange={disableNotifications}
                    value={disable}
                    classes={{
                        switchBase: classes.switchBase,
                        track: classes.track,
                        thumb: classes.thumb,
                        checked: classes.checked,
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
