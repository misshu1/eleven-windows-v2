import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IconContainer } from './style';
import { GlobalAppContext } from '../../contexts/GlobalContext';
import { FolderContext } from '../../contexts/FolderContext';
import { IndexContext } from '../../contexts/indexContext';

const DesktopIconApp = props => {
    const { globalApp } = useContext(GlobalAppContext);
    const { startApp } = useContext(FolderContext);
    const { activeWindow } = useContext(IndexContext);

    return (
        <IconContainer tabIndex='0'>
            {globalApp.isMobile ? (
                <Link to={props.linkMobile}>
                    <img
                        src={props.folderIcon}
                        alt={props.iconName}
                        aria-label={props.iconName}
                    />
                    <div>{props.iconName}</div>
                </Link>
            ) : (
                <div
                    className='icon'
                    onDoubleClick={() => {
                        startApp(
                            props.appOpen,
                            props.folderIcon,
                            props.appIndexName,
                            props.appMinimize
                        );
                        activeWindow(props.appIndexName);
                    }}
                >
                    <img
                        src={props.folderIcon}
                        alt={props.iconName}
                        aria-label={props.iconName}
                    />
                    <div>{props.iconName}</div>
                </div>
            )}
        </IconContainer>
    );
};

export default DesktopIconApp;
