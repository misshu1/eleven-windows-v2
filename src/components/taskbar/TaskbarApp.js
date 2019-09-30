import React from 'react';
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

const TaskbarApp = props => {
    const theme = localStorage.getItem('theme');

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
        // onClick={() => {
        //     closeApp('startMenuOpen');
        //     closeApp('calendarOpen');
        // }}
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
            <LanguagesContainer>
                <FlagImg src={selectLanguage()} alt={'language'} />
            </LanguagesContainer>
            <ClockContainer
                tabIndex='0'
                // onKeyPress={e => this.handleKeyPress(e, 'calendarOpen')}
                // onClick={() => toggleAppVisibility('calendarOpen')}
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
