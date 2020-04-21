import React from 'react';
import ReactDOM from 'react-dom';

import { useCartContext } from '../../contexts/cartContext';
import { Container } from './style';

const CartApp = ({ cartMenuRef }) => {
    const { isCartOpen } = useCartContext();

    return ReactDOM.createPortal(
        <>{isCartOpen && <Container ref={cartMenuRef}>Cart</Container>}</>,
        document.querySelector('#desktop')
    );
};
export default CartApp;
