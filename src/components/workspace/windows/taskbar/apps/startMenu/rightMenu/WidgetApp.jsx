import PropTypes from 'prop-types';
import React, { useRef } from 'react';

import { useDispatchFolderContext } from 'contexts';
import { useStartMenuContext } from '../../../contexts/startMenuContext';
import { Widget } from './style';

const WidgetApp = (props) => {
    const { appId, widgetIcon, iconDisplayName, animationDuration } = props;
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
        <Widget animationDuration={animationDuration} onClick={start}>
            {widgetIcon}
            <span>{iconDisplayName}</span>
        </Widget>
    );
};

export default WidgetApp;

WidgetApp.propTypes = {
    appId: PropTypes.number.isRequired,
    widgetIcon: PropTypes.node.isRequired,
    iconDisplayName: PropTypes.string.isRequired,
    animationDuration: PropTypes.number.isRequired
};
