import React, { useCallback, useEffect, useState } from 'react';

import { useFirebaseContext } from '../../../../../contexts/firebaseContext';
import { useNotificationsContext } from '../../../../../contexts/notificationsContext';
import { useAuth } from '../../../../../hooks/useAuth';
import AddReviewApp from '../addReview/AddReviewApp';
import ReviewApp from '../review/ReviewApp';
import { Container } from './style';

const ReviewsListApp = ({ productId }) => {
    const [reviews, setReviews] = useState([]);
    const [showAddReveiw, setShowAddReveiw] = useState(false);
    const { firestore } = useFirebaseContext();
    const { showError, showWarning } = useNotificationsContext();
    const { user } = useAuth();

    const addTempReview = useCallback((review) => {
        setReviews((prevState) => [review, ...prevState]);
    }, []);

    useEffect(() => {
        if (!!user) {
            const userPostedReview = reviews.find(
                (review) => review.userId === user.uid
            );

            if (userPostedReview) {
                setShowAddReveiw(false);
            } else {
                setShowAddReveiw(true);
            }
        }
    }, [reviews, user]);

    useEffect(() => {
        let isCanceled = false;

        const getReviews = async () => {
            let dbReviews = [];

            try {
                const reviewsRef = await firestore
                    .collection('reviews')
                    .where('productId', '==', productId)
                    .orderBy('publishDate', 'desc')
                    .get();

                if (!reviewsRef.size) {
                    // TODO UI for no reviews
                    return console.log('no reviews');
                }
                await reviewsRef.forEach(
                    (doc) =>
                        (dbReviews = [
                            ...dbReviews,
                            { id: doc.id, ...doc.data() },
                        ])
                );

                if (!isCanceled) {
                    setReviews(dbReviews);
                } else {
                    showWarning(
                        'Request Canceled',
                        'Seems like you canceled the request!',
                        418
                    );
                }
            } catch (err) {
                showError(
                    'Error',
                    'Failed to get product reviews from database!',
                    500
                );
            }
        };

        getReviews();
        return () => {
            isCanceled = true;
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const renderReviews = useCallback(() => {
        return reviews.map((review, index) => (
            <ReviewApp
                key={review.id || index}
                userDisplayName={review.userDisplayName}
                rating={review.rating}
                publishDate={review.publishDate}
                content={review.content}
                userId={review.userId}
            />
        ));
    }, [reviews]);

    return (
        <Container>
            {showAddReveiw && (
                <AddReviewApp
                    productId={productId}
                    addTempReview={addTempReview}
                />
            )}

            {renderReviews()}
        </Container>
    );
};

export default ReviewsListApp;
