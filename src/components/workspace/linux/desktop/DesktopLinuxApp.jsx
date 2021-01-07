import Badge from '@material-ui/core/Badge';
import Tooltip from '@material-ui/core/Tooltip';
import { motion } from 'framer-motion';
import React from 'react';
import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';

import { LogoIcon } from 'assets/images/icons';
import { useCartContext, useNotificationsContext } from 'contexts';
import { logoAnimations } from 'components/animations';
import { useSideMenuContext } from '../contexts/sideMenuContext';
import SideMenuApp from '../sideMenu/SideMenuApp';
import { BorderLogo, Desktop, Logo, LogoContainer, SideMenu } from './style';

const DesktopLinuxApp = () => {
    const { t } = useTranslation();
    const { notificationsHistory } = useNotificationsContext();
    const { isMenuOpen, openSideMenu } = useSideMenuContext();
    const { getCartItemsNumber } = useCartContext();

    return ReactDOM.createPortal(
        <Desktop>
            <SideMenu>
                <motion.div
                    animate={isMenuOpen ? 'open' : 'close'}
                    variants={logoAnimations}
                >
                    <Tooltip
                        title={t('tooltip.menu')}
                        placement='top'
                        enterDelay={500}
                    >
                        <Badge
                            badgeContent={
                                notificationsHistory.length +
                                getCartItemsNumber()
                            }
                            color='error'
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right'
                            }}
                            showZero={false}
                        >
                            <LogoContainer onClick={openSideMenu}>
                                <BorderLogo>
                                    <span />
                                    <span />
                                    <span />
                                    <span />
                                    <Logo>
                                        <LogoIcon width='100%' height='100%' />
                                    </Logo>
                                </BorderLogo>
                            </LogoContainer>
                        </Badge>
                    </Tooltip>
                </motion.div>
                <SideMenuApp />
            </SideMenu>
            {/* TODO This div should be replaced by a component with desktop icons */}
            <div style={{ flex: 1 }}></div>
        </Desktop>,
        document.getElementById('desktop')
    );
};

export default DesktopLinuxApp;
