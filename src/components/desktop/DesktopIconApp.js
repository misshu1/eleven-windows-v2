import React, { useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IconContainer } from './style';
import { GlobalAppContext } from '../../contexts/globalContext';
import { FolderContext } from '../../contexts/folderContext';
import { IndexContext } from '../../contexts/indexContext';

const DesktopIconApp = props => {
    const {
        linkMobile,
        widgetIcon,
        iconName,
        appIndexName,
        appMinimize,
        appOpen
    } = props;
    const { globalApp } = useContext(GlobalAppContext);
    const { folder, startApp, minimizeApp } = useContext(FolderContext);
    const { activeWindow } = useContext(IndexContext);

    const start = useCallback(() => {
        startApp(appOpen, widgetIcon, appIndexName, appMinimize, iconName);
        if (folder[appMinimize] === true) {
            minimizeApp(appMinimize, false);
        }
        activeWindow(appIndexName);
    }, [
        startApp,
        appOpen,
        widgetIcon,
        appIndexName,
        appMinimize,
        iconName,
        folder,
        activeWindow,
        minimizeApp
    ]);

    return (
        <IconContainer tabIndex='0'>
            {globalApp.isMobile ? (
                <Link to={linkMobile}>
                    <img
                        src={widgetIcon}
                        alt={iconName}
                        aria-label={iconName}
                        draggable='false'
                    />
                    <div>{iconName}</div>
                </Link>
            ) : (
                <div className='icon' onDoubleClick={start}>
                    <img
                        src={widgetIcon}
                        alt={iconName}
                        aria-label={iconName}
                        draggable='false'
                    />
                    <div>{iconName}</div>
                </div>
            )}
        </IconContainer>
    );
};

export default DesktopIconApp;

DesktopIconApp.propTypes = {
    linkMobile: PropTypes.string.isRequired,
    widgetIcon: PropTypes.node.isRequired,
    iconName: PropTypes.node.isRequired,
    appIndexName: PropTypes.string.isRequired,
    appMinimize: PropTypes.string.isRequired,
    appOpen: PropTypes.string.isRequired
};
