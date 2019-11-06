import React from 'react';
import { SettingsContainer } from '../style';
import { Link } from 'react-router-dom';
import cogIcon from '../../../assets/images/icons/cog.svg';
import Tooltip from '@material-ui/core/Tooltip';

const SettingsIconApp = () => {
    return (
        <Tooltip title='Settings' placement='top' enterDelay={500}>
            <SettingsContainer>
                <Link to={'/settings'} aria-label='settings'>
                    <img src={cogIcon} alt='settings' draggable='false' />
                </Link>
            </SettingsContainer>
        </Tooltip>
    );
};

export default SettingsIconApp;
