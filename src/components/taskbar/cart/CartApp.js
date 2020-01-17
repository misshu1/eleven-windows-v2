import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from './style';

const CartApp = () => {
    return ReactDOM.createPortal(
        <Container>cart</Container>,
        document.querySelector('#desktop')
    );
};
export default CartApp;
