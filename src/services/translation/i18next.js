import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import flagRO from '../../assets/images/flags/ro.svg';
import flagUS from '../../assets/images/flags/us.svg';
import translationUS from '../../assets/languages/en-US/translation.json';
import translationRO from '../../assets/languages/ro-RO/translation.json';

export const languages = [
    {
        name: 'us',
        lang: 'en-US',
        flag: flagUS,
    },
    {
        name: 'ro',
        lang: 'ro-RO',
        flag: flagRO,
    },
];

const resources = {
    'en-US': {
        translation: translationUS,
    },
    'ro-RO': {
        translation: translationRO,
    },
};

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lang: 'en-US',
        fallbackLng: 'en-US',
        debug: false,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
