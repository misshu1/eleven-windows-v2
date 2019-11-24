import React, { useContext } from 'react';
import { NotificationContext } from '../../../contexts/notificationContext';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../../contexts/themeContext';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import {
    Title,
    NotificationContainer,
    Spacer,
    NotificationText
} from './style';

const useStyles = makeStyles({
    switchBase: theme => ({
        color: theme.accentBg,
        '&$checked': {
            color: theme.accentBg
        },
        '&$checked + $track': {
            backgroundColor: theme.accentBg
        }
    }),
    checked: theme => ({
        color: theme.accentBg,
        opacity: 1
    }),
    track: theme => ({
        color: theme.accentBg
    }),
    thumb: theme => ({
        color: theme.switchColor,
        opacity: 0.75
    })
});

const Notification = () => {
    const { theme } = useContext(ThemeContext);
    const classes = useStyles(theme);
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
