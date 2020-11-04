import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import { useDispatchFolderContext } from 'contexts';
import { useMediaQuery } from 'hooks';
import { AppIcon } from './style';

const MenuAppIcon = (props) => {
    const { openFolder, activeFolder, minimizeUp } = useDispatchFolderContext();
    const { link, appId, widgetIcon, iconName, closeSideMenu } = props;
    const isMobile = useMediaQuery('(max-width: 450px)');

    const open = useRef(null);
    const active = useRef(null);
    const minimize = useRef(null);
    open.current = () => openFolder(appId);
    active.current = () => activeFolder(appId);
    minimize.current = () => minimizeUp(appId);

    const start = () => {
        open.current();
        active.current();
        minimize.current();
        closeSideMenu();
    };

    return isMobile ? (
        <AppIcon className='icon' onClick={closeSideMenu}>
            <Link to={link}>
                {widgetIcon}
                <div className='name'>{iconName}</div>
            </Link>
        </AppIcon>
    ) : (
        <AppIcon onClick={start}>
            {widgetIcon}
            <div className='name'>{iconName}</div>
        </AppIcon>
    );
};

export default MenuAppIcon;

MenuAppIcon.propTypes = {
    appId: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,
    widgetIcon: PropTypes.node.isRequired,
    iconName: PropTypes.node.isRequired,
    closeSideMenu: PropTypes.func.isRequired
};
