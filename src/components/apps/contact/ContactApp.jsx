import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import i18n from '../../../i18next';

import FolderApp from 'components/folder/FolderApp';
import { Container, Form } from './style';
import { useNotificationsContext } from 'contexts';
import { Button, makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(() => ({
    submitButton: {
        backgroundColor: 'var(--primary)',
        color: '#fff',
        cursor: 'default',
        border: 0,
        margin: '.5rem',
        borderRadius: 3,
        '&:disabled': {
            backgroundColor: 'var(--primary) !important',
            filter: 'grayscale(1)',
            color: '#d6d8de'
        },
        '&:hover': {
            backgroundColor: 'var(--primaryDark)'
        }
    }
}));

const encode = (data) => {
    return Object.keys(data)
        .map(
            (key) =>
                encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
        )
        .join('&');
};

const validationSchema = yup.object().shape({
    name: yup
        .string()
        .required(i18n.t('contact.errors.nameRequired'))
        .matches(/^.{3,}$/, i18n.t('contact.errors.nameToShort')),
    email: yup
        .string()
        .email(i18n.t('contact.errors.invalidEmail'))
        .required(i18n.t('contact.errors.emailRequired')),
    message: yup
        .string()
        .matches(/^.{30,}$/, i18n.t('contact.errors.messageToShort'))
        .required(i18n.t('contact.errors.messageRequired'))
});

const ContactApp = () => {
    const {
        errors,
        touched,
        isValid,
        values,
        handleBlur,
        handleChange,
        handleSubmit
    } = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validationSchema,
        onSubmit: (values, { resetForm }) => {
            sendMessage(values, resetForm);
        }
    });
    const { showSuccess, showError } = useNotificationsContext();
    const classes = useStyles();
    const { t } = useTranslation();

    function sendMessage(values, resetForm) {
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': 'contact',
                name: values.name,
                email: values.email,
                message: values.message
            })
        })
            .then(() => {
                resetForm();
                showSuccess('Success', 'Your message has been sent.');
            })
            .catch(() =>
                showError(
                    'Error',
                    'Failed to send the message. Please try again.',
                    500
                )
            );
    }

    return (
        <FolderApp
            appId={11}
            marginLeft={130}
            marginTop={100}
            width='35rem'
            height='40rem'
        >
            <Container>
                <Form onSubmit={handleSubmit} errors={errors} touched={touched}>
                    <label htmlFor='name'>
                        <span>{t('contact.name')} *</span>
                        <input
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name='name'
                            type='text'
                            id='name'
                            required
                        />
                        <p className='error'>{touched.name && errors.name}</p>
                    </label>
                    <label htmlFor='email'>
                        <span>{t('contact.email')} *</span>
                        <input
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name='email'
                            type='email'
                            id='email'
                            required
                        />
                        <p className='error'>{touched.email && errors.email}</p>
                    </label>
                    <label htmlFor='message'>
                        <span>{t('contact.message')} *</span>
                        <textarea
                            name='message'
                            value={values.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id='message'
                            rows='4'
                            required
                        />

                        <p className='error'>
                            {touched.message && errors.message}
                        </p>
                    </label>
                    <Button
                        variant='contained'
                        type='submit'
                        aria-label='send message'
                        disabled={!isValid}
                        className={classes.submitButton}
                    >
                        {t('contact.sendMessage')}
                    </Button>
                </Form>
            </Container>
        </FolderApp>
    );
};

export default ContactApp;
