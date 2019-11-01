import React, { useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { GlobalAppContext } from '../../../contexts/GlobalContext';
import { FolderContext } from '../../../contexts/FolderContext';
import { IndexContext } from '../../../contexts/indexContext';
import { TaskbarContext } from '../../../contexts/taskbarContext';
import { Widget } from './style';

const WidgetApp = props => {
    const {
        linkMobile,
        widgetIcon,
        iconDisplayName,
        appIndexName,
        appMinimize,
        appOpen,
        animationDuration
    } = props;
    const { globalApp } = useContext(GlobalAppContext);
    const { closeApp } = useContext(TaskbarContext);
    const { activeWindow } = useContext(IndexContext);
    const { folder, startApp, minimizeApp } = useContext(FolderContext);

    const start = useCallback(() => {
        startApp(appOpen, widgetIcon, appIndexName, appMinimize);
        if (folder[appMinimize] === true) {
            minimizeApp(appMinimize, false);
        }
        activeWindow(appIndexName);
        closeApp('startMenuOpen');
    }, [
        activeWindow,
        appIndexName,
        appMinimize,
        appOpen,
        closeApp,
        folder,
        minimizeApp,
        startApp,
        widgetIcon
    ]);

    return (
        <React.Fragment>
            {globalApp.isMobile ? (
                <Widget>
                    <Link to={linkMobile}>
                        <img
                            src={widgetIcon}
                            alt={iconDisplayName}
                            aria-label={iconDisplayName}
                            draggable='false'
                        />
                        <span>{iconDisplayName}</span>
                    </Link>
                </Widget>
            ) : (
                <Widget animationDuration={animationDuration} onClick={start}>
                    <img
                        src={widgetIcon}
                        alt={iconDisplayName}
                        aria-label={iconDisplayName}
                        draggable='false'
                    />
                    <span>{iconDisplayName}</span>
                </Widget>
            )}
        </React.Fragment>
    );
};

export default WidgetApp;

WidgetApp.propTypes = {
    linkMobile: PropTypes.string.isRequired,
    widgetIcon: PropTypes.node.isRequired,
    iconDisplayName: PropTypes.string.isRequired,
    appIndexName: PropTypes.string.isRequired,
    appMinimize: PropTypes.string.isRequired,
    appOpen: PropTypes.string.isRequired,
    animationDuration: PropTypes.number.isRequired
};
