import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './services/translation/i18next';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Suspense fallback={<div>Loading</div>}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Suspense>,
    document.getElementById('desktop')
);

serviceWorker.unregister();
