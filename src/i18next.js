import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import flagUS from 'assets/images/flags/us.svg';
import flagRO from 'assets/images/flags/ro.svg';
import translationUS from 'assets/languages/en.json';
import translationRO from 'assets/languages/ro.json';

export const languages = [
    {
        name: 'us',
        lang: 'en-US',
        flag: flagUS
    },
    {
        name: 'ro',
        lang: 'ro-RO',
        flag: flagRO
    }
];

const resources = {
    'en-US': {
        translation: translationUS
    },
    'ro-RO': {
        translation: translationRO
    }
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'en-US',
    fallbackLng: 'en-US',
    debug: false,
    keySeparator: '.',
    interpolation: {
        escapeValue: false
    }
});

export default i18n;
