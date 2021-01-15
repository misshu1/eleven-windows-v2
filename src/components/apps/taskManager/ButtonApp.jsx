import { PrimaryButton } from 'components/common/Buttons';
import PropTypes from 'prop-types';
import React from 'react';

import { BtnContainer } from './style';

const ButtonApp = (props) => {
    const { closeSelectedApp, disableBtn } = props;

    return (
        <BtnContainer>
            <PrimaryButton
                variant='contained'
                size='small'
                onClick={closeSelectedApp}
                disabled={disableBtn}
                aria-label='close folder app'
            >
                End Task
            </PrimaryButton>
        </BtnContainer>
    );
};

export default ButtonApp;

ButtonApp.propTypes = {
    closeSelectedApp: PropTypes.func.isRequired,
    disableBtn: PropTypes.bool.isRequired
};
