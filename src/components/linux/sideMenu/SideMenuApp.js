import { AnimatePresence } from 'framer-motion';
import React, { useRef, Suspense } from 'react';
import Scrollbar from 'react-scrollbars-custom';

import BorderBG from '../../../assets/images/bg/BorderBG';
import useOnClickOutside from '../../../hooks/useOnClickOutside';
import { useSideMenuContext } from '../contexts/sideMenuContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import ReactDOM from 'react-dom';

import {
    ExpandedMenu,
    IconsMenu,
    IconsMenuContainer,
    MenuContainer,
    SvgContainer,
    Icon,
} from './style';
import SpinnerApp from '../../style/SpinnerApp';

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

const fadeAnimations = {
    initial: {
        opacity: 0,
    },
    open: {
        opacity: 1,
        transition: {
            delay: 0.3,
            duration: 0.2,
            ease: 'easeOut',
        },
    },
    close: {
        opacity: 0,
        transition: {
            delay: 0.15,
            duration: 0.15,
            ease: 'easeOut',
        },
    },
};

const SideMenuApp = (props) => {
    const menuRef = useRef(null);
    const { sideMenuState, closeSideMenu, isMenuOpen } = useSideMenuContext();
    useOnClickOutside(menuRef, () => closeSideMenu());

    return ReactDOM.createPortal(
        <>
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
                            <div className='left-menu'>
                                <IconButton
                                    component='span'
                                    onClick={closeSideMenu}
                                >
                                    <FontAwesomeIcon
                                        icon={['fas', 'times']}
                                        style={{ color: 'red' }}
                                    />
                                </IconButton>
                                <Scrollbar>
                                    <IconsMenu
                                        key='iconsMenu'
                                        initial='initial'
                                        animate='open'
                                        exit='close'
                                        variants={fadeAnimations}
                                    >
                                        {sideMenuState.map((app) => (
                                            <Tooltip
                                                title={app.name}
                                                placement='top'
                                                enterDelay={500}
                                                key={app.id}
                                            >
                                                <Icon isActive={app.isActive}>
                                                    <FontAwesomeIcon
                                                        icon={app.fontIcon}
                                                    />
                                                </Icon>
                                            </Tooltip>
                                        ))}
                                    </IconsMenu>
                                </Scrollbar>
                            </div>
                        </IconsMenuContainer>
                        <ExpandedMenu
                            key='expandedMenu'
                            initial='close'
                            animate='open'
                            exit='close'
                            variants={expandedMenuAnimations}
                        >
                            <Scrollbar>
                                {sideMenuState.map((app) => (
                                    <Suspense
                                        key={app.id}
                                        fallback={<SpinnerApp delay={200} />}
                                    >
                                        {app.component}
                                    </Suspense>
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
        </>,
        document.querySelector('#desktop')
    );
};

export default SideMenuApp;
