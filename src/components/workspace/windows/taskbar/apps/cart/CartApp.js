import React from 'react';
import ReactDOM from 'react-dom';

import { Container } from './style';

const CartApp = ({ cartMenuRef }) => {
    return ReactDOM.createPortal(
        <Container ref={cartMenuRef}>Cart</Container>,
        document.querySelector('#desktop')
    );
};
export default CartApp;
