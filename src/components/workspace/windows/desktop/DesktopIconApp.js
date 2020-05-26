import PropTypes from 'prop-types';
import React, { memo, useRef } from 'react';
import { Link } from 'react-router-dom';

import { useDispatchFolderContext } from '../../../../contexts/folderContext';
import useMediaQuery from '../../../../hooks/useMediaQuery';
import { IconContainer } from './style';

const DesktopIconApp = memo((props) => {
    const { openFolder, activeFolder, minimizeUp } = useDispatchFolderContext();
    const { link, appId, widgetIcon, iconName } = props;
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
    };

    return (
        <IconContainer tabIndex='0'>
            {isMobile ? (
                <Link to={link}>
                    {widgetIcon}
                    <div>{iconName}</div>
                </Link>
            ) : (
                <div className='icon' onDoubleClick={start}>
                    {widgetIcon}
                    <div>{iconName}</div>
                </div>
            )}
        </IconContainer>
    );
}, checkProps);

function checkProps(prevState, nextState) {
    return (
        prevState.widgetIcon === nextState.widgetIcon &&
        prevState.iconName === nextState.iconName &&
        prevState.link === nextState.link &&
        prevState.appId === nextState.appId
    );
}

export default DesktopIconApp;

DesktopIconApp.propTypes = {
    appId: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,
    widgetIcon: PropTypes.node.isRequired,
    iconName: PropTypes.node.isRequired,
};
