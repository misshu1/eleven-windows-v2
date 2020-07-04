import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from 'prop-types';
import React from 'react';

import BackButton from './BackButton';
import { Buttons, Name, NameBar } from './style';

const WindowsToolbar = (props) => {
    const {
        folderName,
        minimize,
        quitApp,
        toolbarMenu,
        toggleDrawer,
        setPage,
        page,
    } = props;

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
                {folderName}
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
    folderName: PropTypes.string.isRequired,
    minimize: PropTypes.func.isRequired,
    quitApp: PropTypes.func.isRequired,
    toolbarMenu: PropTypes.array,
    toggleDrawer: PropTypes.func,
};
