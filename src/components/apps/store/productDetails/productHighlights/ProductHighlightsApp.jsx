import { makeStyles } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useCartContext } from 'contexts';
import { AddToCartButton } from 'components/common';
import { Container } from './style';

const useStyles = makeStyles({
    ratingColorEmpty: {
        color: 'var(--grey60)'
    },
    ratingColor: {
        color: 'var(--primary)'
    }
});

function ProductHighlightsApp({ product }) {
    const [discountVal, setDiscountVal] = useState(0);
    const [ratingVal, setRatingVal] = useState(0);
    const [reviews, setReviews] = useState([]);
    const { newPrice, oldPrice, title } = product;
    const { getProductDiscount, productsReviews } = useCartContext();
    const { t } = useTranslation();
    const classes = useStyles();

    useEffect(() => {
        setReviews(
            productsReviews
                .filter((p) => p.id === product.id)
                .map((item) => item.reviews)
        );
    }, [product.id, productsReviews]);

    useEffect(() => {
        if (reviews.length !== 0) {
            const ratings = reviews[0].ratings.map((review) => review.rating);
            const sumOfRatings = ratings.reduce((a, b) => a + b, 0);
            const rating = sumOfRatings / ratings.length;
            setRatingVal(rating);
        }
    }, [reviews]);

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
                        iconFilled: classes.ratingColor
                    }}
                    value={ratingVal}
                    readOnly
                />
                <span className='product-average-rating'>
                    {ratingVal.toFixed(2)}
                </span>
            </div>
            <p className='product-reviews-count'>
                {reviews[0] &&
                    `${reviews[0]?.total} ${
                        reviews[0]?.total > 1
                            ? t('store.reviews')
                            : t('store.review')
                    }`}
                {!reviews[0] && `${t('store.noReviews')}`}
            </p>

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

            <AddToCartButton product={product} />
        </Container>
    );
}

export default ProductHighlightsApp;
