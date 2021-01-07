import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Badge from '@material-ui/core/Badge';
import Tooltip from '@material-ui/core/Tooltip';
import { motion } from 'framer-motion';
import React from 'react';

import { useNotificationsContext, useCartContext } from 'contexts';
import { fadeAnimations, iconsMenuAnimations } from 'components/animations';
import { ScrollbarApp } from 'components/common';
import { useSideMenuContext } from '../../contexts/sideMenuContext';
import { Container, Icon, IconsMenu } from './style';

const IconWithBadge = ({ badgeContent, fontIcon }) => {
    return (
        <Badge
            badgeContent={badgeContent}
            color='error'
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
            }}
            invisible={badgeContent === 0}
            variant='dot'
        >
            <FontAwesomeIcon icon={fontIcon} />
        </Badge>
    );
};

export const IconsMenuApp = () => {
    const {
        sideMenuState,
        closeSideMenu,
        activeMenuIcon
    } = useSideMenuContext();
    const { notificationsHistory } = useNotificationsContext();
    const { getCartItemsNumber } = useCartContext();

    return (
        <Container
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
                <Tooltip title='Close' placement='right' enterDelay={500}>
                    <Icon onClick={closeSideMenu} close>
                        <FontAwesomeIcon icon={['fas', 'times']} size='lg' />
                    </Icon>
                </Tooltip>
                <ScrollbarApp>
                    <IconsMenu>
                        {sideMenuState.map((app) => (
                            <Tooltip
                                title={app.name}
                                placement='right'
                                enterDelay={500}
                                key={app.id}
                            >
                                <Icon
                                    isActive={app.isActive}
                                    onClick={() => activeMenuIcon(app.id)}
                                >
                                    {app.showNotificationBadge && (
                                        <IconWithBadge
                                            badgeContent={
                                                notificationsHistory.length
                                            }
                                            fontIcon={app.fontIcon}
                                        />
                                    )}
                                    {app.showCartBadge && (
                                        <IconWithBadge
                                            badgeContent={getCartItemsNumber()}
                                            fontIcon={app.fontIcon}
                                        />
                                    )}
                                    {!app.showNotificationBadge &&
                                        !app.showCartBadge && (
                                            <FontAwesomeIcon
                                                icon={app.fontIcon}
                                            />
                                        )}
                                </Icon>
                            </Tooltip>
                        ))}
                    </IconsMenu>
                </ScrollbarApp>
            </motion.div>
        </Container>
    );
};
