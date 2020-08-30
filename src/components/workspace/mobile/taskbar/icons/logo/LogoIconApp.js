import Tooltip from '@material-ui/core/Tooltip';
import React from 'react';
import { useTranslation } from 'react-i18next';

import LogoIcon from '../../../../../../assets/images/icons/LogoIcon';
import { BorderLogo, Container } from './style';

const LogoIconApp = ({ logoRef, isAppsMenuOpen, toggleAppsMenu }) => {
    const { t } = useTranslation();

    return (
        <Tooltip title={t('tooltip.menu')} placement='top' enterDelay={500}>
            <Container
                open={isAppsMenuOpen}
                tabIndex='0'
                onClick={toggleAppsMenu}
                ref={logoRef}
            >
                <BorderLogo>
                    <span />
                    <span />
                    <span />
                    <span />
                    <LogoIcon width='100%' height='100%' />
                </BorderLogo>
            </Container>
        </Tooltip>
    );
};

export default LogoIconApp;
