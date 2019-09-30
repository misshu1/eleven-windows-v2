import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationGB from '../../assets/languages/en-GB/translation.json';
import translationUS from '../../assets/languages/en-US/translation.json';
import translationRO from '../../assets/languages/ro-RO/translation.json';
import flagUS from '../../assets/images/flags/us.svg';
import flagGB from '../../assets/images/flags/gb.svg';
import flagRO from '../../assets/images/flags/ro.svg';

export const languages = [
    {
        name: 'us',
        lang: 'en-US',
        flag: flagUS
    },
    {
        name: 'gb',
        lang: 'en-GB',
        flag: flagGB
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
    'en-GB': {
        translation: translationGB
    },
    'ro-RO': {
        translation: translationRO
    }
};

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lang: 'en-US',
        fallbackLng: 'en-US',
        debug: false,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
