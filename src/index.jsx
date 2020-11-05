import './components/theme/themeColors.css';
import './i18next';
import './fontawesome';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';
import { SettingsProvider } from './contexts/settingsContext';
import { ErrorBoundary } from './ErrorBoundary';
import * as serviceWorker from './serviceWorker';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

ReactDOM.render(
    <ErrorBoundary>
        <StrictMode>
            <BrowserRouter>
                <SettingsProvider>
                    <Elements
                        stripe={stripePromise}
                        options={{ locale: 'auto' }}
                    >
                        <App />
                    </Elements>
                </SettingsProvider>
            </BrowserRouter>
        </StrictMode>
    </ErrorBoundary>,
    document.getElementById('desktop')
);

serviceWorker.unregister();
