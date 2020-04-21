import './services/translation/i18next';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { SettingsProvider } from './contexts/settingsContext';
import { ThemeProvider } from './contexts/themeContext';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
        <ThemeProvider>
            <SettingsProvider>
                <App />
            </SettingsProvider>
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('desktop')
);

serviceWorker.unregister();
