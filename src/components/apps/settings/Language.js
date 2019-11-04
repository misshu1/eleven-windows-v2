import React, { useContext } from 'react';
import i18n from 'i18next';
import { FlagImgContainer, Title, Box, Spacer } from './style';
import { languages } from '../../../services/translation/i18next';
import { useTranslation } from 'react-i18next';
import { FlagImg } from '../../taskbar/style';
import { NotificationContext } from '../../../contexts/notificationContext';

const Language = () => {
    const { createNotificationSuccess } = useContext(NotificationContext);
    const { t } = useTranslation();

    const changeLanguage = lang => {
        i18n.changeLanguage(lang);
    };

    const renderImg = () => {
        return languages.map(item => (
            <FlagImgContainer
                key={item.lang}
                style={{ height: '3.5rem' }}
                onClick={() => {
                    changeLanguage(item.lang);
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
            </FlagImgContainer>
        ));
    };
    return (
        <Spacer>
            <Title>{t('settings.title.language')}</Title>
            <Box style={{ justifyContent: 'flex-start' }}>{renderImg()}</Box>
        </Spacer>
    );
};

export default Language;
