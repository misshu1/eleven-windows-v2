import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import flagUS from 'assets/images/flags/us.svg';
import flagRO from 'assets/images/flags/ro.svg';
import translationUS from 'assets/languages/en.json';
import translationRO from 'assets/languages/ro.json';

export const languages = [
    {
        name: 'us',
        lang: 'en',
        flag: flagUS
    },
    {
        name: 'ro',
        lang: 'ro',
        flag: flagRO
    }
];

const resources = {
    en: {
        translation: translationUS
    },
    ro: {
        translation: translationRO
    }
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    debug: false,
    keySeparator: '.',
    interpolation: {
        escapeValue: false
    }
});

i18n.on('languageChanged', (lng) => {
    // Update the html lang tag
    document.documentElement.setAttribute('lang', lng);
});

export default i18n;
