import React, { useCallback, useEffect, useState } from 'react';

import { useFirebaseContext } from '../../../../../contexts/firebaseContext';
import { useNotificationsContext } from '../../../../../contexts/notificationsContext';
import ReviewApp from '../review/ReviewApp';
import { Container } from './style';

const ReviewsListApp = ({ productId }) => {
    const [reviews, setReviews] = useState([]);
    const { firestore } = useFirebaseContext();
    const { showError, showWarning } = useNotificationsContext();

    useEffect(() => {
        let isCanceled = false;

        const getReviews = async () => {
            let dbReviews = [];

            try {
                const reviewsRef = await firestore
                    .collection('reviews')
                    .where('productId', '==', productId)
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
        return reviews.map((review) => (
            <ReviewApp
                key={review.id}
                userDisplayName={review.userDisplayName}
                rating={review.rating}
                publishDate={review.publishDate}
                content={review.content}
            />
        ));
    }, [reviews]);

    return <Container>{renderReviews()}</Container>;
};

export default ReviewsListApp;
