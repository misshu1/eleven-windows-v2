import PropTypes from 'prop-types';
import React, { memo, useRef } from 'react';

import { useDispatchFolderContext } from 'contexts';
import { IconContainer } from './style';

const DesktopIconApp = memo((props) => {
    const { openFolder, activeFolder, minimizeUp } = useDispatchFolderContext();
    const { appId, widgetIcon, iconName } = props;

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
    };

    return (
        <IconContainer tabIndex='0'>
            <div className='icon' onDoubleClick={start}>
                {widgetIcon}
                <div>{iconName}</div>
            </div>
        </IconContainer>
    );
}, checkProps);

function checkProps(prevState, nextState) {
    return (
        prevState.widgetIcon === nextState.widgetIcon &&
        prevState.iconName === nextState.iconName &&
        prevState.appId === nextState.appId
    );
}

DesktopIconApp.displayName = 'DesktopIconApp';

export default DesktopIconApp;

DesktopIconApp.propTypes = {
    appId: PropTypes.number.isRequired,
    widgetIcon: PropTypes.node.isRequired,
    iconName: PropTypes.node.isRequired
};
