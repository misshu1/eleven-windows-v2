import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from './contexts/themeContext';
import { GlobalAppProvider } from './contexts/globalContext';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './services/translation/i18next';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
        <ThemeProvider>
            <GlobalAppProvider>
                <App />
            </GlobalAppProvider>
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('desktop')
);

serviceWorker.unregister();
