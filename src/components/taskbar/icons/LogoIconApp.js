import React, { useContext, useCallback } from 'react';
import { TaskbarContext } from '../../../contexts/taskbarContext';
import { LogoContainer, BorderLogo, Logo } from '../style';
import logoRed from '../../../assets/images/logo/logo-red.svg';
import logoBlue from '../../../assets/images/logo/logo-blue.svg';
import { ThemeContext } from '../../../contexts/themeContext';

const LogoIconApp = () => {
    const { startTaskbarApp, handleKeyPress } = useContext(TaskbarContext);
    const { theme } = useContext(ThemeContext);

    const toggle = useCallback(() => {
        startTaskbarApp('startMenuOpen');
    }, [startTaskbarApp]);

    const keyPress = useCallback(
        e => {
            handleKeyPress(e, 'startMenuOpen');
        },
        [handleKeyPress]
    );

    return (
        <LogoContainer tabIndex='0' onKeyPress={keyPress} onClick={toggle}>
            <BorderLogo>
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

export default LogoIconApp;
