import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState
} from 'react';
import Client from 'shopify-buy';
import { useFirebaseContext } from './firebaseContext';
import { useNotificationsContext } from './notificationsContext';

const client = Client.buildClient({
    domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
    storefrontAccessToken: process.env.REACT_APP_SHOPIFY_STOREFRONT_ACCESS_TOKEN
});

const CartContext = createContext();
const DispatchCartContext = createContext();
export const CartProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [productsReviews, setProductsReviews] = useState([]);
    const [checkout, setCheckout] = useState({});
    const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);
    const { showError } = useNotificationsContext();
    const { firestore } = useFirebaseContext();

    const createCheckout = async () => {
        const newCheckout = await client.checkout.create();
        setCheckout(newCheckout);
    };

    useEffect(() => {
        createCheckout();
    }, []);

    const addToCart = useCallback(
        async (product) => {
            setIsCheckoutLoading(true);
            try {
                const lineItemsToAdd = [
                    {
                        variantId: product.variantId,
                        quantity: 1
                    }
                ];

                const newCheckout = await client.checkout.addLineItems(
                    checkout.id,
                    lineItemsToAdd
                );
                setCheckout(newCheckout);
            } catch (error) {
                showError('Error', 'Failed to add product to cart!', 500);
            } finally {
                setIsCheckoutLoading(false);
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [checkout]
    );

    const getLast5ProductsReviews = useCallback(async () => {
        try {
            await firestore.collection('products').onSnapshot((snapshot) => {
                if (!snapshot.size) {
                    return showError(
                        'Error',
                        'The "products" collection was not found in the database!',
                        404
                    );
                }

                const dbProducts = snapshot.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() };
                });

                setProductsReviews(dbProducts);
            });
        } catch (err) {
            showError(
                'Error',
                'Failed to get store products from database!',
                500
            );
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getProducts = useCallback(async () => {
        try {
            await getLast5ProductsReviews();
            const shopifyProducts = await client.product.fetchAll();
            setProducts(shopifyProducts);
        } catch (error) {
            showError(
                'Error',
                'Failed to get store products from database!',
                500
            );
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getCartProducts = useCallback(() => {
        const formatProducts = checkout?.lineItems.map((product) => ({
            id: product.id,
            variantId: product.variant.id,
            title: product.title,
            imagePreview: product.variant.image
                ? product.variant.image.src
                : 'https://via.placeholder.com/140',
            newPrice: product.variant.price
        }));

        return formatProducts;
    }, [checkout]);

    const removeFromCart = useCallback(
        async (product) => {
            setIsCheckoutLoading(true);
            try {
                const lineItemIdsToRemove = checkout.lineItems
                    .filter((item) => item.variant.id === product.variantId)
                    .map((item) => item.id);

                const newCheckout = await client.checkout.removeLineItems(
                    checkout.id,
                    lineItemIdsToRemove
                );

                setCheckout(newCheckout);
            } catch (error) {
                showError('Error', 'Failed to remove product from cart!', 500);
            } finally {
                setIsCheckoutLoading(false);
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [checkout]
    );

    const getCartTotalPrice = useCallback(() => {
        return checkout?.totalPrice;
    }, [checkout]);

    const getCartItemsNumber = useCallback(() => {
        return Object.keys(checkout).length !== 0
            ? checkout.lineItems.length
            : 0;
    }, [checkout]);

    const isProductInCart = useCallback(
        (product) => {
            return checkout?.lineItems.some(
                (item) => item.variant.id === product.variantId
            );
        },
        [checkout]
    );

    const getProductDiscount = useCallback((newPrice, oldPrice) => {
        let discount = 0;

        if (!oldPrice) {
            return discount;
        }

        const val =
            Math.abs(
                (parseFloat(oldPrice) - parseFloat(newPrice)) /
                    parseFloat(oldPrice)
            ) * 100;
        discount = Math.round(val);

        return discount;
    }, []);

    const getCheckoutUrl = useCallback(() => {
        return Object.keys(checkout).length !== 0 && checkout.webUrl;
    }, [checkout]);

    const cartValue = useMemo(() => {
        return {
            getCartTotalPrice,
            getProductDiscount,
            isProductInCart,
            products,
            getCartItemsNumber,
            getCartProducts,
            getCheckoutUrl,
            isCheckoutLoading,
            productsReviews
        };
    }, [
        getCartTotalPrice,
        getProductDiscount,
        isProductInCart,
        products,
        getCartItemsNumber,
        getCartProducts,
        getCheckoutUrl,
        isCheckoutLoading,
        productsReviews
    ]);

    const cartDispatchValue = useMemo(() => {
        return {
            addToCart,
            removeFromCart,
            getProducts
        };
    }, [addToCart, getProducts, removeFromCart]);

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
