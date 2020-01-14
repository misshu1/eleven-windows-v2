import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from './style';

const CartApp = () => {
    return ReactDOM.createPortal(
        <Container>
            <div style={{ height: '10rem' }}></div>
        </Container>,
        document.querySelector('#desktop')
    );
};
export default CartApp;
