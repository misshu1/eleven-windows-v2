import Tooltip from '@material-ui/core/Tooltip';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { LogoIcon } from 'assets/images/icons';
import { useStartMenuContext } from '../../contexts/startMenuContext';
import { BorderLogo, Container, Logo } from './style';

const LogoIconApp = ({ logoRef }) => {
    const { isStartMenuOpen, toggleStartMenu } = useStartMenuContext();
    const { t } = useTranslation();

    return (
        <Tooltip title={t('tooltip.menu')} placement='top' enterDelay={500}>
            <Container
                open={isStartMenuOpen}
                tabIndex='0'
                onClick={toggleStartMenu}
                ref={logoRef}
            >
                <BorderLogo>
                    <span />
                    <span />
                    <span />
                    <span />
                    <Logo>
                        <LogoIcon width='100%' height='100%' />
                    </Logo>
                </BorderLogo>
            </Container>
        </Tooltip>
    );
};

export default LogoIconApp;
