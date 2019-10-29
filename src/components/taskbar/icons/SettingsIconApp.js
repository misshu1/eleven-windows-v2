import React from 'react';
import { Link } from 'react-router-dom';
import { SettingsContainer } from '../style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SettingsIconApp = () => {
    return (
        <SettingsContainer>
            <Link to={'/settings'} aria-label='settings'>
                <FontAwesomeIcon icon={['fa', 'cog']} />
            </Link>
        </SettingsContainer>
    );
};

export default SettingsIconApp;
