import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IconContainer } from './style';
import { GlobalAppContext } from '../../contexts/globalContext';
import { FolderContext, FOLDER_ACTIONS } from '../../contexts/folderContext';

const DesktopIconApp = props => {
    const { folderState, folderDispatch } = useContext(FolderContext);
    const { link, appId, widgetIcon, iconName } = props;
    const { globalApp } = useContext(GlobalAppContext);

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
    };

    return (
        <IconContainer tabIndex='0'>
            {globalApp.isMobile ? (
                <Link to={link}>
                    {widgetIcon}
                    <div>{iconName}</div>
                </Link>
            ) : (
                <div className='icon' onDoubleClick={start}>
                    {widgetIcon}
                    <div>{iconName}</div>
                </div>
            )}
        </IconContainer>
    );
};

export default DesktopIconApp;

DesktopIconApp.propTypes = {
    appId: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,
    widgetIcon: PropTypes.node.isRequired,
    iconName: PropTypes.node.isRequired
};
