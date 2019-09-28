import React from 'react';
import { useTranslation } from 'react-i18next';

function App() {
    const { t, i18n } = useTranslation();

    const changeLanguage = lang => {
        i18n.changeLanguage(lang);
    };
    return (
        <>
            <div>
                <button onClick={() => changeLanguage('gb')}>gb</button>
                <button onClick={() => changeLanguage('us')}>us</button>
                <button onClick={() => changeLanguage('ro')}>ro</button>
            </div>
            <p>{t('desktop.title')}</p>
        </>
    );
}

export default App;
