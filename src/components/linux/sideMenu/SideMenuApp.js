import { AnimatePresence } from 'framer-motion';
import React, { useRef, useState } from 'react';
import Scrollbar from 'react-scrollbars-custom';

import BorderBG from '../../../assets/images/bg/BorderBG';
import LogoIcon from '../../../assets/images/icons/LogoIcon';
import useOnClickOutside from '../../../hooks/useOnClickOutside';
import { useSideMenuContext } from '../contexts/sideMenuContext';
import {
    BorderLogo,
    ExpandedMenu,
    Icon,
    IconsMenu,
    IconsMenuContainer,
    Logo,
    LogoContainer,
    MenuContainer,
    SvgContainer
} from './style';

const iconsMenuAnimations = {
    visible: {
        scaleY: 1,
        opacity: 1,

        transition: {
            delay: 0.05,
            duration: 0.3,
            ease: 'easeOut',
        },
    },
    hidden: {
        scaleY: 0,
        opacity: [1, 1, 0],
        transition: {
            delay: 0.25,
            ease: 'easeIn',
            times: [0, 0.9, 1],
        },
    },
};

const expandedMenuAnimations = {
    visible: {
        x: 0,
        opacity: 1,

        transition: {
            delay: 0.3,
            duration: 0.3,
            ease: 'easeOut',
        },
    },
    hidden: {
        x: 'calc(-100% - 3.5rem)',
        opacity: [1, 1, 0],
        transition: {
            ease: 'easeIn',
            times: [0, 0.9, 1],
        },
    },
};

const SVGMenuAnimations = {
    visible: {
        x: 0,
        opacity: 1,

        transition: {
            delay: 0.3,
            duration: 0.3,
        },
    },
    hidden: {
        x: 'calc(-100% - 23.5rem)',
        opacity: [1, 0, 0],
        transition: {
            times: [0, 0.3, 1],
            duration: 0.6,
        },
    },
};

const SideMenuApp = (props) => {
    const menuRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(null);
    const { sideMenuState } = useSideMenuContext();

    useOnClickOutside(
        menuRef,
        () => isMenuOpen === true && setIsMenuOpen(false)
    );

    const handleExpandIconMenu = () => {
        if (isMenuOpen === null) {
            setIsMenuOpen(true);
        } else if (isMenuOpen !== null) {
            setIsMenuOpen(!isMenuOpen);
        }
    };

    return (
        <>
            <LogoContainer
                isMenuOpen={isMenuOpen}
                onClick={handleExpandIconMenu}
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
            <AnimatePresence>
                {isMenuOpen && (
                    <MenuContainer ref={menuRef}>
                        <IconsMenuContainer
                            key='iconMenu'
                            initial='hidden'
                            animate='visible'
                            exit='hidden'
                            variants={iconsMenuAnimations}
                        >
                            <IconsMenu>
                                <Scrollbar
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                    }}
                                >
                                    {sideMenuState.map((item) => (
                                        <Icon key={item.id}>
                                            {item.widgetIcon}
                                        </Icon>
                                    ))}
                                </Scrollbar>
                            </IconsMenu>
                        </IconsMenuContainer>
                        <ExpandedMenu
                            key='expandedMenu'
                            initial='hidden'
                            animate='visible'
                            exit='hidden'
                            variants={expandedMenuAnimations}
                        >
                            <Scrollbar
                                style={{
                                    width: '100%',
                                    height: '100%',
                                }}
                            >
                                {sideMenuState.map((item) => (
                                    <div key={item.id}>item.component</div>
                                ))}
                            </Scrollbar>
                        </ExpandedMenu>
                        <SvgContainer
                            key='svg'
                            initial='hidden'
                            animate='visible'
                            exit='hidden'
                            variants={SVGMenuAnimations}
                        >
                            <BorderBG></BorderBG>
                        </SvgContainer>
                    </MenuContainer>
                )}
            </AnimatePresence>
        </>
    );
};

export default SideMenuApp;
