import React, { useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TaskbarContext } from '../../../contexts/taskbarContext';
import { FolderContext } from '../../../contexts/folderContext';
import { IndexContext } from '../../../contexts/indexContext';
import { Widget } from './style';
import Tooltip from '@material-ui/core/Tooltip';

const WidgetApp = props => {
    const {
        iconDisplayName,
        widgetIcon,
        fontIcon,
        appIndexName,
        appMinimize,
        appOpen,
        useWidgetIcon
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
        closeApp('startMenuOpen');
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
        <Tooltip title={iconDisplayName} placement='top' enterDelay={500}>
            <Widget onClick={start}>
                {useWidgetIcon && (
                    <img
                        src={widgetIcon}
                        alt={appOpen}
                        aria-label={appOpen}
                        draggable='false'
                    />
                )}
                {!useWidgetIcon && <FontAwesomeIcon icon={fontIcon} />}
            </Widget>
        </Tooltip>
    );
};

export default WidgetApp;

WidgetApp.propTypes = {
    iconDisplayName: PropTypes.string.isRequired,
    useWidgetIcon: PropTypes.bool.isRequired,
    widgetIcon: PropTypes.node.isRequired,
    fontIcon: PropTypes.array.isRequired,
    appIndexName: PropTypes.string.isRequired,
    appMinimize: PropTypes.string.isRequired,
    appOpen: PropTypes.string.isRequired
};
