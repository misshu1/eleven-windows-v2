import React, { createContext, useCallback, useContext, useState } from 'react';

const CartIconContext = createContext();
export const CartIconProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = useCallback(() => {
        setIsCartOpen((prevState) => !prevState);
    }, [setIsCartOpen]);

    const closeCart = useCallback(() => {
        setIsCartOpen(false);
    }, [setIsCartOpen]);

    return (
        <CartIconContext.Provider
            value={{
                toggleCart,
                closeCart,
                isCartOpen,
            }}
        >
            {children}
        </CartIconContext.Provider>
    );
};

export const useCartIconContext = () => {
    return useContext(CartIconContext);
};
