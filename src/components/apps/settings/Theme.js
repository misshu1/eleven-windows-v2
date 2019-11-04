import React, { useContext } from 'react';
import { Title, ThemesImg, Box, Spacer } from './style';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../../contexts/themeContext';
import darkImg from '../../../assets/images/apps/settings/dark-preview.jpg';
import lightImg from '../../../assets/images/apps/settings/light-preview.jpg';

const Theme = () => {
    const { t } = useTranslation();
    const { changeTheme } = useContext(ThemeContext);

    return (
        <Spacer>
            <Title>{t('settings.title.theme')}</Title>
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
        </Spacer>
    );
};

export default Theme;
