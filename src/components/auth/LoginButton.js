import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { useSettingsContext } from '../../contexts/settingsContext';

const useStyles = makeStyles({
    btnStyle: (theme) => ({
        position: 'relative',
        overflow: 'hidden',
        paddingLeft: '3rem',
        cursor: 'default',
        backgroundColor: theme().material.primary.main,
        color: theme().material.primary.contrast.darker,
        flex: '1',

        '&:hover': {
            backgroundColor: theme().material.primary.darker,
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
        background: theme().material.accent.main,
    }),
});

const LoginButton = ({ onClick }) => {
    const { t } = useTranslation();
    const { getTheme } = useSettingsContext();
    const classes = useStyles(getTheme);

    return (
        <Button
            classes={{ root: classes.btnStyle }}
            fullWidth
            onClick={onClick}
        >
            <div className={classes.icon}>
                <FontAwesomeIcon icon={['fas', 'sign-in-alt']} size='lg' />
            </div>
            {t('auth.login')}
        </Button>
    );
};

export default LoginButton;
