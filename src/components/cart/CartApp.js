import React, { lazy, Suspense, useRef, useState } from 'react';
import Scrollbar from 'react-scrollbars-custom';

import { useCartContext } from '../../contexts/cartContext';
import { useAuth } from '../../hooks/useAuth';
import LoginButton from '../auth/LoginButton';
import SpinnerApp from '../style/SpinnerApp';
import CheckoutButton from './CheckoutButton';
import Product from './Product';
import StoreButton from './StoreButton';
import { Container } from './style';

const AuthApp = lazy(() => import('../auth/AuthApp'));

const CartApp = ({ closeCart }) => {
    const [isAuthOpen, setIsAuthOpen] = useState(false);
    const { cartState, getCartTotalPrice } = useCartContext();
    const auth = useAuth();

    const emptryCart = () => {
        return (
            <div className='empty-cart'>
                <h4>Your cart is empty add something.</h4>
                <StoreButton onClick={closeCart} />
            </div>
        );
    };

    const renderCartProducts = () => {
        return cartState.map((product) => (
            <Product product={product} key={product.id} />
        ));
    };

    const showAuth = () => {
        setIsAuthOpen(true);
    };

    const hideAuth = () => {
        setIsAuthOpen(false);
    };

    return (
        <Container>
            {cartState.length === 0 && emptryCart()}
            {cartState.length !== 0 && (
                <>
                    {isAuthOpen && (
                        <Suspense fallback={<SpinnerApp delay={200} />}>
                            <AuthApp onCancel={hideAuth} />
                        </Suspense>
                    )}
                    {!isAuthOpen && (
                        <>
                            <div className='products-container'>
                                <Scrollbar>{renderCartProducts()}</Scrollbar>
                            </div>
                            <div className='checkout-container'>
                                <div className='checkout-total'>
                                    <h3>Total</h3>
                                    <h3 className='checkout-value'>
                                        {getCartTotalPrice()} $
                                    </h3>
                                </div>
                                {auth.user && <CheckoutButton />}

                                {!auth.user && (
                                    <LoginButton onClick={showAuth} />
                                )}
                            </div>
                        </>
                    )}
                </>
            )}
        </Container>
    );
};
export default CartApp;
