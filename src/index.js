import './services/translation/i18next';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';

import App from './App';
import { SettingsProvider } from './contexts/settingsContext';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
        <LastLocationProvider>
            <SettingsProvider>
                <App />
            </SettingsProvider>
        </LastLocationProvider>
    </BrowserRouter>,
    document.getElementById('desktop')
);

serviceWorker.unregister();
