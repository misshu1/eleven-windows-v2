import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { languages } from '../../../services/translation/i18next';
import { Container } from './style';
import { FlagImg, LanguagesContainer } from '../style/';
import { TaskbarContext } from '../../../contexts/taskbarContext';
import { NotificationContext } from '../../../contexts/notificationContext';

const LanguageApp = () => {
    const { closeApp } = useContext(TaskbarContext);
    const { createNotificationSuccess } = useContext(NotificationContext);
    const { t } = useTranslation();

    const changeLanguage = lang => {
        i18n.changeLanguage(lang);
    };

    const renderImg = () => {
        return languages.map(item => (
            <LanguagesContainer
                key={item.lang}
                style={{ height: '3.5rem' }}
                onClick={() => {
                    changeLanguage(item.lang);
                    closeApp('languagesOpen');
                    createNotificationSuccess(
                        t('language.successTitle'),
                        t('language.successMessage')
                    );
                }}
            >
                <FlagImg
                    src={item.flag}
                    style={{ margin: '1px' }}
                    loading='lazy'
                    draggable='false'
                />
            </LanguagesContainer>
        ));
    };
    return ReactDOM.createPortal(
        <React.Fragment>
            <Container>{renderImg()}</Container>
        </React.Fragment>,
        document.querySelector('#desktop')
    );
};

export default LanguageApp;
