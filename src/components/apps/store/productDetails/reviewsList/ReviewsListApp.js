import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useFirebaseContext } from '../../../../../contexts/firebaseContext';
import { useNotificationsContext } from '../../../../../contexts/notificationsContext';
import { useAuth } from '../../../../../hooks/useAuth';
import ReviewSkeleton from '../../skeletons/ReviewSkeleton';
import AddReviewApp from '../addReview/AddReviewApp';
import ReviewApp from '../review/ReviewApp';
import { Container } from './style';

const useStyles = makeStyles({
    button: {
        cursor: 'default',
        backgroundColor: 'var(--primary)',
        color: '#fff',
        margin: '2rem auto',
        display: 'block',
        maxWidth: '20rem',

        '&:disabled': {
            backgroundColor: 'var(--primary) !important',
            filter: 'grayscale(1)',
            color: '#d6d8de',
        },

        '&:hover': {
            backgroundColor: 'var(--primaryDark)',
        },
    },
});

const ReviewsListApp = ({ product }) => {
    const [reviews, setReviews] = useState([]);
    const [showAddReveiw, setShowAddReveiw] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [reviewsLoaded, setReviewsLoaded] = useState(false);
    const { firestore } = useFirebaseContext();
    const { showError, showWarning } = useNotificationsContext();
    const { user, isUserLoggedIn } = useAuth();
    const { t } = useTranslation();
    const isCanceled = useRef(false);
    const classes = useStyles();

    const addTempReview = useCallback((review) => {
        setReviews((prevState) => [review, ...prevState]);
    }, []);

    useEffect(() => {
        setReviews(product?.reviews?.last5 || []);
    }, [product]);

    useEffect(() => {
        // If the user makes a request to firebase and closes the folder
        // We will not update the state anymore
        return () => {
            isCanceled.current = true;
        };
    }, []);

    useEffect(() => {
        if (isUserLoggedIn()) {
            const userPostedReview = product?.reviews?.ratings.find(
                (review) => review.userId === user.uid
            );

            const tempPostedReview = reviews.find(
                (review) => review.userId === user.uid
            );

            if (userPostedReview || tempPostedReview) {
                setShowAddReveiw(false);
            } else {
                setShowAddReveiw(true);
            }
        }
    }, [isUserLoggedIn, user, product, reviews]);

    const getReviews = async () => {
        let dbReviews = [];
        setIsLoading(true);

        try {
            const reviewsRef = await firestore
                .collection('reviews')
                .where('productId', '==', product.id)
                .orderBy('publishDate', 'desc')
                .get();

            if (!reviewsRef.size) {
                return;
            }
            await reviewsRef.forEach(
                (doc) =>
                    (dbReviews = [...dbReviews, { id: doc.id, ...doc.data() }])
            );

            if (!isCanceled.current) {
                setReviews(dbReviews);
                setIsLoading(false);
                setReviewsLoaded(true);
            } else {
                showWarning(
                    'Request Canceled',
                    'Seems like you canceled the request!',
                    418
                );
            }
        } catch (err) {
            setIsLoading(false);
            setReviewsLoaded(false);
            showError(
                'Error',
                'Failed to get product reviews from database!',
                500
            );
        }
    };

    const renderReviews = useCallback(() => {
        return reviews.map((review, index) => (
            <ReviewApp
                key={review.id || index}
                userDisplayName={review.userDisplayName}
                rating={review.rating}
                publishDate={review.publishDate}
                content={review.content}
            />
        ));
    }, [reviews]);

    const showReviewsSkeletons = useCallback(() => {
        return product?.reviews?.ratings.map((_, index) => (
            <ReviewSkeleton key={index} />
        ));
    }, [product]);

    return (
        <Container>
            <h2 className='title'>{t('store.reviews')}</h2>

            {showAddReveiw && (
                <AddReviewApp
                    productId={product.id}
                    addTempReview={addTempReview}
                />
            )}

            {renderReviews()}
            {!reviewsLoaded && isLoading && showReviewsSkeletons()}
            {reviews.length === 0 && (
                <p className='no-reviews'>{t('store.noReviews')}</p>
            )}

            {product?.reviews?.total > 5 && !reviewsLoaded && (
                <Button
                    aria-label='show all reviews'
                    classes={{ root: classes.button }}
                    onClick={getReviews}
                    disabled={isLoading}
                    fullWidth
                >
                    {t('store.showAllReviews')}
                </Button>
            )}
        </Container>
    );
};

export default ReviewsListApp;
