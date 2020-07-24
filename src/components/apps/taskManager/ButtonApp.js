import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

import { useSettingsContext } from '../../../contexts/settingsContext';
import { BtnContainer } from './style';

const useStyles = makeStyles(() => ({
    btnStyle: (theme) => ({
        backgroundColor: theme().accentBg,
        color: '#fff',
        cursor: 'default',
        border: 0,
        borderRadius: 3,
        '&:disabled': {
            color: '#e3e3e3',
            backgroundColor: theme().disableBg,
        },
        '&:hover': {
            backgroundColor: theme().accentBg,
        },
    }),
}));

const ButtonApp = (props) => {
    const { closeSelectedApp, disableBtn } = props;
    const { getTheme } = useSettingsContext();
    const classes = useStyles(getTheme);

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
    disableBtn: PropTypes.bool.isRequired,
};
