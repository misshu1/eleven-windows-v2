import React from 'react';

import CartApp from 'components/cart/CartApp';
import { useSideMenuContext } from '../../../contexts/sideMenuContext';
import { Container } from './style';

const CartPreviewApp = () => {
    const { closeSideMenu } = useSideMenuContext();
    return (
        <Container>
            <CartApp onClick={closeSideMenu} />
        </Container>
    );
};

export default CartPreviewApp;
