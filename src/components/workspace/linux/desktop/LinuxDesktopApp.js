import React, { useContext } from 'react';
import { Desktop, SideMenu, BorderLogo, Logo, LogoContainer } from './style';
import { useSideMenuContext } from '../contexts/sideMenuContext';
import SideMenuApp from '../sideMenu/SideMenuApp';
import LogoIcon from '../../../../assets/images/icons/LogoIcon';
import { logoAnimations } from '../../../animations/animations';
import Tooltip from '@material-ui/core/Tooltip';
import Badge from '@material-ui/core/Badge';
import { NotificationContext } from '../../../../contexts/notificationContext';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const LinuxDesktopApp = () => {
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

export default LinuxDesktopApp;
