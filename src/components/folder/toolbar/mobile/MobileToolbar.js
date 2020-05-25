import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';

import { Name, NameBar } from './style';

const MobileToolbar = (props) => {
    const { folderName, toolbarMenu, toggleDrawer } = props;
    const history = useHistory();

    return (
        <NameBar>
            <Tooltip title='Back' placement='top' enterDelay={500}>
                <div className='backBtn' onClick={() => history.push('/')}>
                    <FontAwesomeIcon icon={['fas', 'arrow-left']} size='lg' />
                </div>
            </Tooltip>
            <Name toolbarMenu={toolbarMenu}>{folderName}</Name>
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
        </NameBar>
    );
};

export default MobileToolbar;

MobileToolbar.propTypes = {
    folderName: PropTypes.string.isRequired,
    toolbarMenu: PropTypes.array,
    toggleDrawer: PropTypes.func,
};
