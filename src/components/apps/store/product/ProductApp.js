import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';
import React, { useCallback, useEffect, useState } from 'react';

import CartIcon from '../../../../assets/images/icons/CartIcon';
import { useCartContext, useDispatchCartContext } from '../../../../contexts/cartContext';
import { folderPages } from '../../../folder/folderPages';
import { Card } from './style';

// const productSchema = {
//     title: String,
//     imagePreview: String,
//     type: String, // 'product' || 'donation'
//     newPrice: Number,
//     oldPrice: Number || null
// }

const useStyles = makeStyles({
    cartButton: {
        position: 'relative',
        overflow: 'hidden',
        paddingLeft: '3rem',
        cursor: 'default',
        backgroundColor: 'var(--primary)',
        color: '#fff',

        '&:disabled': {
            backgroundColor: 'var(--primary) !important',
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

const ProductApp = ({ product, setSelectedProduct, setPage }) => {
    const { imagePreview, newPrice, oldPrice, reviews, title } = product;
    const { addToCart } = useDispatchCartContext();
    const { getProductDiscount, isProductInCart } = useCartContext();
    const [discountVal, setDiscountVal] = useState(0);
    const [ratingVal, setRatingVal] = useState(0);
    const classes = useStyles();

    const selectProduct = useCallback(() => {
        setSelectedProduct(product);
        setPage(folderPages.level_2);
    }, [product, setPage, setSelectedProduct]);

    useEffect(() => {
        const discount = getProductDiscount(newPrice, oldPrice);
        setDiscountVal(discount);
    }, [getProductDiscount, newPrice, oldPrice, setDiscountVal]);

    useEffect(() => {
        if (reviews) {
            const ratings = reviews.ratings.map((review) => review.rating);
            const sumOfRatings = ratings.reduce((a, b) => a + b, 0);
            const rating = sumOfRatings / ratings.length;
            setRatingVal(rating);
        }
    }, [reviews]);

    return (
        <Card type={product.type}>
            {oldPrice && (
                <div className='product-discount'>-{discountVal}%</div>
            )}
            <div className='product-img-container' onClick={selectProduct}>
                <img src={imagePreview} alt={title} />
            </div>
            <h3 className='product-name' onClick={selectProduct}>
                {title}
            </h3>
            <div className='product-rating' onClick={selectProduct}>
                {reviews && (
                    <Rating
                        classes={{
                            iconEmpty: classes.ratingColorEmpty,
                            iconFilled: classes.ratingColor,
                        }}
                        value={ratingVal}
                        readOnly
                    />
                )}
            </div>
            <p className='product-old-price' onClick={selectProduct}>
                {!!oldPrice && `$${oldPrice}`}
            </p>
            <p className='product-new-price' onClick={selectProduct}>
                <strong>{!!newPrice && `$${newPrice}`}</strong>
            </p>
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
        </Card>
    );
};

export default ProductApp;
