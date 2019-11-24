import React, { useState, useContext } from 'react';
import { Container, LoginContainer } from './style';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../contexts/themeContext';

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
    button: theme => ({
        backgroundColor: theme.accentBg,
        color: '#fff',
        cursor: 'default',
        border: 0,
        margin: '.5rem',
        borderRadius: 3,
        '&:disabled': {
            color: '#e3e3e3',
            backgroundColor: theme.disableBg
        },
        '&:hover': {
            backgroundColor: theme.accentBg
        }
    })
}));

const LoginApp = props => {
    const { theme } = useContext(ThemeContext);
    const classes = useStyles(theme);
    const [animateInOut, setAnimateInOut] = useState(true);

    const handleAnimationOut = e => {
        e.preventDefault();
        setAnimateInOut(false);

        // TODO calculate response time from authentication plus remaining delay to result maximum 800ms
        setTimeout(() => {
            props.history.push('/');
        }, 800);
    };

    return (
        <Container background={props.background} animateInOut={animateInOut}>
            <LoginContainer animateInOut={animateInOut}>
                <form
                    className={classes.container}
                    noValidate
                    autoComplete='off'
                >
                    <div>
                        <TextField
                            id='outlined-basic'
                            className={classes.textField}
                            inputProps={{
                                className: classes.inputStyle
                            }}
                            InputLabelProps={{
                                style: {
                                    color: '#fff'
                                }
                            }}
                            label='Username'
                            margin='normal'
                            variant='outlined'
                        />
                    </div>
                    <div>
                        <TextField
                            id='outlined-basic'
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
                        />
                    </div>
                    <Button
                        variant='contained'
                        color='primary'
                        className={classes.button}
                        onClick={handleAnimationOut}
                    >
                        Login
                    </Button>
                </form>
            </LoginContainer>
        </Container>
    );
};

export default withRouter(LoginApp);

LoginApp.propTypes = {
    background: PropTypes.string.isRequired
};
