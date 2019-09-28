import React from 'react';
import { useTranslation } from 'react-i18next';
import { GlobalStyle } from './components/styles/GlobalStyle';

function App() {
    const { t, i18n } = useTranslation();

    const changeLanguage = lang => {
        i18n.changeLanguage(lang);
    };
    return (
        <>
            <GlobalStyle />
            <div>
                <button onClick={() => changeLanguage('en-GB')}>gb</button>
                <button onClick={() => changeLanguage('en-US')}>us</button>
                <button onClick={() => changeLanguage('ro-RO')}>ro</button>
            </div>
            <h1>{t('desktop.title')}</h1>
        </>
    );
}

export default App;
