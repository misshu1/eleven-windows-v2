import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './services/translation/i18next';
import * as serviceWorker from './serviceWorker';
import SpinnerApp from './components/style/SpinnerApp';

ReactDOM.render(
    <Suspense fallback={<SpinnerApp />}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Suspense>,
    document.getElementById('desktop')
);

serviceWorker.unregister();
