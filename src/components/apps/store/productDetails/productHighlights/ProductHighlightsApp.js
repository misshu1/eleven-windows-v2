import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';
import React, { useEffect, useState } from 'react';

import CartIcon from '../../../../../assets/images/icons/CartIcon';
import { useCartContext, useDispatchCartContext } from '../../../../../contexts/cartContext';
import { Container } from './style';

const useStyles = makeStyles({
    cartButton: {
        position: 'relative',
        overflow: 'hidden',
        paddingLeft: '3rem',
        cursor: 'default',
        backgroundColor: 'var(--primary)',
        color: '#fff',

        '&:disabled': {
            filter: 'grayscale(1)',
            color: '#d6d8de',
        },

        '&:hover': {
            backgroundColor: 'var(--primaryDark)',
        },
    },
    ratingColorEmpty: {
        color: 'var(--grey60)',
    },
    ratingColor: {
        color: 'var(--primary)',
    },
});

function ProductHighlightsApp({ product }) {
    const [discountVal, setDiscountVal] = useState(0);
    const { imagePreview, newPrice, oldPrice, ratings, title } = product;
    const { addToCart } = useDispatchCartContext();
    const { getProductDiscount, isProductInCart } = useCartContext();
    const classes = useStyles();

    useEffect(() => {
        const discount = getProductDiscount(newPrice, oldPrice);
        setDiscountVal(discount);
    }, [getProductDiscount, newPrice, oldPrice, setDiscountVal]);

    return (
        <Container>
            <h2 className='product-title'>{title}</h2>
            <div className='product-rating'>
                <Rating
                    classes={{
                        iconEmpty: classes.ratingColorEmpty,
                        iconFilled: classes.ratingColor,
                    }}
                    // TODO: Update rating
                    value={5}
                    readOnly
                />
                {/* Average rating */}
                <span className='product-average-rating'>4.8</span>
            </div>
            <p className='product-reviews-count'>2 reviews</p>

            <div className='price-container'>
                <p className='product-old-price'>
                    {!!oldPrice && `$${oldPrice}`}
                </p>
                {!!oldPrice && (
                    <span className='product-discount'>{`( -${discountVal}% )`}</span>
                )}
                <p className='product-new-price'>
                    <strong>{!!newPrice && `$${newPrice}`}</strong>
                </p>
            </div>

            <Button
                className='product-add-to-cart'
                aria-label='add product to cart'
                classes={{ root: classes.cartButton }}
                onClick={() => {
                    addToCart(product);
                }}
                disabled={isProductInCart(product.id)}
                fullWidth
            >
                <div className='svg-bg'>
                    <CartIcon width='1.5rem' height='1.5rem' />
                </div>
                {isProductInCart(product.id) ? 'Added' : 'Add to cart'}
            </Button>
        </Container>
    );
}

export default ProductHighlightsApp;
