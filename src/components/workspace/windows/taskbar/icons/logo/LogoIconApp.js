import React, { useCallback } from 'react';
import { Container, BorderLogo, Logo } from './style';
import { useTranslation } from 'react-i18next';
import Tooltip from '@material-ui/core/Tooltip';
import LogoIcon from '../../../../../../assets/images/icons/LogoIcon';

const LogoIconApp = (props) => {
    const { isStartMenuOpen, logoRef, toggleStartMenu } = props;
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
                        <LogoIcon />
                    </Logo>
                </BorderLogo>
            </Container>
        </Tooltip>
    );
};

export default LogoIconApp;
