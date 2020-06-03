import React, { createContext, useContext, useReducer } from 'react';

const CART_ACTIONS = {
    add: 'ADD',
    remove: 'REMOVE',
    purchase: 'PURCHASE',
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case CART_ACTIONS.add:
            const productExistsInCart = state.some(
                (item) => item.id === action.payload.id
            );

            if (!productExistsInCart) {
                return [...state, action.payload];
            } else {
                return state;
            }

        case CART_ACTIONS.remove:
            return state.filter((item) => item.id !== action.payload.id);

        default:
            return state;
        // throw new Error(`Unhandled action type: ${action.type}`);
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
        console.log(cartState);
    };

    const getCartTotalPrice = () => {
        const total = cartState.reduce((a, b) => a + b.newPrice, 0);
        return Math.round((total + Number.EPSILON) * 100) / 100;
    };

    return (
        <CartContext.Provider
            value={{
                cartState,
                getCartTotalPrice,
            }}
        >
            <DispatchCartContext.Provider
                value={{
                    addToCart,
                }}
            >
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
