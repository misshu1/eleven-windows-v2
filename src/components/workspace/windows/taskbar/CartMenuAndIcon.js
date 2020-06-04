import React, { lazy, Suspense, useRef } from 'react';

import useOnClickOutside from '../../../../hooks/useOnClickOutside';
import SpinnerGlobalApp from '../../../style/SpinnerGlobalApp';
import { useCartIconContext } from './contexts/cartIconContext';
import { CartIconApp } from './icons/cart/CartIconApp';

const CartApp = lazy(() => import('./apps/cart/CartApp'));

const CartMenuAndIcon = () => {
    const { isCartOpen, closeCart } = useCartIconContext();
    const cartMenuRef = useRef(null);
    const cartIconRef = useRef(null);

    useOnClickOutside(
        [cartMenuRef, cartIconRef],
        () => isCartOpen && closeCart()
    );

    return (
        <>
            <CartIconApp cartIconRef={cartIconRef} />
            <Suspense fallback={<SpinnerGlobalApp delay={200} />}>
                {isCartOpen && <CartApp cartMenuRef={cartMenuRef} />}
            </Suspense>
        </>
    );
};

export default CartMenuAndIcon;
