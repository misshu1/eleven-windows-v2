import React, { createContext, useCallback, useContext, useState } from 'react';

const CartContext = createContext();
export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = useCallback(() => {
        setIsCartOpen((prevState) => !prevState);
    }, [setIsCartOpen]);

    const closeCart = useCallback(() => {
        setIsCartOpen(false);
    }, [setIsCartOpen]);

    return (
        <CartContext.Provider
            value={{
                toggleCart,
                closeCart,
                isCartOpen,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => {
    return useContext(CartContext);
};
