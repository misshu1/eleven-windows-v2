import './components/theme/themeColors.css';
import './services/translation/i18next';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { SettingsProvider } from './contexts/settingsContext';
import * as serviceWorker from './serviceWorker';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

ReactDOM.render(
    <BrowserRouter>
        <SettingsProvider>
            <Elements stripe={stripePromise} options={{ locale: 'auto' }}>
                <App />
            </Elements>
        </SettingsProvider>
    </BrowserRouter>,
    document.getElementById('desktop')
);

serviceWorker.unregister();
