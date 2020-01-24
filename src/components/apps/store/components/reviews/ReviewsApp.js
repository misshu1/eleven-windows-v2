import React, { useCallback } from 'react';
import { ReviewsContainer } from './style';
import CommentApp from './CommentApp';
import Scrollbar from 'react-scrollbars-custom';

const ReviewsApp = props => {
    const { reviews } = props;

    const renderReviews = useCallback(() => {
        return reviews.map(review => (
            <CommentApp
                key={review.id}
                userDisplayName={review.userDisplayName}
                rating={review.rating}
                date={review.date}
                content={review.content}
            />
        ));
    }, [reviews]);

    return (
        <ReviewsContainer>
            <Scrollbar
                style={{
                    width: '100%',
                    height: '100%'
                }}
            >
                {renderReviews()}
            </Scrollbar>
        </ReviewsContainer>
    );
};

export default ReviewsApp;
