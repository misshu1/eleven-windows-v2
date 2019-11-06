import React, { useContext, useCallback } from 'react';
import { LogoContainer, BorderLogo, Logo } from '../style';
import { TaskbarContext } from '../../../contexts/taskbarContext';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../../contexts/themeContext';
import logoBlue from '../../../assets/images/logo/logo-blue.svg';
import logoRed from '../../../assets/images/logo/logo-red.svg';
import Tooltip from '@material-ui/core/Tooltip';

const LogoIconApp = () => {
    const { startTaskbarApp, handleKeyPress } = useContext(TaskbarContext);
    const { theme } = useContext(ThemeContext);
    const { t } = useTranslation();

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
        <Tooltip title={t('tooltip.menu')} placement='top' enterDelay={500}>
            <LogoContainer tabIndex='0' onKeyPress={keyPress} onClick={toggle}>
                <BorderLogo>
                    <span />
                    <span />
                    <span />
                    <span />
                    <Logo
                        src={theme.id === 'dark' ? logoRed : logoBlue}
                        alt='logo'
                        draggable='false'
                    />
                </BorderLogo>
            </LogoContainer>
        </Tooltip>
    );
};

export default LogoIconApp;
