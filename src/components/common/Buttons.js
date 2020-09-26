import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import CartIcon from '../../assets/images/icons/CartIcon';
import { useCartContext } from '../../contexts/cartContext';

const useStyles = makeStyles({
    btnStyle: {
        position: 'relative',
        overflow: 'hidden',
        paddingLeft: '3rem',
        cursor: 'default',
        backgroundColor: 'var(--primary)',
        color: '#fff',

        '&:hover': {
            backgroundColor: 'var(--primaryDark)',
        },

        '&:disabled': {
            backgroundColor: 'var(--primary) !important',
            filter: 'grayscale(1)',
            color: '#d6d8de',
        },
    },
    icon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: '0',
        top: '0',
        bottom: '0',
        width: '2.5rem',
        transition: 'background 0.2s ease-in-out',
        borderTopRightRadius: '0 0',
        borderBottomRightRadius: '37% 100%',
        background: 'var(--secondary)',
    },
});

export const CheckoutButton = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    return (
        <Button
            aria-label='checkout'
            classes={{ root: classes.btnStyle }}
            style={{ flex: 1 }}
            fullWidth
            onClick={() => navigate('/checkout')}
        >
            <div className={classes.icon}>
                <FontAwesomeIcon
                    icon={['fas', 'angle-double-right']}
                    size='lg'
                />
            </div>
            Checkout
        </Button>
    );
};

export const AddToCartButton = ({ onClick, productId }) => {
    const { isProductInCart } = useCartContext();
    const { t } = useTranslation();
    const classes = useStyles();

    return (
        <Button
            aria-label='add product to cart'
            classes={{ root: classes.btnStyle }}
            disabled={isProductInCart(productId)}
            onClick={onClick}
            fullWidth
        >
            <div className={classes.icon}>
                <CartIcon width='1.5rem' height='1.5rem' />
            </div>
            {isProductInCart(productId)
                ? t('store.addedToCart')
                : t('store.addToCart')}
        </Button>
    );
};
