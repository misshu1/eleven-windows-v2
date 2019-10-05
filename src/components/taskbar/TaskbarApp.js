import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import ReactDOM from 'react-dom';
import i18next, { languages } from '../../services/translation/i18next';
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
    FlagImg,
    AppIcon
} from './style';
import logoRed from '../../assets/images/logo/logo-red.svg';
import logoBlue from '../../assets/images/logo/logo-blue.svg';
import globeImg from '../../assets/images/flags/globe.svg';
import ClockApp from './ClockApp';
import { ClockProvider } from '../../contexts/clockContext';
import { TaskbarContext } from '../../contexts/taskbarContext';
import { FolderContext } from '../../contexts/FolderContext';
import { IndexContext } from '../../contexts/indexContext';
import { NotificationContext } from '../../contexts/notificationContext';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faCommentAlt);

const TaskbarApp = props => {
    const theme = localStorage.getItem('theme');
    const { notification, hideAllModals } = useContext(NotificationContext);
    const { folder, minimizeApp } = useContext(FolderContext);
    const { index, activeWindow } = useContext(IndexContext);
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

    const showIcons = () => {
        const { openApps } = folder;
        const create = openApps.map(item => {
            const app = item[0];
            const icon = item[1];
            const zIndex = item[2];
            const minimize = item[3];

            return (
                <AppIcon
                    key={app}
                    minimize={folder[minimize]}
                    onClick={() => {
                        if (folder[minimize] !== null) {
                            minimizeApp(minimize, false);
                        }
                        activeWindow(zIndex);
                    }}
                    appIndex={index[zIndex]}
                >
                    <img src={icon} alt={app} />
                </AppIcon>
            );
        });
        return create;
    };

    return ReactDOM.createPortal(
        <Taskbar
            onClick={() => {
                closeAllApps();
            }}
        >
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
            <OpenAppsContainer>{showIcons()}</OpenAppsContainer>
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
            <SettingsContainer>
                <Link to={'/settings'} aria-label='settings'>
                    <FontAwesomeIcon icon={['fa', 'cog']} />
                </Link>
            </SettingsContainer>
            <NotificationContainer
                tabIndex='0'
                onKeyPress={e => handleKeyPress(e, 'notificationsOpen')}
                onClick={() => {
                    toggleAppVisibility('notificationsOpen');
                    hideAllModals();
                }}
            >
                {notification.length > 0 ? (
                    <FontAwesomeIcon icon={['fas', 'comment-alt']} />
                ) : (
                    <FontAwesomeIcon icon={['far', 'comment-alt']} />
                )}
            </NotificationContainer>
        </Taskbar>,
        document.querySelector('#taskbar')
    );
};

export default TaskbarApp;
