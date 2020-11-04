import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import PropTypes from 'prop-types';
import React from 'react';

import { useTimeSince } from 'hooks';
import { Container } from './style';

const useStyles = makeStyles({
    ratingColorEmpty: {
        color: 'var(--grey60)'
    },
    ratingColor: {
        color: 'var(--primary)'
    }
});

const ReviewApp = (props) => {
    const { userDisplayName, rating, publishDate, content } = props;
    const timeSince = useTimeSince(publishDate.toDate());
    const classes = useStyles();

    return (
        <Container>
            <div className='review-header'>
                <div className='left'>
                    <FontAwesomeIcon
                        className='icon'
                        icon={['fas', 'user-circle']}
                        size='lg'
                    />
                    <Typography variant='h6' component='h2'>
                        {userDisplayName}
                    </Typography>
                </div>
                <div className='right'>
                    <Rating
                        className='rating'
                        classes={{
                            iconEmpty: classes.ratingColorEmpty,
                            iconFilled: classes.ratingColor
                        }}
                        value={rating}
                        readOnly={true}
                    />
                    <span className='date'>{timeSince}</span>
                </div>
            </div>
            <p className='review-content'>{content}</p>
        </Container>
    );
};

export default ReviewApp;

ReviewApp.propTypes = {
    content: PropTypes.string.isRequired,
    userDisplayName: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    publishDate: PropTypes.object.isRequired
};
