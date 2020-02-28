import React, { useContext } from 'react';
import { TaskbarContext } from '../../../contexts/taskbarContext';
import { FolderContext } from '../../../contexts/folderContext';
import { Widget } from './style';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';

const WidgetApp = props => {
    const { openFolder, activeFolder, minimizeUp } = useContext(FolderContext);
    const { appId, iconDisplayName, widgetIcon } = props;
    const { closeApp } = useContext(TaskbarContext);

    const start = () => {
        openFolder(appId);
        activeFolder(appId);
        minimizeUp(appId);
        closeApp('startMenuOpen');
    };

    return (
        <Tooltip title={iconDisplayName} placement='top' enterDelay={500}>
            <Widget onClick={start}>{widgetIcon}</Widget>
        </Tooltip>
    );
};

export default WidgetApp;

WidgetApp.propTypes = {
    iconDisplayName: PropTypes.string.isRequired,
    widgetIcon: PropTypes.node.isRequired,
    appId: PropTypes.number.isRequired
};
