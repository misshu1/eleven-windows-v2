import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import React, { useCallback, useEffect, useRef, useState } from 'react';

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
    const isCanceled = useRef(false);
    const classes = useStyles();

    const addTempReview = useCallback((review) => {
        setReviews((prevState) => [review, ...prevState]);
    }, []);

    useEffect(() => {
        setReviews(product?.reviews?.last5 || []);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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

            if (userPostedReview) {
                setShowAddReveiw(false);
            } else {
                setShowAddReveiw(true);
            }
        }
    }, [isUserLoggedIn, user, product]);

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
            <h2 className='title'>Reviews</h2>

            {showAddReveiw && (
                <AddReviewApp
                    productId={product.id}
                    addTempReview={addTempReview}
                />
            )}

            {renderReviews()}
            {!reviewsLoaded && isLoading && showReviewsSkeletons()}
            {!product?.reviews && <p className='no-reviews'>No reviews</p>}

            {product?.reviews?.total > 5 && !reviewsLoaded && (
                <Button
                    aria-label='show all reviews'
                    classes={{ root: classes.button }}
                    onClick={getReviews}
                    disabled={isLoading}
                    fullWidth
                >
                    show all reviews
                </Button>
            )}
        </Container>
    );
};

export default ReviewsListApp;
