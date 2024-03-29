import './components/theme/themeColors.css';
import './i18next';
import './fontawesome';

import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';

import { App } from './App';
import { SettingsProvider } from './contexts/settingsContext';
import { disableReactDevTools } from 'components/common';
import { ErrorBoundary } from './ErrorBoundary';
import * as serviceWorker from './serviceWorker';

if (process.env.NODE_ENV === 'production') {
    disableReactDevTools();
}

ReactDOM.render(
    <ErrorBoundary>
        <StrictMode>
            <StylesProvider injectFirst>
                <BrowserRouter>
                    <SettingsProvider>
                        <App />
                    </SettingsProvider>
                </BrowserRouter>
            </StylesProvider>
        </StrictMode>
    </ErrorBoundary>,
    document.getElementById('desktop')
);

serviceWorker.unregister();
