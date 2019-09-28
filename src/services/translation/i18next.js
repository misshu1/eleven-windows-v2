import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationGB from '../../assets/languages/en-GB/translation.json';
import translationUS from '../../assets/languages/en-US/translation.json';
import translationRO from '../../assets/languages/ro-RO/translation.json';

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
        debug: true,

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
