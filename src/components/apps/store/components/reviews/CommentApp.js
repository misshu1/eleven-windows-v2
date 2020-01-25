import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThemeContext } from '../../../../../contexts/themeContext';
import { makeStyles } from '@material-ui/core/styles';
import { Comment } from './style';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles({
    ratingColor: theme => ({
        color: theme.ratingColorEmpty
    })
});

const timeSince = previous => {
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

const CommentApp = props => {
    const { userDisplayName, rating, date, content } = props;
    const { theme } = useContext(ThemeContext);
    const classes = useStyles(theme);

    return (
        <Comment>
            <div className='comment-header'>
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
                            iconEmpty: classes.ratingColor
                        }}
                        value={rating}
                        readOnly={true}
                    />
                    <span className='date'>{timeSince(date.toDate())}</span>
                </div>
            </div>
            <Typography
                variant='subtitle2'
                component='h2'
                className='comment-content'
            >
                {content}
            </Typography>
        </Comment>
    );
};

export default CommentApp;
