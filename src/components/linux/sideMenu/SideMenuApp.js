import { AnimatePresence } from 'framer-motion';
import React, { useRef, useState } from 'react';
import Scrollbar from 'react-scrollbars-custom';

import BorderBG from '../../../assets/images/bg/BorderBG';
import LogoIcon from '../../../assets/images/icons/LogoIcon';
import useOnClickOutside from '../../../hooks/useOnClickOutside';
import { useSideMenuContext } from '../contexts/sideMenuContext';
import Button from '@material-ui/core/Button';

import {
    BorderLogo,
    ExpandedMenu,
    Icon,
    IconsMenu,
    IconsMenuContainer,
    Logo,
    LogoContainer,
    MenuContainer,
    SvgContainer,
} from './style';

const logoAnimations = {
    open: {
        x: 0,
        y: '-50%',
        opacity: [1, 1, 0],

        transition: {
            duration: 0.1,
            ease: 'easeOut',
            times: [0, 0.9, 1],
        },
    },
    close: {
        x: '1rem',
        y: '-50%',
        opacity: 1,
        transition: {
            delay: 0.45,
            duration: 0.1,
            ease: 'easeOut',
        },
    },
};

const iconsMenuAnimations = {
    open: {
        scaleY: 1,
        opacity: 1,

        transition: {
            delay: 0.1,
            duration: 0.3,
            ease: 'easeOut',
        },
    },
    close: {
        scaleY: 0,
        opacity: [1, 1, 0],
        transition: {
            delay: 0.25,
            duration: 0.25,
            ease: 'easeIn',
            times: [0, 0.9, 1],
        },
    },
};

const expandedMenuAnimations = {
    open: {
        x: 0,
        opacity: 1,

        transition: {
            delay: 0.3,
            duration: 0.3,
            ease: 'easeOut',
        },
    },
    close: {
        x: 'calc(-100% - 3.5rem)',
        opacity: [1, 1, 0],
        transition: {
            duration: 0.3,
            ease: 'easeIn',
            times: [0, 0.9, 1],
        },
    },
};

const SVGMenuAnimations = {
    initial: {
        y: '-100%',
        opacity: 0,
    },
    open: {
        y: 0,
        opacity: 1,

        transition: {
            delay: 0.55,
            duration: 0.2,
        },
    },
    close: {
        x: '-6rem',
        opacity: 0,
        transition: {
            duration: 0.1,
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
                onClick={handleExpandIconMenu}
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
            <AnimatePresence>
                {isMenuOpen && (
                    <MenuContainer ref={menuRef}>
                        <IconsMenuContainer
                            key='iconMenu'
                            initial='close'
                            animate='open'
                            exit='close'
                            variants={iconsMenuAnimations}
                        >
                            <IconsMenu>
                                <Scrollbar
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                    }}
                                >
                                    <Button
                                        variant='contained'
                                        color='primary'
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        X
                                    </Button>
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
                            initial='close'
                            animate='open'
                            exit='close'
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
                            initial='initial'
                            animate='open'
                            exit='close'
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
