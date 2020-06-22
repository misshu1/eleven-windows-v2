import React from 'react';

import FolderApp from '../../folder/FolderApp';
import Customize from './Customize';
import Language from './Language';
import Notification from './Notification';
import { Container } from './style';

const SettingsApp = () => {
    return (
        <FolderApp appId={1} marginLeft={100} marginTop={100}>
            <Container>
                <Customize />
                <Language />
                <Notification />
            </Container>
        </FolderApp>
    );
};
export default SettingsApp;
