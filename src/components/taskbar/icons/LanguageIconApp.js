import React, { useContext, useCallback } from 'react';
import i18next, { languages } from '../../../services/translation/i18next';
import { LanguagesContainer, FlagImg } from '../style';
import { TaskbarContext } from '../../../contexts/taskbarContext';
import globeImg from '../../../assets/images/flags/globe.svg';

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
        <LanguagesContainer tabIndex='0' onClick={toggle} onKeyPress={keyPress}>
            <FlagImg
                src={selectLanguage()}
                alt={'language'}
                draggable='false'
            />
        </LanguagesContainer>
    );
};
export default LanguageIconApp;
