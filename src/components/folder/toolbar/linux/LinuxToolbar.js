import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from 'prop-types';
import React from 'react';

import { Buttons, Name, NameBar } from './style';

const LinuxToolbar = (props) => {
    const { folderName, minimize, quitApp, toolbarMenu, toggleDrawer } = props;

    return (
        <NameBar>
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
            <Name className='handle' toolbarMenu={toolbarMenu}>
                {folderName}
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
    folderName: PropTypes.string.isRequired,
    minimize: PropTypes.func.isRequired,
    quitApp: PropTypes.func.isRequired,
    toolbarMenu: PropTypes.array,
    toggleDrawer: PropTypes.func,
};
