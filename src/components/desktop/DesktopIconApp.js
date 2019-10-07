import React, { useContext, memo } from 'react';
import { Link } from 'react-router-dom';
import { IconContainer } from './style';
import { GlobalAppContext } from '../../contexts/GlobalContext';
import { FolderContext } from '../../contexts/FolderContext';
import { IndexContext } from '../../contexts/indexContext';

const DesktopIconApp = memo(props => {
    const {
        linkMobile,
        folderIcon,
        iconName,
        appIndexName,
        appMinimize,
        appOpen
    } = props;
    const { globalApp } = useContext(GlobalAppContext);
    const { startApp } = useContext(FolderContext);
    const { activeWindow } = useContext(IndexContext);

    return (
        <IconContainer tabIndex='0'>
            {globalApp.isMobile ? (
                <Link to={linkMobile}>
                    <img
                        src={folderIcon}
                        alt={iconName}
                        aria-label={iconName}
                    />
                    <div>{iconName}</div>
                </Link>
            ) : (
                <div
                    className='icon'
                    onDoubleClick={() => {
                        startApp(
                            appOpen,
                            folderIcon,
                            appIndexName,
                            appMinimize
                        );
                        activeWindow(appIndexName);
                    }}
                >
                    <img
                        src={folderIcon}
                        alt={iconName}
                        aria-label={iconName}
                    />
                    <div>{iconName}</div>
                </div>
            )}
        </IconContainer>
    );
});

export default DesktopIconApp;
