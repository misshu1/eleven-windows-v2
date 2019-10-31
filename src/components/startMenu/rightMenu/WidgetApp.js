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
        iconDisplayame,
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
                            alt={iconDisplayame}
                            aria-label={iconDisplayame}
                            loading='lazy'
                            draggable='false'
                        />
                        <span>{iconDisplayame}</span>
                    </Link>
                </Widget>
            ) : (
                <Widget animationDuration={animationDuration} onClick={start}>
                    <img
                        src={widgetIcon}
                        alt={iconDisplayame}
                        aria-label={iconDisplayame}
                        loading='lazy'
                        draggable='false'
                    />
                    <span>{iconDisplayame}</span>
                </Widget>
            )}
        </React.Fragment>
    );
};

export default WidgetApp;

WidgetApp.propTypes = {
    linkMobile: PropTypes.string.isRequired,
    widgetIcon: PropTypes.node.isRequired,
    iconDisplayame: PropTypes.string.isRequired,
    appIndexName: PropTypes.string.isRequired,
    appMinimize: PropTypes.string.isRequired,
    appOpen: PropTypes.string.isRequired,
    animationDuration: PropTypes.number.isRequired
};
