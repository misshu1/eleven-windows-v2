import React from 'react';
import ReactDOM from 'react-dom';

import { Container } from './style';

const NotFound = () => {
    return ReactDOM.createPortal(
        <Container>
            <h1>This is 404 Page, Needs some design work</h1>
        </Container>,
        document.getElementById('pages')
    );
};

export default NotFound;
