import React, { useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IconContainer } from './style';
import { GlobalAppContext } from '../../contexts/GlobalContext';
import { FolderContext } from '../../contexts/FolderContext';
import { IndexContext } from '../../contexts/indexContext';

const DesktopIconApp = props => {
    const {
        linkMobile,
        folderIcon,
        iconName,
        appIndexName,
        appMinimize,
        appOpen
    } = props;
    const { globalApp } = useContext(GlobalAppContext);
    const { folder, startApp, minimizeApp } = useContext(FolderContext);
    const { activeWindow } = useContext(IndexContext);

    const start = useCallback(() => {
        startApp(appOpen, folderIcon, appIndexName, appMinimize);
        if (folder[appMinimize] === true) {
            minimizeApp(appMinimize, false);
        }
        activeWindow(appIndexName);
    }, [
        activeWindow,
        appIndexName,
        appMinimize,
        appOpen,
        folder,
        folderIcon,
        minimizeApp,
        startApp
    ]);

    return (
        <IconContainer tabIndex='0'>
            {globalApp.isMobile ? (
                <Link to={linkMobile}>
                    <img
                        src={folderIcon}
                        alt={iconName}
                        aria-label={iconName}
                    />
                    <div>{iconName}</div>
                </Link>
            ) : (
                <div className='icon' onDoubleClick={start}>
                    <img
                        src={folderIcon}
                        alt={iconName}
                        aria-label={iconName}
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
    folderIcon: PropTypes.string.isRequired,
    iconName: PropTypes.node.isRequired,
    appIndexName: PropTypes.string.isRequired,
    appMinimize: PropTypes.string.isRequired,
    appOpen: PropTypes.string.isRequired
};
