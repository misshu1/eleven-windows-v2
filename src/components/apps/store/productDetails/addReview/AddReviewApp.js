import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import React from 'react';

import { useSettingsContext } from '../../../../../contexts/settingsContext';
import { Container, Form } from './style';
import useReviewValidation from './useReviewValidation';

const useStyles = makeStyles(() => ({
    submitButton: (theme) => ({
        backgroundColor: theme().material.primary.main,
        color: '#fff',
        cursor: 'default',
        border: 0,
        margin: 0,
        borderRadius: 3,
        alignSelf: 'flex-end',
        '&:disabled': {
            filter: 'grayscale(1)',
            color: '#d6d8de',
        },
        '&:hover': {
            backgroundColor: theme().material.primary.darker,
        },
    }),
    btnStyle: (theme) => ({
        position: 'relative',
        overflow: 'hidden',
        paddingLeft: '3rem',
        cursor: 'default',
        margin: 0,
        alignSelf: 'flex-end',
        backgroundColor: theme().material.primary.main,
        color: theme().material.primary.contrast.darker,

        '&:hover': {
            backgroundColor: theme().material.primary.darker,
        },

        '&:disabled': {
            filter: 'grayscale(1)',
            color: '#d6d8de',
        },
    }),
    icon: (theme) => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: '0',
        top: '0',
        bottom: '0',
        width: '2.5rem',
        transition: 'background 0.2s ease-in-out',
        borderTopRightRadius: '0 0',
        borderBottomRightRadius: '37% 100%',
        background: theme().material.accent.main,
    }),
    ratingColorEmpty: (theme) => ({
        color: theme().ratingColorEmpty,
    }),
    ratingColor: (theme) => ({
        color: theme().accentBg,
    }),
    ratingIcon: {
        margin: 0,
    },
}));

const INITIAL_STATE = {
    review: '',
    rating: 0,
};

const AddReviewApp = ({ productId, addTempReview }) => {
    const { getTheme } = useSettingsContext();
    const classes = useStyles(getTheme);
    const {
        handleBlur,
        handleChange,
        values,
        errors,
        isSubmitting,
        handleSubmit,
        handleUpdateRating,
    } = useReviewValidation(INITIAL_STATE, productId, addTempReview);

    return (
        <Container>
            <Form autoCapitalize='off' errors={errors} onSubmit={handleSubmit}>
                <label htmlFor='review' className='review-label'>
                    <span className='review-title'>Review *</span>
                    <textarea
                        value={values.review}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name='review'
                        type='text'
                        id='review'
                        rows='4'
                        required
                        placeholder='Tell us what you like about this product'
                    />
                    <p className='error'>{errors.review}</p>
                </label>
                <label htmlFor='rating' className='rating-label'>
                    <span className='rating-title'>Rating *</span>
                    <Rating
                        emptyLabelText='sasdasdafasd'
                        name='rating'
                        classes={{
                            iconEmpty: classes.ratingColorEmpty,
                            iconFilled: classes.ratingColor,
                            icon: classes.ratingIcon,
                        }}
                        value={values.rating}
                        onChange={handleUpdateRating}
                    />
                </label>
                <p className='error'>{errors.rating}</p>
                <Button
                    classes={{ root: classes.btnStyle }}
                    type='submit'
                    disabled={isSubmitting}
                >
                    <div className={classes.icon}>
                        <FontAwesomeIcon
                            icon={['fab', 'telegram-plane']}
                            size='lg'
                        />
                    </div>
                    Send Review
                </Button>
            </Form>
        </Container>
    );
};

export default AddReviewApp;
