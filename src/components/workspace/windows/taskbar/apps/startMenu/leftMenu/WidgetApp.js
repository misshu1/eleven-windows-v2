import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';

import { useDispatchFolderContext } from '../../../../../../../contexts/folderContext';
import { useStartMenuContext } from '../../../contexts/startMenuContext';
import { Widget } from './style';

const WidgetApp = ({ appId, iconDisplayName, widgetIcon }) => {
    const { openFolder, activeFolder, minimizeUp } = useDispatchFolderContext();
    const { closeStartMenu } = useStartMenuContext();

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
        closeStartMenu();
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
