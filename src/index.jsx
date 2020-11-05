import './components/theme/themeColors.css';
import './i18next';
import './fontawesome';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';
import { SettingsProvider } from './contexts/settingsContext';
import * as serviceWorker from './serviceWorker';
import { ErrorBoundary } from './ErrorBoundary';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

ReactDOM.render(
    <ErrorBoundary>
        <BrowserRouter>
            <SettingsProvider>
                <Elements stripe={stripePromise} options={{ locale: 'auto' }}>
                    <App />
                </Elements>
            </SettingsProvider>
        </BrowserRouter>
    </ErrorBoundary>,
    document.getElementById('desktop')
);

serviceWorker.unregister();
