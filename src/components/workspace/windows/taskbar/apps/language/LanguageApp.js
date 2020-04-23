import React, { useCallback } from 'react';
import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';

import { useNotificationsContext } from '../../../../../../contexts/notificationsContext';
import { useSettingsContext } from '../../../../../../contexts/settingsContext';
import { languages } from '../../../../../../services/translation/i18next';
import { useLanguageContext } from '../../contexts/languageContext';
import { Container as LanguageContainer, FlagImg } from '../../icons/language/style';
import { Container } from './style';

const LanguageApp = ({ languageMenuRef }) => {
    const { showSuccess } = useNotificationsContext();
    const { closeLanguage } = useLanguageContext();
    const { changeLanguage } = useSettingsContext();
    const { t } = useTranslation();

    const showLanguages = useCallback(() => {
        return languages.map((item) => (
            <LanguageContainer
                key={item.lang}
                style={{ height: '3.5rem' }}
                onClick={() => {
                    changeLanguage(item.lang);
                    closeLanguage();
                    showSuccess(
                        t('language.successTitle'),
                        t('language.successMessage')
                    );
                }}
            >
                <FlagImg
                    src={item.flag}
                    style={{ margin: '1px' }}
                    draggable='false'
                />
            </LanguageContainer>
        ));
    }, [changeLanguage, closeLanguage, showSuccess, t]);

    return ReactDOM.createPortal(
        <Container ref={languageMenuRef}>{showLanguages()}</Container>,
        document.querySelector('#desktop')
    );
};

export default LanguageApp;
