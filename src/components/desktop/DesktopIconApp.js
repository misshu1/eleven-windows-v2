import React, { useContext, memo, useCallback } from 'react';
import { GlobalAppContext } from '../../contexts/globalContext';
import { FolderContext } from '../../contexts/folderContext';
import { IconContainer } from './style';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const DesktopIconApp = memo(props => {
    const { openFolder, activeFolder, minimizeUp } = useContext(FolderContext);
    const { link, appId, widgetIcon, iconName } = props;
    const {
        globalApp: { isMobile }
    } = useContext(GlobalAppContext);

    const start = useCallback(() => {
        openFolder(appId);
        activeFolder(appId);
        minimizeUp(appId);
    }, [activeFolder, appId, minimizeUp, openFolder]);

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
    iconName: PropTypes.node.isRequired
};
