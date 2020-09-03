import Backdrop from '@material-ui/core/Backdrop';
import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import useMediaQuery from '../../../hooks/useMediaQuery';
import { modalPageAnimation } from '../../animations';
import { CheckoutContainer, Container } from './style';

const CheckoutApp = () => {
    const [showCheckout] = useState(true);
    // const { isUserLoggedIn } = useAuth();
    // const { closeAllFolders } = useDispatchFolderContext();
    const isMobile = useMediaQuery('(max-width: 450px)');
    // const location = useLocation();

    // TODO if user is not logged in show login component (not redirect)
    // TODO create a separate Checkout component similar to AuthApp
    // TOTO Disable all buttons when submitting purchase, even the close checkout button

    return ReactDOM.createPortal(
        <Container>
            <Backdrop
                open={showCheckout}
                style={{
                    zIndex: 50,
                    background: 'rgba(0,0,0,0.35)',
                    backdropFilter: 'blur(10px)',
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
                        ceva aici, for now
                    </CheckoutContainer>
                )}
            </AnimatePresence>
        </Container>,
        document.getElementById('desktop')
    );
};

export default CheckoutApp;
