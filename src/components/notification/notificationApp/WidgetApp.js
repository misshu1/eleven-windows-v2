import React, { useContext } from 'react';
import { FolderContext, FOLDER_ACTIONS } from '../../../contexts/folderContext';
import { TaskbarContext } from '../../../contexts/taskbarContext';
import { Widget } from './style';
import PropTypes from 'prop-types';

const WidgetApp = props => {
    const { folderState, folderDispatch } = useContext(FolderContext);
    const { closeApp } = useContext(TaskbarContext);
    const { iconDisplayName, widgetIcon, appId } = props;

    const start = () => {
        folderDispatch({
            type: FOLDER_ACTIONS.open,
            id: appId
        });

        folderDispatch({
            type: FOLDER_ACTIONS.active,
            id: appId
        });

        folderState.apps.map(item => {
            if (item.id === appId && item.isMinimize === true) {
                folderDispatch({
                    type: FOLDER_ACTIONS.minimize,
                    id: appId,
                    boolean: false
                });
            }
            return undefined;
        });
        closeApp('notificationsOpen');
    };

    return (
        <Widget onClick={start}>
            <img
                src={widgetIcon}
                alt={iconDisplayName}
                aria-label={iconDisplayName}
                draggable='false'
            />
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
