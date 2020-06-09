import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Scrollbar from 'react-scrollbars-custom';

import { useSettingsContext } from '../../contexts/settingsContext';
import { Container, Form } from './style';
import useAuthValidation from './useAuthValidation';

const useStyles = makeStyles(() => ({
    loginButton: (theme) => ({
        backgroundColor: theme.material.accent.main,
        color: theme.material.accent.contrast.main,
        cursor: 'default',
        border: 0,
        margin: '.5rem',
        borderRadius: 3,
        '&:disabled': {
            color: '#e3e3e3',
            backgroundColor: theme.disableBg,
        },
        '&:hover': {
            backgroundColor: theme.material.accent.main,
        },
    }),
    cancelButton: (theme) => ({
        backgroundColor: theme.material.warn.main,
        color: '#fff',
        cursor: 'default',
        border: 0,
        margin: '.5rem',
        borderRadius: 3,
        '&:hover': {
            backgroundColor: theme.material.warn.main,
        },
    }),
    changeViewButton: (theme) => ({
        border: `1px solid ${theme.material.primary.main}`,
        color: `${theme.whiteBlack}`,
        cursor: 'default',
        margin: '.5rem',
        borderRadius: 3,
    }),
}));

const INITIAL_STATE = {
    email: '',
    password: '',
};

const Login = ({ onCancel, changeView }) => {
    const { theme } = useSettingsContext();
    const classes = useStyles(theme);
    const { t } = useTranslation();
    const {
        handleBlur,
        handleChange,
        values,
        errors,
        isSubmitting,
        handleLogin,
    } = useAuthValidation(INITIAL_STATE);

    return (
        <Container>
            <h3>{t('auth.login')}</h3>
            <Scrollbar
                contentProps={{
                    style: {
                        display: 'flex',
                        padding: '2px',
                    },
                }}
            >
                <Form
                    autoComplete='off'
                    onSubmit={(e) => handleLogin(e, onCancel)}
                    errors={errors}
                >
                    <label htmlFor='email'>
                        <span>{t('auth.email')} *</span>
                        <input
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name='email'
                            type='email'
                            id='email'
                            required
                        />
                        <p className='error'>
                            {errors.email || errors.firebase}
                        </p>
                    </label>
                    <label htmlFor='password'>
                        <span>{t('auth.pass')} *</span>
                        <input
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name='password'
                            type='password'
                            id='password'
                            required
                        />
                        <p className='error'>{errors.password}</p>
                    </label>
                    <Button
                        variant='contained'
                        type='submit'
                        disabled={isSubmitting}
                        className={classes.loginButton}
                    >
                        {t('auth.login')}
                    </Button>
                    <Button
                        variant='contained'
                        type='button'
                        disabled={isSubmitting}
                        className={classes.cancelButton}
                        onClick={onCancel}
                    >
                        {t('auth.cancel')}
                    </Button>
                    <Button
                        type='button'
                        variant='outlined'
                        className={classes.changeViewButton}
                        onClick={changeView}
                    >
                        {t('auth.changeView.dontHaveAccount')}
                    </Button>
                </Form>
            </Scrollbar>
        </Container>
    );
};

export default Login;