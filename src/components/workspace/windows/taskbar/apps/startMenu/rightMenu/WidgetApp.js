import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import { useDispatchFolderContext } from '../../../../../../../contexts/folderContext';
import useMediaQuery from '../../../../../../../hooks/useMediaQuery';
import { useStartMenuContext } from '../../../contexts/startMenuContext';
import { Widget } from './style';

const WidgetApp = (props) => {
    const {
        appId,
        link,
        widgetIcon,
        iconDisplayName,
        animationDuration,
    } = props;
    const { openFolder, activeFolder, minimizeUp } = useDispatchFolderContext();
    const { closeStartMenu } = useStartMenuContext();
    const isMobile = useMediaQuery('(max-width: 450px)');

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
        <>
            {isMobile ? (
                <Widget onClick={closeStartMenu}>
                    <Link to={link}>
                        {widgetIcon}
                        <span>{iconDisplayName}</span>
                    </Link>
                </Widget>
            ) : (
                <Widget animationDuration={animationDuration} onClick={start}>
                    {widgetIcon}
                    <span>{iconDisplayName}</span>
                </Widget>
            )}
        </>
    );
};

export default WidgetApp;

WidgetApp.propTypes = {
    appId: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,
    widgetIcon: PropTypes.node.isRequired,
    iconDisplayName: PropTypes.string.isRequired,
    animationDuration: PropTypes.number.isRequired,
};
