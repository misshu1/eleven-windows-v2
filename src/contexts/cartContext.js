import React, { createContext, useCallback, useContext, useMemo, useReducer } from 'react';

const CART_ACTIONS = {
    add: 'ADD',
    remove: 'REMOVE',
    purchase: 'PURCHASE',
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case CART_ACTIONS.add: {
            const productExistsInCart = state.some(
                (item) => item.id === action.payload.id
            );

            if (!productExistsInCart) {
                return [...state, action.payload];
            } else {
                return state;
            }
        }

        case CART_ACTIONS.remove: {
            return state.filter((item) => item.id !== action.payload);
        }

        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
};

const CartContext = createContext();
const DispatchCartContext = createContext();
export const CartProvider = ({ children }) => {
    const [cartState, cartDispatch] = useReducer(cartReducer, []);

    const addToCart = (product) => {
        cartDispatch({
            type: CART_ACTIONS.add,
            payload: product,
        });
    };

    const removeFromCart = (productId) => {
        cartDispatch({
            type: CART_ACTIONS.remove,
            payload: productId,
        });
    };

    const getCartTotalPrice = useCallback(() => {
        const total = cartState.reduce((a, b) => a + b.newPrice, 0);
        return Math.round((total + Number.EPSILON) * 100) / 100;
    }, [cartState]);

    const isProductInCart = useCallback(
        (productId) => {
            return cartState.some((product) => product.id === productId);
        },
        [cartState]
    );

    const getProductDiscount = useCallback((newPrice, oldPrice) => {
        let discount = 0;

        if (!oldPrice) {
            return discount;
        }

        const val = (newPrice / oldPrice) * 100;
        discount = Math.round(val);

        return discount;
    }, []);

    const cartValue = useMemo(() => {
        return {
            cartState,
            getCartTotalPrice,
            getProductDiscount,
            isProductInCart,
        };
    }, [cartState, getCartTotalPrice, getProductDiscount, isProductInCart]);

    const cartDispatchValue = useMemo(() => {
        return {
            addToCart,
            removeFromCart,
        };
    }, []);

    return (
        <CartContext.Provider value={cartValue}>
            <DispatchCartContext.Provider value={cartDispatchValue}>
                {children}
            </DispatchCartContext.Provider>
        </CartContext.Provider>
    );
};

export const useCartContext = () => {
    return useContext(CartContext);
};

export const useDispatchCartContext = () => {
    return useContext(DispatchCartContext);
};
