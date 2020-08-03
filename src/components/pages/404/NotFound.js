import React from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';

import { Container } from './style';

const NotFound = () => {
    const navigate = useNavigate();

    const goHome = () => {
        navigate('/');
    };
    return ReactDOM.createPortal(
        <Container>
            <h1>This is 404 Page, Needs some design work</h1>
            <button onClick={goHome}>Home</button>
        </Container>,
        document.getElementById('desktop')
    );
};

export default NotFound;
