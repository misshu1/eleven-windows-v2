import React, { useContext } from 'react';
import { FolderContext, FOLDER_ACTIONS } from '../../../contexts/folderContext';
import { TaskbarContext } from '../../../contexts/taskbarContext';
import { Widget } from './style';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';

const WidgetApp = props => {
    const { appId, iconDisplayName, widgetIcon } = props;
    const { closeApp } = useContext(TaskbarContext);
    const { folderState, folderDispatch } = useContext(FolderContext);

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
        closeApp('startMenuOpen');
    };

    return (
        <Tooltip title={iconDisplayName} placement='top' enterDelay={500}>
            <Widget onClick={start}>
                <img
                    src={widgetIcon}
                    alt={iconDisplayName}
                    aria-label={iconDisplayName}
                    draggable='false'
                />
            </Widget>
        </Tooltip>
    );
};

export default WidgetApp;

WidgetApp.propTypes = {
    iconDisplayName: PropTypes.string.isRequired,
    widgetIcon: PropTypes.node.isRequired,
    appId: PropTypes.number.isRequired
};
