import React from 'react';
import ReactDOM from 'react-dom';

import CartApp from '../../../../../cart/CartApp';
import { Container } from './style';

const CartMobileApp = ({ cartMenuRef, closeCart }) => {
    return ReactDOM.createPortal(
        <Container ref={cartMenuRef}>
            <CartApp onClick={closeCart} />
        </Container>,
        document.getElementById('desktop')
    );
};
export default CartMobileApp;
