import React, { useContext } from 'react';
import i18next, { languages } from '../../services/translation/i18next';
import { LanguagesContainer, FlagImg } from './style';
import { TaskbarContext } from '../../contexts/taskbarContext';
import globeImg from '../../assets/images/flags/globe.svg';

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

const Language = () => {
    const { toggleAppVisibility, handleKeyPress } = useContext(TaskbarContext);

    return (
        <LanguagesContainer
            tabIndex='0'
            onKeyPress={e => handleKeyPress(e, 'languagesOpen')}
            onClick={() => toggleAppVisibility('languagesOpen')}
        >
            <FlagImg src={selectLanguage()} alt={'language'} />
        </LanguagesContainer>
    );
};
export default Language;
