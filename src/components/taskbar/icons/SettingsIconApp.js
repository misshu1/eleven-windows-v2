import React from 'react';
import { Link } from 'react-router-dom';
import { SettingsContainer } from '../style';
import cogIcon from '../../../assets/images/icons/cog.svg';

const SettingsIconApp = () => {
    return (
        <SettingsContainer>
            <Link to={'/settings'} aria-label='settings'>
                <img src={cogIcon} alt='settings' draggable='false' />
            </Link>
        </SettingsContainer>
    );
};

export default SettingsIconApp;
