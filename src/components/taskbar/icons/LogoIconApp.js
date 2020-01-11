import React, { useContext, useCallback } from 'react';
import { LogoContainer, BorderLogo, Logo } from '../style';
import { TaskbarContext } from '../../../contexts/taskbarContext';
import { useTranslation } from 'react-i18next';
import Tooltip from '@material-ui/core/Tooltip';
import LogoIcon from '../../../assets/images/icons/LogoIcon';

const LogoIconApp = () => {
    const { startTaskbarApp, handleKeyPress } = useContext(TaskbarContext);
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
                    <Logo>
                        <LogoIcon />
                    </Logo>
                </BorderLogo>
            </LogoContainer>
        </Tooltip>
    );
};

export default LogoIconApp;
