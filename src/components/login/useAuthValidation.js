import { useEffect, useState } from 'react';

import { useAuth } from '../../hooks/useAuth';
import useDebounce from '../../hooks/useDebounce';
import validateInput from './validationRules';

const useAuthValidation = (initialState) => {
    const [isSubmitting, setSubmitting] = useState(null);
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});
    const debouncedValues = useDebounce(values, 500);
    const auth = useAuth();

    const handleChange = (e) => {
        e.persist();
        setValues((previousValues) => ({
            ...previousValues,
            [e.target.name]: e.target.value,
        }));
    };

    // Handle errors when input value changes
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

    const handleLogin = async (e) => {
        e.preventDefault();
        const validationErrors = validateInput(values);
        setErrors(validationErrors);
        setSubmitting(true);

        if (!errors.email && !errors.password) {
            try {
                await auth.login(values.email, values.password);
            } catch (err) {
                setErrors((prevState) => ({
                    ...prevState,
                    firebase: err.message,
                }));
            }
        }
        setSubmitting(false);
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        const validationErrors = validateInput(values);
        setErrors(validationErrors);
        setSubmitting(true);

        if (!errors.name && !errors.email && !errors.password) {
            try {
                await auth.register(values.name, values.email, values.password);
            } catch (err) {
                setErrors((prevState) => ({
                    ...prevState,
                    firebase: err.message,
                }));
            }
        }
        setSubmitting(false);
    };

    return {
        values,
        errors,
        isSubmitting,
        handleRegister,
        handleChange,
        handleLogin,
        handleBlur,
    };
};

export default useAuthValidation;
