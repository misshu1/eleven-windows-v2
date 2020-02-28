import React, { useContext } from 'react';
import { TaskbarContext } from '../../../contexts/taskbarContext';
import { FolderContext } from '../../../contexts/folderContext';
import { Widget } from './style';
import PropTypes from 'prop-types';

const WidgetApp = props => {
    const { openFolder, activeFolder, minimizeUp } = useContext(FolderContext);
    const { iconDisplayName, widgetIcon, appId } = props;
    const { closeApp } = useContext(TaskbarContext);

    const start = () => {
        openFolder(appId);
        activeFolder(appId);
        minimizeUp(appId);
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
    appId: PropTypes.number.isRequired
};
