import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';
import React, { useEffect, useState } from 'react';

import CartIcon from '../../../../assets/images/icons/CartIcon';
import { useDispatchCartContext } from '../../../../contexts/cartContext';
import { useSettingsContext } from '../../../../contexts/settingsContext';
import { Card } from './style';

// const productSchema = {
//     title: String,
//     description: String,
//     imagePreview: String,
//     images: Array<String>,
//     type: String, // 'product' || 'donation'
//     newPrice: Number,
//     oldPrice: Number || null
// }

const useStyles = makeStyles({
    cartButton: (theme) => ({
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
    ratingColor: (theme) => ({
        color: theme.ratingColorEmpty,
    }),
});

const ProductApp = ({ product }) => {
    const { imagePreview, newPrice, oldPrice, ratings, title } = product;
    const [discountVal, setDiscountVal] = useState(0);
    const [ratingVal, setRatingVal] = useState(0);
    const { theme } = useSettingsContext();
    const classes = useStyles(theme);
    const { addToCart } = useDispatchCartContext();

    useEffect(() => {
        if (oldPrice) {
            const val = (newPrice / oldPrice) * 100;
            setDiscountVal(Math.round(val));
        }
    }, [newPrice, oldPrice, setDiscountVal]);

    useEffect(() => {
        if (ratings) {
            const sumOfRatings = ratings.reduce((a, b) => a + b, 0);
            const rating = sumOfRatings / ratings.length;
            setRatingVal(rating);
        }
    }, [ratings]);

    return (
        <Card type={product.type}>
            {oldPrice && (
                <div className='product-discount'>-{discountVal}%</div>
            )}
            <div className='product-img-container'>
                <img src={imagePreview} alt={title} />
            </div>
            <h3 className='product-name'>{title}</h3>
            <div className='product-rating'>
                {ratings && ratings?.length !== 0 && (
                    <Rating
                        classes={{
                            iconEmpty: classes.ratingColor,
                        }}
                        value={ratingVal}
                        readOnly
                    />
                )}
            </div>
            <p className='product-old-price'>{oldPrice && `${oldPrice} $`}</p>
            <p className='product-new-price'>
                <strong>{newPrice && `${newPrice} $`}</strong>
            </p>
            <Button
                className='product-add-to-cart'
                classes={{ root: classes.cartButton }}
                onClick={() => {
                    addToCart(product);
                }}
            >
                <div className='svg-bg'>
                    <CartIcon width='1.5rem' height='1.5rem' />
                </div>
                Add to cart
            </Button>
        </Card>
    );
};

export default ProductApp;
