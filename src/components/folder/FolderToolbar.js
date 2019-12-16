import React from 'react';
import { Name, NameBar, Buttons } from './style';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from 'prop-types';

const FolderToolbar = props => {
    const { folderName, minimize, quitApp, toolbarMenu, toggleDrawer } = props;

    return (
        <NameBar>
            {toolbarMenu && (
                <div className='menu' onClick={toggleDrawer}>
                    <FontAwesomeIcon icon={['fas', 'bars']} size='lg' />
                </div>
            )}
            <Name className='handle'>{folderName}</Name>
            <Buttons>
                <Tooltip title='Minimize' placement='top' enterDelay={1000}>
                    <div onClick={minimize}>
                        <FontAwesomeIcon
                            icon={['fas', 'window-minimize']}
                            size='sm'
                        />
                    </div>
                </Tooltip>
                <Tooltip title='Close' placement='top' enterDelay={1000}>
                    <Link to='/' className='closeBtnMobile'>
                        <FontAwesomeIcon icon={['fas', 'times']} size='lg' />
                    </Link>
                </Tooltip>
                <Tooltip title='Close' placement='top' enterDelay={1000}>
                    <div className='closeBtnDesktop' onClick={quitApp}>
                        <FontAwesomeIcon icon={['fas', 'times']} size='lg' />
                    </div>
                </Tooltip>
            </Buttons>
        </NameBar>
    );
};

export default FolderToolbar;

FolderToolbar.propTypes = {
    folderName: PropTypes.string.isRequired,
    minimize: PropTypes.func.isRequired,
    quitApp: PropTypes.func.isRequired
};
