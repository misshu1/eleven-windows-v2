import React from 'react';
import { SettingsContainer } from '../style';
import { Link } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';
import SettingsIcon from '../../../assets/images/icons/SettingsIcon';

const SettingsIconApp = () => {
    return (
        <Tooltip title='Settings' placement='top' enterDelay={500}>
            <SettingsContainer>
                <Link to={'/settings'} aria-label='settings'>
                    <SettingsIcon />
                </Link>
            </SettingsContainer>
        </Tooltip>
    );
};

export default SettingsIconApp;
