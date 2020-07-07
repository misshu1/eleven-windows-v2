import React, { useCallback } from 'react';

import ScrollbarApp from '../../../../common/ScrollbarApp';
import CommentApp from './CommentApp';
import { ReviewsContainer } from './style';

const ReviewsApp = (props) => {
    const { reviews } = props;

    const renderReviews = useCallback(() => {
        return reviews.map((review) => (
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
            <ScrollbarApp>{renderReviews()}</ScrollbarApp>
        </ReviewsContainer>
    );
};

export default ReviewsApp;
