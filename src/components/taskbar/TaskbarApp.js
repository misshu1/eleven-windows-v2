import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import i18next, { languages } from '../../services/translation/i18next';
import PropTypes from 'prop-types';
import {
    Logo,
    LogoContainer,
    BorderLogo,
    ClockContainer,
    NotificationContainer,
    OpenAppsContainer,
    SettingsContainer,
    Taskbar,
    LanguagesContainer,
    FlagImg
} from './style';
import logoRed from '../../assets/images/logo/logo-red.svg';
import logoBlue from '../../assets/images/logo/logo-blue.svg';
import globeImg from '../../assets/images/flags/globe.svg';
import ClockApp from './ClockApp';
import { ClockProvider } from '../../contexts/clockContext';
import { TaskbarContext } from '../../contexts/taskbarContext';

const TaskbarApp = props => {
    const theme = localStorage.getItem('theme');
    const { closeAllApps, toggleAppVisibility, handleKeyPress } = useContext(
        TaskbarContext
    );

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

    return ReactDOM.createPortal(
        <Taskbar
            id='test'
            onClick={() => {
                closeAllApps();
            }}
        >
            <NotificationContainer></NotificationContainer>

            <LogoContainer
                tabIndex='0'
                // onKeyPress={e => this.handleKeyPress(e, 'startMenuOpen')}
                // onClick={() => toggleAppVisibility('startMenuOpen')}
            >
                <BorderLogo>
                    {/* This 4 spans are used for border animation inside BorderLogo component */}
                    <span />
                    <span />
                    <span />
                    <span />
                    <Logo
                        src={theme === 'dark' ? logoRed : logoBlue}
                        alt='logo'
                    />
                </BorderLogo>
            </LogoContainer>
            <OpenAppsContainer>{/* {this.showIcons()} */}</OpenAppsContainer>
            <LanguagesContainer
                tabIndex='0'
                onKeyPress={e => handleKeyPress(e, 'languagesOpen')}
                onClick={() => toggleAppVisibility('languagesOpen')}
            >
                <FlagImg src={selectLanguage()} alt={'language'} />
            </LanguagesContainer>
            <ClockContainer
                tabIndex='0'
                onKeyPress={e => handleKeyPress(e, 'calendarOpen')}
                onClick={() => toggleAppVisibility('calendarOpen')}
            >
                <ClockProvider>
                    <ClockApp />
                </ClockProvider>
            </ClockContainer>
            <SettingsContainer></SettingsContainer>
        </Taskbar>,
        document.querySelector('#taskbar')
    );
};

export default TaskbarApp;
