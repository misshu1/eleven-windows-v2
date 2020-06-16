import React, { lazy, Suspense, useCallback, useRef, useState } from 'react';

import useOnClickOutside from '../../../../hooks/useOnClickOutside';
import SpinnerGlobalApp from '../../../style/SpinnerGlobalApp';
import { CartIconApp } from './icons/cart/CartIconApp';

const CartApp = lazy(() => import('./apps/cart/CartApp'));

const CartMenuAndIcon = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const cartMenuRef = useRef(null);
    const cartIconRef = useRef(null);

    useOnClickOutside(
        [cartMenuRef, cartIconRef],
        () => isCartOpen && closeCart()
    );

    const toggleCart = useCallback(() => {
        setIsCartOpen((prevState) => !prevState);
    }, [setIsCartOpen]);

    const closeCart = useCallback(() => {
        setIsCartOpen(false);
    }, [setIsCartOpen]);

    return (
        <>
            <CartIconApp
                cartIconRef={cartIconRef}
                toggleCart={toggleCart}
                isCartOpen={isCartOpen}
            />
            <Suspense fallback={<SpinnerGlobalApp delay={200} />}>
                {isCartOpen && (
                    <CartApp cartMenuRef={cartMenuRef} closeCart={closeCart} />
                )}
            </Suspense>
        </>
    );
};

export default CartMenuAndIcon;
