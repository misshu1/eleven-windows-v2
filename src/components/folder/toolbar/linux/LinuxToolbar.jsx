import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';

import {
    useDispatchFolderContext,
    useFolderContext
} from '../../../../contexts/folderContext';
import BackButton from './BackButton';
import { Buttons, Name, NameBar } from './style';

const LinuxToolbar = (props) => {
    const { getFolder } = useFolderContext();
    const {
        maximizeUp,
        maximizeDown,
        minimizeDown
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

    const toggleMaximize = useCallback(() => {
        if (folder.allowMaximize) {
            folder.isMaximize ? maximizeFolderDown() : maximizeFolderUp();
        }
    }, [folder, maximizeFolderDown, maximizeFolderUp]);

    return (
        <NameBar onDoubleClick={toggleMaximize}>
            {page && <BackButton setPage={setPage} page={page} />}
            {toolbarMenu && (
                <Tooltip title='Menu' placement='top' enterDelay={500}>
                    <div className='menuBtn' onClick={toggleDrawer}>
                        <span className='btn menu'>
                            <FontAwesomeIcon
                                icon={['fas', 'ellipsis-v']}
                                size='lg'
                            />
                        </span>
                    </div>
                </Tooltip>
            )}
            <Name className='handle' toolbarMenu={!!toolbarMenu} page={!!page}>
                {folder.appName}
            </Name>
            <Buttons>
                <Tooltip title='Minimize' placement='top' enterDelay={500}>
                    <div className='minimizeBtn' onClick={minimize}>
                        <span className='btn minimize'>
                            <FontAwesomeIcon
                                icon={['fas', 'window-minimize']}
                                size='sm'
                            />
                        </span>
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
                                <div
                                    className='maximizeBtn'
                                    onClick={maximizeFolderUp}
                                >
                                    <span className='btn maximize'>
                                        <FontAwesomeIcon
                                            icon={['fas', 'square']}
                                        />
                                    </span>
                                </div>
                            </Tooltip>
                        )}
                        {folder.isMaximize && (
                            <Tooltip
                                title='Restore back'
                                placement='bottom'
                                enterDelay={500}
                            >
                                <div
                                    className='maximizeBtn'
                                    onClick={maximizeFolderDown}
                                >
                                    <span className='btn maximize'>
                                        <FontAwesomeIcon
                                            icon={['fas', 'clone']}
                                            transform={{
                                                rotate: 180
                                            }}
                                        />
                                    </span>
                                </div>
                            </Tooltip>
                        )}
                    </>
                )}
                <Tooltip title='Close' placement='top' enterDelay={500}>
                    <div className='closeBtn' onClick={quitApp}>
                        <span className='btn close'>
                            <FontAwesomeIcon
                                icon={['fas', 'times']}
                                size='lg'
                            />
                        </span>
                    </div>
                </Tooltip>
            </Buttons>
        </NameBar>
    );
};

export default LinuxToolbar;

LinuxToolbar.propTypes = {
    appId: PropTypes.number.isRequired,
    quitApp: PropTypes.func.isRequired,
    toolbarMenu: PropTypes.array,
    toggleDrawer: PropTypes.func
};
