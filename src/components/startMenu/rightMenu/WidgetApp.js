import React, { useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { GlobalAppContext } from '../../../contexts/globalContext';
import { FolderContext, FOLDER_ACTIONS } from '../../../contexts/folderContext';
import { TaskbarContext } from '../../../contexts/taskbarContext';
import { Widget } from './style';

const WidgetApp = props => {
    const {
        appId,
        link,
        widgetIcon,
        iconDisplayName,
        animationDuration
    } = props;
    const { globalApp } = useContext(GlobalAppContext);
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

    const startMobile = useCallback(() => {
        closeApp('startMenuOpen');
    }, [closeApp]);

    return (
        <React.Fragment>
            {globalApp.isMobile ? (
                <Widget onClick={startMobile}>
                    <Link to={link}>
                        <img
                            src={widgetIcon}
                            alt={iconDisplayName}
                            aria-label={iconDisplayName}
                            draggable='false'
                        />
                        <span>{iconDisplayName}</span>
                    </Link>
                </Widget>
            ) : (
                <Widget animationDuration={animationDuration} onClick={start}>
                    <img
                        src={widgetIcon}
                        alt={iconDisplayName}
                        aria-label={iconDisplayName}
                        draggable='false'
                    />
                    <span>{iconDisplayName}</span>
                </Widget>
            )}
        </React.Fragment>
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
