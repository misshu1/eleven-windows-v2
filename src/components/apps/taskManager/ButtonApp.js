import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { BtnContainer } from './style';
import { ThemeContext } from '../../../contexts/themeContext';

const useStyles = makeStyles(() => ({
    btnStyle: theme => ({
        backgroundColor: theme.accentBg,
        color: '#fff',
        cursor: 'default',
        border: 0,
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

const ButtonApp = props => {
    const { closeSelectedApp, disableBtn } = props;
    const { theme } = useContext(ThemeContext);
    const classes = useStyles(theme);

    return (
        <BtnContainer>
            <Button
                variant='contained'
                size='small'
                className={classes.btnStyle}
                onClick={closeSelectedApp}
                disabled={disableBtn}
            >
                End Task
            </Button>
        </BtnContainer>
    );
};

export default ButtonApp;

ButtonApp.propTypes = {
    closeSelectedApp: PropTypes.func.isRequired,
    disableBtn: PropTypes.bool.isRequired
};
