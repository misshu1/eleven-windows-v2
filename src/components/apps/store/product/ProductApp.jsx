import { makeStyles } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import React, { useCallback, useEffect, useState } from 'react';

import { useCartContext, useFolderPagesContext } from 'contexts';
import { AddToCartButton, FOLDER_PAGES } from 'components/common';
import { Card } from './style';

const useStyles = makeStyles({
    ratingColorEmpty: {
        color: 'var(--grey60)'
    },
    ratingColor: {
        color: 'var(--primary)'
    }
});

const ProductApp = ({ product, setSelectedProduct }) => {
    const { imagePreview, newPrice, oldPrice, title, id } = product;
    const { getProductDiscount, productsReviews } = useCartContext();
    const { changePage } = useFolderPagesContext();
    const [discountVal, setDiscountVal] = useState(0);
    const [reviews, setReviews] = useState([]);
    const [ratingVal, setRatingVal] = useState(0);
    const classes = useStyles();

    const selectProduct = useCallback(() => {
        setSelectedProduct(product);
        changePage(FOLDER_PAGES.level_2);
    }, [setSelectedProduct, product, changePage]);

    useEffect(() => {
        setReviews(
            productsReviews
                .filter((p) => p.id === product.id)
                .map((item) => item.reviews)
        );
    }, [product.id, productsReviews]);

    useEffect(() => {
        const discount = getProductDiscount(newPrice, oldPrice);
        setDiscountVal(discount);
    }, [getProductDiscount, newPrice, oldPrice, setDiscountVal]);

    useEffect(() => {
        if (reviews.length !== 0) {
            const ratings = reviews[0].ratings.map((review) => review.rating);
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
            <AddToCartButton product={product} />
        </Card>
    );
};

export default ProductApp;
