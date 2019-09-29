import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {
    Logo,
    LogoContainer,
    BorderLogo,
    ClockContainer,
    NotificationContainer,
    OpenAppsContainer,
    SettingsContainer,
    Taskbar
} from './styles';
import logoRed from '../../assets/images/logo/logo-red.svg';
import logoBlue from '../../assets/images/logo/logo-blue.svg';

const TaskbarApp = props => {
    const theme = localStorage.getItem('theme');
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
            <ClockContainer
                tabIndex='0'
                // onKeyPress={e => this.handleKeyPress(e, 'calendarOpen')}
                // onClick={() => toggleAppVisibility('calendarOpen')}
            >
                {/* <ClockApp /> */}
            </ClockContainer>
            <SettingsContainer></SettingsContainer>
        </Taskbar>,
        document.querySelector('#taskbar')
    );
};

export default TaskbarApp;
