import PropTypes from 'prop-types';
import React, { useContext, useRef } from 'react';

import { useDispatchFolderContext } from '../../../contexts/folderContext';
import { TaskbarContext } from '../../../contexts/taskbarContext';
import { Widget } from './style';

const WidgetApp = (props) => {
    const { openFolder, activeFolder, minimizeUp } = useDispatchFolderContext();
    const { iconDisplayName, widgetIcon, appId } = props;
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
        closeApp('notificationsOpen');
    };

    return (
        <Widget onClick={start}>
            {widgetIcon}
            <h5>{iconDisplayName}</h5>
        </Widget>
    );
};

export default WidgetApp;

WidgetApp.propTypes = {
    iconDisplayName: PropTypes.string.isRequired,
    widgetIcon: PropTypes.node.isRequired,
    appId: PropTypes.number.isRequired,
};
