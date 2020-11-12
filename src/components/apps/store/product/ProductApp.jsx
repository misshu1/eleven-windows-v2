import { makeStyles } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import React, { useCallback, useEffect, useState } from 'react';

import { useCartContext, useDispatchCartContext } from 'contexts';
import { AddToCartButton } from 'components/common';
import { folderPages } from 'components/folder/folderPages';
import { Card } from './style';

const useStyles = makeStyles({
    ratingColorEmpty: {
        color: 'var(--grey60)'
    },
    ratingColor: {
        color: 'var(--primary)'
    }
});

const ProductApp = ({ product, setSelectedProduct, changePage }) => {
    const { imagePreview, newPrice, oldPrice, reviews, title } = product;
    const { addToCart } = useDispatchCartContext();
    const { getProductDiscount } = useCartContext();
    const [discountVal, setDiscountVal] = useState(0);
    const [ratingVal, setRatingVal] = useState(0);
    const classes = useStyles();

    const selectProduct = useCallback(() => {
        setSelectedProduct(product);
        changePage(folderPages.level_2);
    }, [product, changePage, setSelectedProduct]);

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
                            iconFilled: classes.ratingColor
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
            <AddToCartButton
                onClick={() => {
                    addToCart(product);
                }}
                productId={product.id}
            />
        </Card>
    );
};

export default ProductApp;
