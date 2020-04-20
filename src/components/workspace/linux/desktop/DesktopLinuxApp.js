import Badge from '@material-ui/core/Badge';
import Tooltip from '@material-ui/core/Tooltip';
import { motion } from 'framer-motion';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import LogoIcon from '../../../../assets/images/icons/LogoIcon';
import { NotificationContext } from '../../../../contexts/notificationContext';
import { logoAnimations } from '../../../animations/animations';
import { useSideMenuContext } from '../contexts/sideMenuContext';
import SideMenuApp from '../sideMenu/SideMenuApp';
import { BorderLogo, Desktop, Logo, LogoContainer, SideMenu } from './style';

const DesktopLinuxApp = () => {
    const { t } = useTranslation();
    const { notification } = useContext(NotificationContext);
    const { isMenuOpen, openSideMenu } = useSideMenuContext();

    return (
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
                            badgeContent={notification.length}
                            color='error'
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
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
                                        <LogoIcon />
                                    </Logo>
                                </BorderLogo>
                            </LogoContainer>
                        </Badge>
                    </Tooltip>
                </motion.div>
                <SideMenuApp />
            </SideMenu>
            <div style={{ flex: 1 }}></div>
        </Desktop>
    );
};

export default DesktopLinuxApp;
