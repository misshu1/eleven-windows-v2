import Badge from '@material-ui/core/Badge';
import Tooltip from '@material-ui/core/Tooltip';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { CartIcon } from 'assets/images/icons';
import { useCartContext } from 'contexts';
import { Container } from './style';

export const CartIconApp = ({ cartIconRef, toggleCart, isCartOpen }) => {
    const { cartState } = useCartContext();
    const { t } = useTranslation();

    return (
        <Tooltip title={t('tooltip.cart')} placement='top' enterDelay={500}>
            <Container
                open={isCartOpen}
                tabIndex='0'
                onClick={toggleCart}
                ref={cartIconRef}
            >
                <Badge
                    badgeContent={cartState.length}
                    variant='dot'
                    color='error'
                    anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                >
                    <CartIcon
                        width='1.7rem'
                        height='1.7rem'
                        color='var(--primary)'
                    />
                </Badge>
            </Container>
        </Tooltip>
    );
};