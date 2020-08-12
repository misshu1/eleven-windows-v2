import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import React from 'react';
import { useTranslation } from 'react-i18next';

import ScrollbarApp from '../common/ScrollbarApp';
import { Container, Form } from './style';
import useAuthValidation from './useAuthValidation';

const useStyles = makeStyles(() => ({
    loginButton: {
        backgroundColor: 'var(--primary)',
        color: '#fff',
        cursor: 'default',
        border: 0,
        margin: '.5rem',
        borderRadius: 3,
        '&:disabled': {
            filter: 'grayscale(1)',
            color: '#d6d8de',
        },
        '&:hover': {
            backgroundColor: 'var(--primaryDark)',
        },
    },
    changeViewButton: {
        border: '1px solid var(--primary)',
        color: 'var(--whiteBlack)',
        cursor: 'default',
        margin: '.5rem',
        borderRadius: 3,
        '&:disabled': {
            filter: 'grayscale(1)',
            color: '#d6d8de',
        },
        '&:hover': {
            border: '1px solid var(--primaryDark)',
        },
    },
}));

const INITIAL_STATE = {
    email: '',
    password: '',
};

const Login = ({ onCancel, changeView }) => {
    const classes = useStyles();
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
            <div className='header-container'>
                <h3>{t('auth.login')}</h3>
                <Tooltip
                    title={t('auth.cancel')}
                    placement='bottom'
                    enterDelay={500}
                >
                    <button
                        className='close-btn'
                        onClick={onCancel}
                        aria-label='cancel login'
                    >
                        <FontAwesomeIcon icon={['fas', 'times']} size='lg' />
                    </button>
                </Tooltip>
            </div>
            <ScrollbarApp>
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
                        aria-label='login'
                        disabled={isSubmitting}
                        className={classes.loginButton}
                    >
                        {t('auth.login')}
                    </Button>
                    <Button
                        variant='outlined'
                        type='button'
                        aria-label='go to create account'
                        disabled={isSubmitting}
                        className={classes.changeViewButton}
                        onClick={changeView}
                    >
                        {t('auth.changeView.dontHaveAccount')}
                    </Button>
                </Form>
            </ScrollbarApp>
        </Container>
    );
};

export default Login;
