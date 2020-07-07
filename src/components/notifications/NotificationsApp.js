import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { useNotificationsContext } from '../../contexts/notificationsContext';
import { useSettingsContext } from '../../contexts/settingsContext';
import ScrollbarApp from '../common/ScrollbarApp';
import { Container } from './style';

const useStyles = makeStyles({
    btnStyle: (theme) => ({
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        paddingLeft: '3rem',
        cursor: 'default',
        backgroundColor: theme.material.primary.main,
        color: theme.material.primary.contrast.darker,

        '&:hover': {
            backgroundColor: theme.material.primary.darker,
        },
    }),
    icon: (theme) => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: '0',
        top: '0',
        bottom: '0',
        width: '2.5rem',
        transition: 'background 0.2s ease-in-out',
        borderTopRightRadius: '0 0',
        borderBottomRightRadius: '37% 100%',
        background: theme.material.accent.main,
    }),
});

const NotificationsApp = () => {
    const {
        notificationsHistory,
        clearAllNotifications,
    } = useNotificationsContext();
    const { theme } = useSettingsContext();
    const classes = useStyles(theme);
    const { t } = useTranslation();

    return (
        <Container>
            {notificationsHistory.length > 0 ? (
                <ScrollbarApp>
                    <div className='notifications-container'>
                        {notificationsHistory.map((item) => item.component)}
                    </div>
                </ScrollbarApp>
            ) : (
                <div className='no-notifications'>
                    {t('notification.status')}
                </div>
            )}
            {notificationsHistory.length !== 0 && (
                <div className='btn-container'>
                    <Button
                        classes={{ root: classes.btnStyle }}
                        onClick={clearAllNotifications}
                    >
                        <div className={classes.icon}>
                            <FontAwesomeIcon
                                icon={['fas', 'trash-alt']}
                                size='lg'
                            />
                        </div>
                        {t('notification.clear')}
                    </Button>
                </div>
            )}
        </Container>
    );
};

export default NotificationsApp;
