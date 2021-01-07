import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { CartIcon } from 'assets/images/icons';
import { useCartContext, useDispatchCartContext } from 'contexts';

const useStyles = makeStyles({
    btnStyle: {
        position: 'relative',
        overflow: 'hidden',
        paddingLeft: '3rem',
        cursor: 'default',
        backgroundColor: 'var(--primary)',
        color: '#fff',

        '&:hover': {
            backgroundColor: 'var(--primaryDark)'
        },

        '&:disabled': {
            backgroundColor: 'var(--primary) !important',
            filter: 'grayscale(1)',
            color: '#d6d8de'
        }
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
        background: 'var(--secondary)'
    }
});

export const CheckoutButton = () => {
    const { getCheckoutUrl } = useCartContext();
    const classes = useStyles();

    return (
        <Button
            aria-label='checkout'
            classes={{ root: classes.btnStyle }}
            style={{ flex: 1 }}
            fullWidth
            href={getCheckoutUrl()}
            target='_blank'
            rel='noreferrer'
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

export const AddToCartButton = ({ product }) => {
    const [unmounted, setUnmounted] = useState(false);
    const [loading, setLoading] = useState(false);
    const { isProductInCart } = useCartContext();
    const { addToCart } = useDispatchCartContext();
    const { t } = useTranslation();
    const classes = useStyles();

    useEffect(() => {
        return () => {
            setUnmounted(true);
        };
    }, []);

    const handleAddToCart = () => {
        setLoading(true);
        addToCart(product).finally(() => {
            !unmounted && setLoading(false);
        });
    };

    return (
        <Button
            aria-label='add product to cart'
            classes={{ root: classes.btnStyle }}
            disabled={isProductInCart(product) || loading}
            onClick={handleAddToCart}
            fullWidth
        >
            <div className={classes.icon}>
                {!loading && <CartIcon width='1.5rem' height='1.5rem' />}
                {loading && (
                    <FontAwesomeIcon
                        icon={['fas', 'spinner']}
                        pulse
                        size='lg'
                    />
                )}
            </div>
            {isProductInCart(product)
                ? t('store.addedToCart')
                : t('store.addToCart')}
        </Button>
    );
};
