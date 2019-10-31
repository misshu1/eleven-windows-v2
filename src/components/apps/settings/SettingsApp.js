import React, { useContext } from 'react';
import i18n from 'i18next';
import { languages } from '../../../services/translation/i18next';
import { useTranslation } from 'react-i18next';
import { Container, Title, ThemesImg, Box } from './style';
import { FlagImg, LanguagesContainer } from '../../taskbar/style';
import { NotificationContext } from '../../../contexts/notificationContext';
import { FolderContext } from '../../../contexts/FolderContext';
import { ThemeContext } from '../../../contexts/themeContext';
import { IndexContext } from '../../../contexts/indexContext';
import Resize from './Resize';
import FolderApp from '../../folder/FolderApp';
import darkImg from '../../../assets/images/apps/settings/dark-preview.jpg';
import lightImg from '../../../assets/images/apps/settings/light-preview.jpg';

const SettingsApp = () => {
    const { folder } = useContext(FolderContext);
    const { index } = useContext(IndexContext);
    const { changeTheme } = useContext(ThemeContext);
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

    return (
        <FolderApp
            appMinimize={'settingsMinimize'}
            appOpen={'settingsOpen'}
            appIndexName='settings'
            appIndexValue={index.settings}
            folderName='Settings'
            marginLeft='6rem'
            marginTop='6rem'
            linkMobile='settings'
            open={folder.settingsOpen}
        >
            <Container>
                <Title>Themes</Title>
                <Box>
                    <ThemesImg
                        src={darkImg}
                        onClick={() => changeTheme('dark')}
                        alt='dark theme'
                        loading='lazy'
                        draggable='false'
                    />
                    <ThemesImg
                        src={lightImg}
                        onClick={() => changeTheme('light')}
                        alt='light theme'
                        loading='lazy'
                        draggable='false'
                    />
                </Box>
                <Title>Language</Title>
                <Box style={{ justifyContent: 'flex-start' }}>
                    {renderImg()}
                </Box>
                <Title>Background</Title>

                <Title>Resize App</Title>
                <Resize />
                <Title>Notifications</Title>
            </Container>
        </FolderApp>
    );
};
export default SettingsApp;
