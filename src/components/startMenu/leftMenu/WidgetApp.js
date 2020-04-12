import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from 'prop-types';
import React, { useContext, useRef } from 'react';

import { useDispatchFolderContext } from '../../../contexts/folderContext';
import { TaskbarContext } from '../../../contexts/taskbarContext';
import { Widget } from './style';

const WidgetApp = (props) => {
    const { openFolder, activeFolder, minimizeUp } = useDispatchFolderContext();
    const { appId, iconDisplayName, widgetIcon } = props;
    const { closeApp } = useContext(TaskbarContext);

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
    appId: PropTypes.number.isRequired,
};
