import React, { lazy, Suspense, useCallback, useRef, useState } from 'react';

import { useOnClickOutside } from 'hooks';
import { SpinnerApp } from 'components/common';
import { CartIconApp } from './icons/cart/CartIconApp';

const CartWindowsApp = lazy(() => import('./apps/cart/CartWindowsApp'));

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
            <Suspense fallback={<SpinnerApp global delay={200} />}>
                {isCartOpen && (
                    <CartWindowsApp
                        cartMenuRef={cartMenuRef}
                        closeCart={closeCart}
                    />
                )}
            </Suspense>
        </>
    );
};

export default CartMenuAndIcon;
