import React, { useContext, useCallback } from 'react';
import { LanguagesContainer, FlagImg } from '../style';
import i18next, { languages } from '../../../services/translation/i18next';
import { TaskbarContext } from '../../../contexts/taskbarContext';
import { useTranslation } from 'react-i18next';
import globeImg from '../../../assets/images/flags/globe.svg';
import Tooltip from '@material-ui/core/Tooltip';

const selectLanguage = () => {
    const locationLanguage = i18next.language;
    const lang = languages.filter(item => item.lang === i18next.language);

    const checkLanguage = languages.find(
        item => item.lang === locationLanguage
    );
    if (
        !checkLanguage ||
        checkLanguage === '' ||
        checkLanguage === null ||
        checkLanguage === undefined
    ) {
        return globeImg;
    } else {
        return lang[0].flag;
    }
};

const LanguageIconApp = () => {
    const { startTaskbarApp, handleKeyPress } = useContext(TaskbarContext);
    const { t } = useTranslation();

    const toggle = useCallback(() => {
        startTaskbarApp('languagesOpen');
    }, [startTaskbarApp]);

    const keyPress = useCallback(
        e => {
            handleKeyPress(e, 'languagesOpen');
        },
        [handleKeyPress]
    );

    return (
        <Tooltip title={t('tooltip.language')} placement='top' enterDelay={500}>
            <LanguagesContainer
                tabIndex='0'
                onClick={toggle}
                onKeyPress={keyPress}
            >
                <FlagImg
                    src={selectLanguage()}
                    alt={'language'}
                    draggable='false'
                />
            </LanguagesContainer>
        </Tooltip>
    );
};
export default LanguageIconApp;
