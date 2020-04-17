import React from 'react';
import { Desktop, SideMenu, BorderLogo, Logo, LogoContainer } from './style';
import { useSideMenuContext } from '../contexts/sideMenuContext';
import SideMenuApp from '../sideMenu/SideMenuApp';
import LogoIcon from '../../../assets/images/icons/LogoIcon';

const logoAnimations = {
    open: {
        x: '-1rem',
        opacity: [1, 1, 0],

        transition: {
            duration: 0.1,
            ease: 'easeOut',
            times: [0, 0.9, 1],
        },
    },
    close: {
        x: 0,
        opacity: 1,
        transition: {
            delay: 0.45,
            duration: 0.1,
            ease: 'easeOut',
        },
    },
};

const LinuxDesktopApp = () => {
    const { isMenuOpen, openSideMenu } = useSideMenuContext();
    return (
        <Desktop>
            <SideMenu>
                <LogoContainer
                    onClick={openSideMenu}
                    animate={isMenuOpen ? 'open' : 'close'}
                    variants={logoAnimations}
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
                </LogoContainer>
                <SideMenuApp />
            </SideMenu>
            <div style={{ flex: 1 }}></div>
        </Desktop>
    );
};

export default LinuxDesktopApp;
