import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalAppProvider } from './contexts/GlobalContext';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './services/translation/i18next';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
        <GlobalAppProvider>
            <App />
        </GlobalAppProvider>
    </BrowserRouter>,
    document.getElementById('desktop')
);

serviceWorker.unregister();
