import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from './useAuth';

function useFormValidation(initialState, validate, authenticate) {
    const [firebaseError, setFirebaseError] = useState(null);
    const [animateInOut, setAnimateInOut] = useState(true);
    const [isSubmitting, setSubmitting] = useState(false);
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});
    const history = useHistory();
    const auth = useAuth();

    function handleChange(e) {
        e.persist();
        setValues((previousValues) => ({
            ...previousValues,
            [e.target.name]: e.target.value,
        }));
    }

    function handleBlur() {
        const validationErrors = validate(values);
        setErrors(validationErrors);
    }

    async function handleLogin(e) {
        e.preventDefault();
        const validationErrors = validate(values);
        setErrors(validationErrors);
        setSubmitting(true);

        if (!errors.email && !errors.password) {
            try {
                const authUser = await auth.login(
                    values.email,
                    values.password
                );
                if (authUser) {
                    setAnimateInOut(false);

                    setTimeout(() => {
                        setSubmitting(false);
                        history.push('/');
                    }, 800);
                }
            } catch (err) {
                setFirebaseError(err.message);
                setSubmitting(false);
            }
        }
    }

    async function handleRegister(e) {
        e.preventDefault();
        const validationErrors = validate(values);
        setErrors(validationErrors);
        setSubmitting(true);

        if (!errors.name && !errors.email && !errors.password) {
            try {
                const registerUser = await auth.register(
                    values.name,
                    values.email,
                    values.password
                );
                if (registerUser) {
                    setAnimateInOut(false);

                    setTimeout(() => {
                        setSubmitting(false);
                        history.push('/');
                    }, 800);
                }
            } catch (err) {
                setFirebaseError(err.message);
                setSubmitting(false);
            }
        }
    }

    function cancelLogin() {
        setAnimateInOut(false);

        setTimeout(() => {
            history.push('/');
        }, 800);
    }

    return {
        handleBlur,
        handleChange,
        values,
        errors,
        isSubmitting,
        animateInOut,
        cancelLogin,
        firebaseError,
        handleLogin,
        handleRegister,
    };
}

export default useFormValidation;
