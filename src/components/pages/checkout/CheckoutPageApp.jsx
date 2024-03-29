import Backdrop from '@material-ui/core/Backdrop';
import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';

// import { useCartContext } from 'contexts';
import { useMediaQuery } from 'hooks';
import { modalPageAnimation } from 'components/animations';
import Product from 'components/cart/Product';
import StoreButton from 'components/cart/StoreButton';
import { ROUTES, ScrollbarApp } from 'components/common';
import CheckoutApp from './CheckoutApp';
import { CheckoutContainer, Container } from './style';
import { zIndex } from 'components/theme/zIndex';

const CheckoutPageApp = () => {
    const [showCheckout] = useState(true);
    // const {
    //     getCartProducts,
    //     getCartTotalPrice,
    //     getCartItemsNumber
    // } = useCartContext();
    const navigate = useNavigate();

    // const { isUserLoggedIn } = useAuth();
    // const { closeAllFolders } = useDispatchFolderContext();
    const isMobile = useMediaQuery('(max-width: 450px)');
    // const location = useLocation();

    // TODO Make this route private (require login)
    // TODO create a separate Checkout component similar to AuthApp
    // TOTO Disable all buttons when submitting purchase, even the close checkout button
    // TODO Create 'users' collection in firebase, and get user purchase history
    //  and all other information like github username, after login

    const renderCartProducts = () => {
        return (
            <ScrollbarApp>
                <div className='products-container'>
                    {/* {getCartProducts().map((product) => (
                        <Product product={product} key={product.id} />
                    ))} */}
                </div>
            </ScrollbarApp>
        );
    };

    const emptryCart = () => {
        return (
            <div className='empty-cart'>
                <h4>Your cart is empty add something.</h4>
                <StoreButton onClick={() => navigate(ROUTES.store)} />
            </div>
        );
    };

    return ReactDOM.createPortal(
        <Container>
            <Backdrop
                open={showCheckout}
                style={{
                    zIndex: zIndex.page.backdrop,
                    background: 'rgba(0,0,0,0.35)',
                    backdropFilter: 'blur(10px)'
                }}
            />
            <AnimatePresence>
                {showCheckout && (
                    <CheckoutContainer
                        key='modalPageAnimation'
                        initial='initial'
                        animate='open'
                        exit='close'
                        variants={!isMobile && modalPageAnimation}
                    >
                        <div className='container'>
                            <div className='left'>
                                {/* {getCartItemsNumber() === 0 && emptryCart()}
                                {getCartItemsNumber() !== 0 &&
                                    renderCartProducts()} */}
                            </div>
                            <div className='right'>
                                <CheckoutApp />
                            </div>
                        </div>
                    </CheckoutContainer>
                )}
            </AnimatePresence>
        </Container>,
        document.getElementById('desktop')
    );
};

export default CheckoutPageApp;
