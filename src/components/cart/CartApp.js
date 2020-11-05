import React, { lazy, Suspense, useState } from 'react';

import { useCartContext } from 'contexts';
import { useAuth } from 'hooks';
import LoginButton from 'components/auth/LoginButton';
import { CheckoutButton, ScrollbarApp, SpinnerApp } from 'components/common';
import Product from './Product';
import StoreButton from './StoreButton';
import { Container } from './style';

const AuthApp = lazy(() => import('../auth/AuthApp'));

const CartApp = ({ onClick }) => {
    const [isAuthOpen, setIsAuthOpen] = useState(false);
    const { cartState, getCartTotalPrice } = useCartContext();
    const { user } = useAuth();

    const emptryCart = () => {
        return (
            <div className='empty-cart'>
                <h4>Your cart is empty add something.</h4>
                <StoreButton onClick={() => onClick && onClick()} />
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
                            <ScrollbarApp>
                                <div className='products-container'>
                                    {renderCartProducts()}
                                </div>
                            </ScrollbarApp>
                            <div className='checkout-container'>
                                <div className='checkout-total'>
                                    <h3>Total</h3>
                                    <h3 className='checkout-value'>
                                        {getCartTotalPrice()} $
                                    </h3>
                                </div>
                                {user && <CheckoutButton />}

                                {!user && <LoginButton onClick={showAuth} />}
                            </div>
                        </>
                    )}
                </>
            )}
        </Container>
    );
};
export default CartApp;
