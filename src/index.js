import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './services/translation/i18next';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Suspense fallback={<div>Loading</div>}>
        <App />
    </Suspense>,
    document.getElementById('desktop')
);

serviceWorker.unregister();
