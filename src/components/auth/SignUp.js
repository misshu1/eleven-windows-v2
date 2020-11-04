import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import React from 'react';
import { useTranslation } from 'react-i18next';

import ScrollbarApp from 'components/common/ScrollbarApp';
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
            backgroundColor: 'var(--primary) !important',
            filter: 'grayscale(1)',
            color: '#d6d8de'
        },
        '&:hover': {
            backgroundColor: 'var(--primaryDark)'
        }
    },
    changeViewButton: {
        border: '1px solid var(--primary)',
        color: 'var(--whiteBlack)',
        cursor: 'default',
        margin: '.5rem',
        borderRadius: 3,
        '&:disabled': {
            backgroundColor: 'var(--primary) !important',
            filter: 'grayscale(1)',
            color: '#d6d8de'
        },
        '&:hover': {
            border: '1px solid var(--primaryDark)'
        }
    }
}));

const INITIAL_STATE = {
    name: '',
    email: '',
    password: ''
};

const SignUp = ({ onCancel, changeView }) => {
    const classes = useStyles();
    const { t } = useTranslation();
    const {
        handleBlur,
        handleChange,
        values,
        errors,
        isSubmitting,
        handleRegister
    } = useAuthValidation(INITIAL_STATE);

    return (
        <Container>
            <div className='header-container'>
                <h3>{t('auth.register')}</h3>
                <Tooltip
                    title={t('auth.cancel')}
                    placement='bottom'
                    enterDelay={500}
                >
                    <button
                        className='close-btn'
                        onClick={onCancel}
                        aria-label='cancel sign up'
                    >
                        <FontAwesomeIcon icon={['fas', 'times']} size='lg' />
                    </button>
                </Tooltip>
            </div>
            <ScrollbarApp>
                <Form
                    autoComplete='off'
                    onSubmit={(e) => handleRegister(e, onCancel)}
                    errors={errors}
                >
                    <label htmlFor='name'>
                        <span>{t('auth.name')} *</span>
                        <input
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name='name'
                            type='name'
                            id='name'
                            required
                        />
                        <p className='error'>{errors.name}</p>
                    </label>

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
                        type='submit'
                        variant='contained'
                        aria-label='sign up'
                        disabled={isSubmitting}
                        className={classes.loginButton}
                    >
                        {t('auth.signUp')}
                    </Button>
                    <Button
                        type='button'
                        variant='outlined'
                        aria-label='go to login'
                        disabled={isSubmitting}
                        className={classes.changeViewButton}
                        onClick={changeView}
                    >
                        {t('auth.changeView.haveAccount')}
                    </Button>
                </Form>
            </ScrollbarApp>
        </Container>
    );
};

export default SignUp;
