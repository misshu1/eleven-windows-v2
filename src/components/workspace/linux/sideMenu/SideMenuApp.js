import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Badge from '@material-ui/core/Badge';
import Tooltip from '@material-ui/core/Tooltip';
import { AnimatePresence, motion } from 'framer-motion';
import React, { Suspense, useRef } from 'react';
import ReactDOM from 'react-dom';
import Scrollbar from 'react-scrollbars-custom';

import BorderBG from '../../../../assets/images/bg/BorderBG';
import { useNotificationsContext } from '../../../../contexts/notificationsContext';
import useOnClickOutside from '../../../../hooks/useOnClickOutside';
import { expandedMenuAnimations, fadeAnimations, iconsMenuAnimations, SVGMenuAnimations } from '../../../animations';
import SpinnerApp from '../../../style/SpinnerApp';
import { useSideMenuContext } from '../contexts/sideMenuContext';
import { ExpandedMenu, Icon, IconsMenu, IconsMenuContainer, MenuContainer, SvgContainer } from './style';

const SideMenuApp = (props) => {
    const menuRef = useRef(null);
    const {
        sideMenuState,
        closeSideMenu,
        isMenuOpen,
        activeMenuIcon,
    } = useSideMenuContext();
    const { notificationsHistory } = useNotificationsContext();
    useOnClickOutside([menuRef], () => closeSideMenu());

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
                            <motion.div
                                className='left-menu'
                                key='iconsMenu'
                                initial='initial'
                                animate='open'
                                exit='close'
                                variants={fadeAnimations}
                            >
                                <Tooltip
                                    title='Close'
                                    placement='bottom'
                                    enterDelay={500}
                                >
                                    <Icon onClick={closeSideMenu} close>
                                        <FontAwesomeIcon
                                            icon={['fas', 'times']}
                                            size='lg'
                                        />
                                    </Icon>
                                </Tooltip>
                                <Scrollbar
                                    contentProps={{
                                        style: {
                                            display: 'flex',
                                            minHeight: 'calc(100% - 3rem)',
                                        },
                                    }}
                                >
                                    <IconsMenu>
                                        {sideMenuState.map((app) => (
                                            <Tooltip
                                                title={app.name}
                                                placement='top'
                                                enterDelay={500}
                                                key={app.id}
                                            >
                                                <Icon
                                                    isActive={app.isActive}
                                                    onClick={() =>
                                                        activeMenuIcon(app.id)
                                                    }
                                                >
                                                    <Badge
                                                        badgeContent={
                                                            notificationsHistory.length
                                                        }
                                                        color='error'
                                                        anchorOrigin={{
                                                            vertical: 'top',
                                                            horizontal: 'right',
                                                        }}
                                                        invisible={
                                                            app.showNotificationBadge &&
                                                            notificationsHistory.length >
                                                                0
                                                                ? false
                                                                : true
                                                        }
                                                        variant='dot'
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={app.fontIcon}
                                                        />
                                                    </Badge>
                                                </Icon>
                                            </Tooltip>
                                        ))}
                                    </IconsMenu>
                                </Scrollbar>
                            </motion.div>
                        </IconsMenuContainer>
                        <ExpandedMenu
                            key='expandedMenu'
                            initial='close'
                            animate='open'
                            exit='close'
                            variants={expandedMenuAnimations}
                        >
                            {sideMenuState.map((app) => (
                                <Suspense
                                    key={app.id}
                                    fallback={<SpinnerApp delay={200} />}
                                >
                                    {app.isActive && app.component}
                                </Suspense>
                            ))}
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
