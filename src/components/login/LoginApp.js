import React, { useState, useContext } from 'react';
import { Container, LoginContainer } from './style';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../contexts/themeContext';
import useFormValidation from '../../hooks/useFormValidation';
import validateLogin from '../../hooks/validateLogin';

const useStyles = makeStyles(() => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        background: 'rgba(0,0,0,0.2)',
        padding: '.5rem'
    },
    textField: {
        marginLeft: '.5rem',
        marginRight: '.5rem',
        maxWidth: '15rem'
    },
    inputStyle: {
        height: '1rem',
        color: '#fff'
    },
    loginButton: theme => ({
        backgroundColor: theme.material.accent.main,
        color: theme.material.accent.contrast.main,
        cursor: 'default',
        border: 0,
        margin: '.5rem',
        borderRadius: 3,
        '&:disabled': {
            color: '#e3e3e3',
            backgroundColor: theme.disableBg
        },
        '&:hover': {
            backgroundColor: theme.material.accent.main
        }
    }),
    cancelButton: theme => ({
        backgroundColor: theme.material.warn.main,
        color: '#fff',
        cursor: 'default',
        border: 0,
        margin: '.5rem',
        borderRadius: 3,
        '&:hover': {
            backgroundColor: theme.material.warn.main
        }
    }),
    changeViewButton: theme => ({
        border: `1px solid ${theme.material.primary.main}`,
        color: '#fff',
        cursor: 'default',
        margin: '.5rem',
        borderRadius: 3
    })
}));

const INITIAL_STATE = {
    name: '',
    email: '',
    password: ''
};

const LoginApp = props => {
    const { theme } = useContext(ThemeContext);
    const classes = useStyles(theme);

    const {
        handleBlur,
        handleChange,
        values,
        errors,
        isSubmitting,
        animateInOut,
        cancelLogin,
        firebaseError,
        handleLogin,
        handleRegister
    } = useFormValidation(INITIAL_STATE, validateLogin);
    const [showLogin, setShowLogin] = useState(true);

    return (
        <Container background={props.background} animateInOut={animateInOut}>
            <LoginContainer animateInOut={animateInOut}>
                <form
                    className={classes.container}
                    autoComplete='off'
                    onSubmit={showLogin ? handleLogin : handleRegister}
                >
                    {!showLogin && (
                        <TextField
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                            name='name'
                            type='text'
                            id='name'
                            autoComplete='off'
                            className={classes.textField}
                            inputProps={{
                                className: classes.inputStyle
                            }}
                            InputLabelProps={{
                                style: {
                                    color: '#fff'
                                }
                            }}
                            label='Name'
                            margin='normal'
                            variant='outlined'
                            error={errors.name ? true : false}
                            helperText={errors.name}
                            onKeyPress={e => {
                                e.key === 'Enter' && e.preventDefault();
                            }}
                            required
                        />
                    )}
                    <TextField
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        name='email'
                        type='email'
                        id='email'
                        autoComplete='off'
                        className={classes.textField}
                        inputProps={{
                            className: classes.inputStyle
                        }}
                        InputLabelProps={{
                            style: {
                                color: '#fff'
                            }
                        }}
                        label='Email'
                        margin='normal'
                        variant='outlined'
                        error={errors.email || firebaseError ? true : false}
                        helperText={errors.email || firebaseError}
                        onKeyPress={e => {
                            e.key === 'Enter' && e.preventDefault();
                        }}
                        required
                    />
                    <TextField
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        name='password'
                        type='password'
                        id='password'
                        className={classes.textField}
                        inputProps={{
                            className: classes.inputStyle
                        }}
                        InputLabelProps={{
                            style: {
                                color: '#fff'
                            }
                        }}
                        label='Password'
                        margin='normal'
                        variant='outlined'
                        error={errors.password ? true : false}
                        helperText={errors.password}
                        onKeyPress={e => {
                            e.key === 'Enter' && e.preventDefault();
                        }}
                        required
                    />
                    <Button
                        variant='contained'
                        type='submit'
                        disabled={isSubmitting}
                        className={classes.loginButton}
                    >
                        {showLogin ? 'Login' : 'Register'}
                    </Button>
                    <Button
                        variant='contained'
                        className={classes.cancelButton}
                        type='button'
                        onClick={cancelLogin}
                    >
                        Cancel
                    </Button>
                    <Button
                        type='button'
                        size='small'
                        variant='outlined'
                        className={classes.changeViewButton}
                        onClick={() => setShowLogin(prevState => !prevState)}
                    >
                        {showLogin
                            ? 'Create new account'
                            : 'Already have an account'}
                    </Button>
                </form>
            </LoginContainer>
        </Container>
    );
};

export default LoginApp;

LoginApp.propTypes = {
    background: PropTypes.string.isRequired
};
