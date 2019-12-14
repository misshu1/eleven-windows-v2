import React, { useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import { TaskbarContext } from '../../../contexts/taskbarContext';
import { FolderContext } from '../../../contexts/folderContext';
import { IndexContext } from '../../../contexts/indexContext';
import { Widget } from './style';

const WidgetApp = props => {
    const {
        iconDisplayName,
        widgetIcon,
        appIndexName,
        appMinimize,
        appOpen
    } = props;
    const { closeApp } = useContext(TaskbarContext);
    const { activeWindow } = useContext(IndexContext);
    const { folder, startApp, minimizeApp } = useContext(FolderContext);

    const start = useCallback(() => {
        startApp(
            appOpen,
            widgetIcon,
            appIndexName,
            appMinimize,
            iconDisplayName
        );
        if (folder[appMinimize] === true) {
            minimizeApp(appMinimize, false);
        }
        activeWindow(appIndexName);
        closeApp('notificationsOpen');
    }, [
        activeWindow,
        appIndexName,
        appMinimize,
        appOpen,
        closeApp,
        folder,
        iconDisplayName,
        minimizeApp,
        startApp,
        widgetIcon
    ]);

    return (
        <Widget onClick={start}>
            <img
                src={widgetIcon}
                alt={appOpen}
                aria-label={appOpen}
                draggable='false'
            />
            <h5>{iconDisplayName}</h5>
        </Widget>
    );
};

export default WidgetApp;

WidgetApp.propTypes = {
    iconDisplayName: PropTypes.string.isRequired,
    widgetIcon: PropTypes.node.isRequired,
    appIndexName: PropTypes.string.isRequired,
    appMinimize: PropTypes.string.isRequired,
    appOpen: PropTypes.string.isRequired
};
