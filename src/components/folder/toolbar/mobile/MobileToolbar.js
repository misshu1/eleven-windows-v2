import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from 'prop-types';
import React from 'react';

import BackButton from './BackButton';
import { Name, NameBar } from './style';

const MobileToolbar = (props) => {
    const { folderName, toolbarMenu, toggleDrawer, page, setPage } = props;

    return (
        <NameBar>
            <BackButton setPage={setPage} page={page} />
            <Name>{folderName}</Name>
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
