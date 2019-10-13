import React, { useContext } from 'react';
import { TaskbarContext } from '../../contexts/taskbarContext';
import { LogoContainer, BorderLogo, Logo } from './style';
import logoRed from '../../assets/images/logo/logo-red.svg';
import logoBlue from '../../assets/images/logo/logo-blue.svg';
import { ThemeContext } from '../../contexts/themeContext';

const LogoApp = () => {
    const { toggleAppVisibility, handleKeyPress } = useContext(TaskbarContext);
    const { theme } = useContext(ThemeContext);

    return (
        <LogoContainer
            tabIndex='0'
            onKeyPress={e => handleKeyPress(e, 'startMenuOpen')}
            onClick={() => toggleAppVisibility('startMenuOpen')}
        >
            <BorderLogo>
                {/* This 4 spans are used for border animation inside BorderLogo component */}
                <span />
                <span />
                <span />
                <span />
                <Logo
                    src={theme.id === 'dark' ? logoRed : logoBlue}
                    alt='logo'
                />
            </BorderLogo>
        </LogoContainer>
    );
};

export default LogoApp;
