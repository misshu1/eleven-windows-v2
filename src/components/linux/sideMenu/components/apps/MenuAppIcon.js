import PropTypes from 'prop-types';
import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatchFolderContext } from '../../../../../contexts/folderContext';
import { GlobalAppContext } from '../../../../../contexts/globalContext';
import { AppIcon } from './style';

const MenuAppIcon = (props) => {
    const { openFolder, activeFolder, minimizeUp } = useDispatchFolderContext();
    const { link, appId, widgetIcon, iconName } = props;
    const {
        globalApp: { isMobile },
    } = useContext(GlobalAppContext);

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
    };

    return isMobile ? (
        <AppIcon className='icon'>
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
};
