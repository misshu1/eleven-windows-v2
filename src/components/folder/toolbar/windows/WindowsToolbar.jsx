import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';

import { useDispatchFolderContext, useFolderContext } from '../../../../contexts/folderContext';
import BackButton from './BackButton';
import { Buttons, Name, NameBar } from './style';

const WindowsToolbar = (props) => {
    const { getFolder } = useFolderContext();
    const {
        maximizeUp,
        maximizeDown,
        minimizeDown,
    } = useDispatchFolderContext();
    const { appId, quitApp, toolbarMenu, toggleDrawer, setPage, page } = props;

    const folder = getFolder(appId);

    const minimize = useCallback(() => {
        minimizeDown(appId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const maximizeFolderUp = useCallback(() => {
        maximizeUp(appId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const maximizeFolderDown = useCallback(() => {
        maximizeDown(appId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <NameBar>
            {page && <BackButton setPage={setPage} page={page} />}
            {toolbarMenu && (
                <Tooltip title='Menu' placement='top' enterDelay={500}>
                    <div className='menu' onClick={toggleDrawer}>
                        <FontAwesomeIcon
                            icon={['fas', 'ellipsis-v']}
                            size='lg'
                        />
                    </div>
                </Tooltip>
            )}
            <Name className='handle' toolbarMenu={!!toolbarMenu} page={!!page}>
                {folder.appName}
            </Name>
            <Buttons>
                <Tooltip title='Minimize' placement='top' enterDelay={500}>
                    <div onClick={minimize}>
                        <FontAwesomeIcon
                            icon={['fas', 'window-minimize']}
                            size='sm'
                        />
                    </div>
                </Tooltip>
                {folder.allowMaximize && (
                    <>
                        {!folder.isMaximize && (
                            <Tooltip
                                title='Maximize'
                                placement='top'
                                enterDelay={500}
                            >
                                <div onClick={maximizeFolderUp}>
                                    <FontAwesomeIcon icon={['fas', 'square']} />
                                </div>
                            </Tooltip>
                        )}
                        {folder.isMaximize && (
                            <Tooltip
                                title='Restore back'
                                placement='bottom'
                                enterDelay={500}
                            >
                                <div onClick={maximizeFolderDown}>
                                    <FontAwesomeIcon
                                        icon={['fas', 'clone']}
                                        transform={{
                                            rotate: 180,
                                        }}
                                    />
                                </div>
                            </Tooltip>
                        )}
                    </>
                )}
                <Tooltip title='Close' placement='top' enterDelay={500}>
                    <div className='closeBtn' onClick={quitApp}>
                        <FontAwesomeIcon icon={['fas', 'times']} size='lg' />
                    </div>
                </Tooltip>
            </Buttons>
        </NameBar>
    );
};

export default WindowsToolbar;

WindowsToolbar.propTypes = {
    appId: PropTypes.number.isRequired,
    quitApp: PropTypes.func.isRequired,
    toolbarMenu: PropTypes.array,
    toggleDrawer: PropTypes.func,
};
