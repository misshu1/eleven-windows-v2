import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useAuth, useDebounce } from 'hooks';
import { useFirebaseContext, useNotificationsContext } from 'contexts';
import validationRules from './validationRules';

const useReviewValidation = (initialState, productId, addTempReview) => {
    const [isSubmitting, setSubmitting] = useState(null);
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});
    const debouncedValues = useDebounce(values, 500);
    const { user } = useAuth();
    const {
        firestore,
        firebaseTimestamp,
        firebaseIncrement
    } = useFirebaseContext();
    const { showError } = useNotificationsContext();

    const handleUpdateRating = (e) => {
        e.persist();
        setValues((previousValues) => ({
            ...previousValues,
            [e.target.name]: +e.target.value
        }));
    };

    const handleChange = (e) => {
        e.persist();
        setValues((previousValues) => ({
            ...previousValues,
            [e.target.name]: e.target.value
        }));
    };

    // Handle errors
    useEffect(() => {
        if (debouncedValues) {
            Object.keys(debouncedValues).map((val) => {
                // Check to see if the input is not empty
                if (debouncedValues[val]) {
                    const validationErrors = validationRules({
                        [val]: debouncedValues[val]
                    });
                    setErrors((prevState) => ({
                        ...prevState,
                        [val]: validationErrors[val]
                    }));
                }
                return undefined;
            });
        }
    }, [debouncedValues]);

    const handleBlur = (e) => {
        e.persist();
        const inputName = e.target.name;
        const validationErrors = validationRules(values);
        if (!errors[inputName]) {
            setErrors((prevState) => ({
                ...prevState,
                [inputName]: validationErrors[inputName]
            }));
        }
    };

    const updateLast5Reviews = async (review) => {
        const productRef = firestore.doc(`products/${review.productId}`);
        const increment = firebaseIncrement(1);
        let productData = null;

        await productRef
            .get()
            .then((doc) => {
                if (doc.exists) {
                    return (productData = doc.data());
                }
            })
            .catch((error) => {
                return console.log('Error getting document:', error);
            });

        if (productData) {
            const reviews = {
                total: increment,
                last5: [review, ...productData.reviews.last5.splice(0, 4)],
                ratings: [
                    { userId: review.userId, rating: review.rating },
                    ...productData.reviews.ratings
                ]
            };

            productRef.set({ reviews }, { merge: true });
        } else {
            // When posting the first revew
            // Product doesn't have the 'reviews' object, yet
            const reviews = {
                total: 1,
                last5: [review],
                ratings: [{ userId: review.userId, rating: review.rating }]
            };

            productRef.set({ reviews });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validationRules(values);
        setErrors(validationErrors);
        setSubmitting(true);

        if (!errors.name && !errors.review && values.rating !== 0) {
            const newReview = {
                content: values.review,
                userId: user?.uid || 'anonymous',
                productId: productId,
                rating: values.rating,
                userDisplayName: user?.displayName || values.name,
                publishDate: firebaseTimestamp()
            };

            try {
                await firestore
                    .collection('reviews')
                    .doc(`${user?.uid || uuidv4()}_${productId}`)
                    .set(newReview)
                    .then(() => {
                        setSubmitting(false);
                        setValues(initialState);
                        addTempReview(newReview);
                    });
                await updateLast5Reviews(newReview);
            } catch (err) {
                setSubmitting(false);
                showError('Error', 'Failed to send review!', 500);
            }
        } else {
            setSubmitting(false);
        }
    };

    return {
        values,
        errors,
        isSubmitting,
        handleChange,
        handleSubmit,
        handleBlur,
        handleUpdateRating
    };
};

export default useReviewValidation;
