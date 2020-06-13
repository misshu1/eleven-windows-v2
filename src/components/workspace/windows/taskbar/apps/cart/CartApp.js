import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import React, { lazy, Suspense, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import Scrollbar from 'react-scrollbars-custom';

import StoreIcon from '../../../../../../assets/images/icons/StoreIcon';
import { useCartContext, useDispatchCartContext } from '../../../../../../contexts/cartContext';
import { ICON_LOCATION, useDispatchFolderContext, useFolderContext } from '../../../../../../contexts/folderContext';
import { useSettingsContext } from '../../../../../../contexts/settingsContext';
import { useAuth } from '../../../../../../hooks/useAuth';
import SpinnerApp from '../../../../../style/SpinnerApp';
import { useCartIconContext } from '../../contexts/cartIconContext';
import { Container, Product } from './style';

const AuthApp = lazy(() => import('../../../../../auth/AuthApp'));

const useStyles = makeStyles({
    btnStyle: (theme) => ({
        position: 'relative',
        overflow: 'hidden',
        paddingLeft: '3rem',
        cursor: 'default',
        backgroundColor: theme.material.primary.main,
        color: theme.material.primary.contrast.darker,

        '&:hover': {
            backgroundColor: theme.material.primary.darker,
        },
    }),
});

const CartProduct = ({ product }) => {
    const { removeFromCart } = useDispatchCartContext();

    return (
        <Product type={product.type}>
            <div className='img-container'>
                <img src={product.imagePreview} alt='product.title' />
            </div>
            <div className='product-info'>
                <h4 className='title'>{product.title}</h4>
                <p className='price'>
                    <strong>{product.newPrice} $</strong>
                </p>
            </div>
            <div
                className='remove-product'
                onClick={() => removeFromCart(product.id)}
            >
                <FontAwesomeIcon
                    icon={['fas', 'trash-alt']}
                    size='lg'
                    className='icon'
                />
            </div>
        </Product>
    );
};

const CartApp = ({ cartMenuRef }) => {
    const [isAuthOpen, setIsAuthOpen] = useState(false);
    const { openFolder, activeFolder, minimizeUp } = useDispatchFolderContext();
    const { cartState, getCartTotalPrice } = useCartContext();
    const { closeCart } = useCartIconContext();
    const { folderState } = useFolderContext();
    const { theme } = useSettingsContext();
    const apps = useRef(folderState.apps);
    const classes = useStyles(theme);
    const auth = useAuth();

    const open = useRef((appId) => openFolder(appId));
    const active = useRef((appId) => activeFolder(appId));
    const minimize = useRef((appId) => minimizeUp(appId));

    const storeBtn = () => {
        const start = (appId) => {
            open.current(appId);
            active.current(appId);
            minimize.current(appId);
            closeCart();
        };

        return apps.current.map((app) => {
            return app.iconLocation.map(
                (location) =>
                    location === ICON_LOCATION.cart.cartApp && (
                        <Button
                            classes={{ root: classes.btnStyle }}
                            onClick={() => start(app.id)}
                            key={app.id}
                        >
                            <div className='icon'>
                                <StoreIcon width='1.5rem' height='1.5rem' />
                            </div>
                            Go to {app.appName}
                        </Button>
                    )
            );
        });
    };

    const emptryCart = () => {
        return (
            <div className='empty-cart'>
                <h4>Your cart is empty add something.</h4>
                {storeBtn()}
            </div>
        );
    };

    const renderCartProducts = () => {
        return cartState.map((product) => (
            <CartProduct product={product} key={product.id} />
        ));
    };

    const showAuth = () => {
        setIsAuthOpen(true);
    };

    const hideAuth = () => {
        setIsAuthOpen(false);
    };

    return ReactDOM.createPortal(
        <Container ref={cartMenuRef}>
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
                                <div className='checkout-btn'>
                                    {auth.user && (
                                        <Button
                                            classes={{ root: classes.btnStyle }}
                                            fullWidth
                                        >
                                            <div className='icon'>
                                                <FontAwesomeIcon
                                                    icon={[
                                                        'fas',
                                                        'angle-double-right',
                                                    ]}
                                                    size='lg'
                                                />
                                            </div>
                                            Checkout
                                        </Button>
                                    )}

                                    {!auth.user && (
                                        <Button
                                            classes={{ root: classes.btnStyle }}
                                            fullWidth
                                            onClick={showAuth}
                                        >
                                            <div className='icon'>
                                                <FontAwesomeIcon
                                                    icon={[
                                                        'fas',
                                                        'sign-in-alt',
                                                    ]}
                                                    size='lg'
                                                />
                                            </div>
                                            Login
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </>
                    )}
                </>
            )}
        </Container>,
        document.getElementById('desktop')
    );
};
export default CartApp;
