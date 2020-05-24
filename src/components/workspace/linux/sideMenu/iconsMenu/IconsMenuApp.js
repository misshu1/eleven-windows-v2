import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Badge from '@material-ui/core/Badge';
import Tooltip from '@material-ui/core/Tooltip';
import { motion } from 'framer-motion';
import React from 'react';
import Scrollbar from 'react-scrollbars-custom';

import { useNotificationsContext } from '../../../../../contexts/notificationsContext';
import { fadeAnimations, iconsMenuAnimations } from '../../../../animations';
import { useSideMenuContext } from '../../contexts/sideMenuContext';
import { Container, Icon, IconsMenu } from './style';

const IconWithBadge = ({ badgeContent, fontIcon }) => {
    return (
        <Badge
            badgeContent={badgeContent}
            color='error'
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            invisible={badgeContent > 0 ? false : true}
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
        activeMenuIcon,
    } = useSideMenuContext();
    const { notificationsHistory } = useNotificationsContext();

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
                <Tooltip title='Close' placement='bottom' enterDelay={500}>
                    <Icon onClick={closeSideMenu} close>
                        <FontAwesomeIcon icon={['fas', 'times']} size='lg' />
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
                                    {/* TODO Update the Cart badgeContent */}
                                    {app.showCartBadge && (
                                        <IconWithBadge
                                            badgeContent={0}
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
                </Scrollbar>
            </motion.div>
        </Container>
    );
};
