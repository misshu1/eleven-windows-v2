import { CardElement, useElements } from '@stripe/react-stripe-js';
import React from 'react';

const cardElementOptions = {
    style: {
        base: {
            fontSize: '16px',
            color: '#fff',

            '::placeholder': {
                color: '#d6d8de',
            },
            iconColor: '#d6d8de',
        },
        invalid: {
            color: 'orange',
            iconColor: 'orange',
        },
        complete: { iconColor: 'green' },
    },
    hidePostalCode: true,
};

const CheckoutApp = () => {
    const elements = useElements();

    return (
        <div>
            <div className='input-container'>
                <CardElement options={cardElementOptions} />
            </div>
        </div>
    );
};

export default CheckoutApp;
