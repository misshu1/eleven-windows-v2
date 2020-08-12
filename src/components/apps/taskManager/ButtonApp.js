import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

import { BtnContainer } from './style';

const useStyles = makeStyles(() => ({
    btnStyle: {
        backgroundColor: 'var(--primary)',
        color: '#fff',
        cursor: 'default',
        border: 0,
        borderRadius: 3,
        '&:disabled': {
            backgroundColor: 'var(--primary)',
            filter: 'grayscale(1)',
            color: 'var(--colorDefault)',
        },
        '&:hover': {
            backgroundColor: 'var(--primaryDark)',
        },
    },
}));

const ButtonApp = (props) => {
    const { closeSelectedApp, disableBtn } = props;
    const classes = useStyles();

    return (
        <BtnContainer>
            <Button
                variant='contained'
                size='small'
                className={classes.btnStyle}
                onClick={closeSelectedApp}
                disabled={disableBtn}
                aria-label='close folder app'
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
