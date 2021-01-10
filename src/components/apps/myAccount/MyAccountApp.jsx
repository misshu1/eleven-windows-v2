import React, { useState } from 'react';
import FolderApp from 'components/folder/FolderApp';
import { Container } from './style';
import { useNotificationsContext } from 'contexts';

const encode = (data) => {
    return Object.keys(data)
        .map(
            (key) =>
                encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
        )
        .join('&');
};

const MyAccountApp = () => {
    const { showSuccess } = useNotificationsContext();
    const [values, setValues] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'contact', ...values })
        })
            .then(() => showSuccess('Success!', 'message sent'))
            .catch((error) => alert(error));
    };

    const handleChange = (e) => {
        e.persist();
        setValues((previousValues) => ({
            ...previousValues,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <FolderApp appId={7} marginLeft={170} marginTop={120}>
            <Container>
                <form
                    onSubmit={handleSubmit}
                    data-netlify='true'
                    name='contact'
                >
                    <input type='hidden' name='form-name' value='contact' />
                    <p>
                        <label>
                            Your Name:
                            <input
                                type='text'
                                name='name'
                                value={values.name}
                                onChange={handleChange}
                            />
                        </label>
                    </p>
                    <p>
                        <label>
                            Your Email:
                            <input
                                type='email'
                                name='email'
                                value={values.email}
                                onChange={handleChange}
                            />
                        </label>
                    </p>
                    <p>
                        <label>
                            Message:
                            <textarea
                                name='message'
                                value={values.message}
                                onChange={handleChange}
                            />
                        </label>
                    </p>
                    <p>
                        <button type='submit'>Send</button>
                    </p>
                </form>
            </Container>
        </FolderApp>
    );
};

export default MyAccountApp;
