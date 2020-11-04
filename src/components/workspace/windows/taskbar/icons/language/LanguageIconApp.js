import Tooltip from '@material-ui/core/Tooltip';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { useDispatchSettingsContext } from 'contexts';
import { useLanguageContext } from '../../contexts/languageContext';
import { Container, FlagImg } from './style';

const LanguageIconApp = ({ languageIconRef }) => {
    const { t } = useTranslation();
    const { languageFlag } = useDispatchSettingsContext();
    const { isLanguageOpen, toggleLanguage } = useLanguageContext();

    return (
        <Tooltip title={t('tooltip.language')} placement='top' enterDelay={500}>
            <Container
                open={isLanguageOpen}
                tabIndex='0'
                onClick={toggleLanguage}
                ref={languageIconRef}
            >
                <FlagImg
                    src={languageFlag()}
                    alt={'language'}
                    draggable='false'
                />
            </Container>
        </Tooltip>
    );
};

export default LanguageIconApp;
