import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import { useAuth } from 'hooks';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Container, Form } from './style';
import useReviewValidation from './useReviewValidation';

const useStyles = makeStyles(() => ({
    submitButton: {
        backgroundColor: 'var(--primary)',
        color: '#fff',
        cursor: 'default',
        border: 0,
        margin: 0,
        borderRadius: 3,
        alignSelf: 'flex-end',
        '&:disabled': {
            backgroundColor: 'var(--primary) !important',
            filter: 'grayscale(1)',
            color: '#d6d8de'
        },
        '&:hover': {
            backgroundColor: 'var(--primaryDark)'
        }
    },
    btnStyle: {
        position: 'relative',
        overflow: 'hidden',
        paddingLeft: '3rem',
        cursor: 'default',
        margin: 0,
        alignSelf: 'flex-end',
        backgroundColor: 'var(--primary)',
        color: '#fff',

        '&:hover': {
            backgroundColor: 'var(--primaryDark)'
        },

        '&:disabled': {
            backgroundColor: 'var(--primary) !important',
            filter: 'grayscale(1)',
            color: '#d6d8de'
        }
    },
    icon: {
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
        background: 'var(--secondary)'
    },
    ratingColorEmpty: {
        color: 'var(--grey60)'
    },
    ratingColor: {
        color: 'var(--primary)'
    },
    ratingIcon: {
        margin: 0
    }
}));

const INITIAL_STATE = {
    name: '',
    review: '',
    rating: 0
};

const AddReviewApp = ({ productId, addTempReview }) => {
    const {
        handleBlur,
        handleChange,
        values,
        errors,
        isSubmitting,
        handleSubmit,
        handleUpdateRating
    } = useReviewValidation(INITIAL_STATE, productId, addTempReview);
    const { t } = useTranslation();
    const { user } = useAuth();
    const classes = useStyles();

    return (
        <Container>
            <Form autoCapitalize='off' errors={errors} onSubmit={handleSubmit}>
                <h3>{t('store.addReview')}</h3>
                {!user && (
                    <label htmlFor='Name' className='name-label'>
                        <span className='name-title'>
                            {t('store.reviewName')} *
                        </span>
                        <input
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name='name'
                            type='text'
                            id='name'
                            required
                            placeholder='John Doe'
                        />
                        <p className='error'>{errors.name}</p>
                    </label>
                )}

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
                        placeholder={t('store.textareaPlaceholder')}
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
                            icon: classes.ratingIcon
                        }}
                        value={values.rating}
                        onChange={handleUpdateRating}
                    />
                </label>
                <p className='error'>{errors.rating}</p>
                <Button
                    classes={{ root: classes.btnStyle }}
                    aria-label='send review'
                    type='submit'
                    disabled={isSubmitting}
                >
                    <div className={classes.icon}>
                        <FontAwesomeIcon
                            icon={['fab', 'telegram-plane']}
                            size='lg'
                        />
                    </div>
                    {t('store.addReview')}
                </Button>
            </Form>
        </Container>
    );
};

export default AddReviewApp;
