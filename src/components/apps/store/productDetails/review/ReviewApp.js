import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import PropTypes from 'prop-types';
import React from 'react';

import { useSettingsContext } from '../../../../../contexts/settingsContext';
import { Container } from './style';

const useStyles = makeStyles({
    ratingColorEmpty: (theme) => ({
        color: theme().ratingColorEmpty,
    }),
    ratingColor: (theme) => ({
        color: theme().accentBg,
    }),
});

const timeSince = (previous) => {
    const msPerMinute = 60000;
    const msPerHour = 3600000;
    const msPerDay = 86400000;
    const msPerMonth = 2592000000;
    const msPerYear = 946080000000;

    const currentDay = new Date().getTime();
    const elapsed = currentDay - new Date(previous).getTime();

    if (elapsed < msPerMinute) {
        return Math.round(elapsed / 1000) + ' seconds ago';
    } else if (elapsed < msPerHour) {
        return Math.round(elapsed / msPerMinute) + ' minutes ago';
    } else if (elapsed < msPerDay) {
        return Math.round(elapsed / msPerHour) + ' hours ago';
    } else if (elapsed < msPerMonth) {
        return Math.round(elapsed / msPerDay) + ' days ago';
    } else if (elapsed < msPerYear) {
        return Math.round(elapsed / msPerMonth) + ' months ago';
    } else {
        return Math.round(elapsed / msPerYear) + ' years ago';
    }
};

const ReviewApp = (props) => {
    const { userDisplayName, rating, publishDate, content } = props;
    const { getTheme } = useSettingsContext();
    const classes = useStyles(getTheme);

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
                            iconFilled: classes.ratingColor,
                        }}
                        value={rating}
                        readOnly={true}
                    />
                    <span className='date'>
                        {timeSince(publishDate.toDate())}
                    </span>
                </div>
            </div>
            <Typography
                variant='subtitle2'
                component='h2'
                className='review-content'
            >
                {content}
            </Typography>
        </Container>
    );
};

export default ReviewApp;

ReviewApp.propTypes = {
    content: PropTypes.string.isRequired,
    userDisplayName: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    publishDate: PropTypes.object.isRequired,
};
