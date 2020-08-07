import { useEffect, useState } from 'react';

import { useFirebaseContext } from '../../../../../contexts/firebaseContext';
import { useNotificationsContext } from '../../../../../contexts/notificationsContext';
import { useAuth } from '../../../../../hooks/useAuth';
import useDebounce from '../../../../../hooks/useDebounce';
import validateInput from './validationRules';

const useReviewValidation = (initialState, productId, addTempReview) => {
    const [isSubmitting, setSubmitting] = useState(null);
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});
    const debouncedValues = useDebounce(values, 500);
    const { user } = useAuth();
    const { firestore, firebaseTimestamp } = useFirebaseContext();
    const { showError } = useNotificationsContext();

    const handleUpdateRating = (e) => {
        e.persist();
        setValues((previousValues) => ({
            ...previousValues,
            [e.target.name]: +e.target.value,
        }));
    };

    const handleChange = (e) => {
        e.persist();
        setValues((previousValues) => ({
            ...previousValues,
            [e.target.name]: e.target.value,
        }));
    };

    // Handle errors
    useEffect(() => {
        if (debouncedValues) {
            Object.keys(debouncedValues).map((val) => {
                // Check to see if the input is not empty
                if (debouncedValues[val]) {
                    const validationErrors = validateInput({
                        [val]: debouncedValues[val],
                    });
                    setErrors((prevState) => ({
                        ...prevState,
                        [val]: validationErrors[val],
                    }));
                }
                return undefined;
            });
        }
    }, [debouncedValues]);

    const handleBlur = (e) => {
        e.persist();
        const inputName = e.target.name;
        const validationErrors = validateInput(values);
        if (!errors[inputName]) {
            setErrors((prevState) => ({
                ...prevState,
                [inputName]: validationErrors[inputName],
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateInput(values);
        setErrors(validationErrors);
        setSubmitting(true);

        if (!errors.review && values.rating !== 0) {
            const newReview = {
                content: values.review,
                userId: user.uid,
                productId: productId,
                rating: values.rating,
                userDisplayName: user.displayName,
                publishDate: firebaseTimestamp(),
            };

            try {
                await firestore
                    .collection('reviews')
                    .doc(`${user.uid}_${productId}`)
                    .set(newReview)
                    .then(() => {
                        setValues(initialState);
                        addTempReview(newReview);
                    });
            } catch (err) {
                showError('Error', 'Failed to send review!', 500);
            }
        }
        setSubmitting(false);
    };

    return {
        values,
        errors,
        isSubmitting,
        handleChange,
        handleSubmit,
        handleBlur,
        handleUpdateRating,
    };
};

export default useReviewValidation;
