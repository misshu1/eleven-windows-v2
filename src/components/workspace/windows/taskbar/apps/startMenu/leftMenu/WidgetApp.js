import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';

import { Widget } from './style';
import { useDispatchFolderContext } from '../../../../../../../contexts/folderContext';

const WidgetApp = (props) => {
    const { openFolder, activeFolder, minimizeUp } = useDispatchFolderContext();
    const { appId, iconDisplayName, widgetIcon, closeStartMenu } = props;

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
