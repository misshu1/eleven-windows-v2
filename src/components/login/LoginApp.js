import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container } from './style';

const LoginApp = props => {
    const [animateInOut, setAnimateInOut] = useState(true);

    const handleAnimationOut = () => {
        setAnimateInOut(false);
        setTimeout(() => {
            props.history.push('/');
        }, 500);
    };

    return (
        <Container background={props.background} animateInOut={animateInOut}>
            <button onClick={handleAnimationOut}>go home</button>
        </Container>
    );
};

export default withRouter(LoginApp);

LoginApp.propTypes = {
    background: PropTypes.string.isRequired
};
