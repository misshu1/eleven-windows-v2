import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from 'prop-types';
import React from 'react';

import { useFolderContext } from '../../../../contexts/folderContext';
import BackButton from './BackButton';
import { Name, NameBar } from './style';

const MobileToolbar = (props) => {
    const { getFolder } = useFolderContext();
    const { appId, toolbarMenu, toggleDrawer, page, setPage } = props;
    const folder = getFolder(appId);

    return (
        <NameBar>
            <BackButton setPage={setPage} page={page} />
            <Name>{folder.appName}</Name>
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
    appId: PropTypes.number.isRequired,
    toolbarMenu: PropTypes.array,
    toggleDrawer: PropTypes.func,
};
