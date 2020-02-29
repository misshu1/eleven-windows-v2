import React, { useContext } from 'react';
import { GlobalAppContext } from '../../../contexts/globalContext';
import { TaskbarContext } from '../../../contexts/taskbarContext';
import { FolderContext } from '../../../contexts/folderContext';
import { Widget } from './style';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const WidgetApp = props => {
    const {
        appId,
        link,
        widgetIcon,
        iconDisplayName,
        animationDuration
    } = props;
    const { openFolder, activeFolder, minimizeUp } = useContext(FolderContext);
    const {
        globalApp: { isMobile }
    } = useContext(GlobalAppContext);
    const { closeApp } = useContext(TaskbarContext);

    const start = () => {
        openFolder(appId);
        activeFolder(appId);
        minimizeUp(appId);
        closeApp('startMenuOpen');
    };

    return (
        <>
            {isMobile ? (
                <Widget onClick={() => closeApp('startMenuOpen')}>
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
    animationDuration: PropTypes.number.isRequired
};
