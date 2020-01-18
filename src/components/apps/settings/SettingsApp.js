import React from 'react';
import { Container } from './style';
import Customize from './Customize';
import FolderApp from '../../folder/FolderApp';
import Resize from './Resize';
import Language from './Language';
import Notification from './Notification';

const SettingsApp = () => {
    return (
        <FolderApp appId={1} marginLeft='6rem' marginTop='6rem'>
            <Container>
                <Customize />
                <Language />
                <Resize />
                <Notification />
            </Container>
        </FolderApp>
    );
};
export default SettingsApp;
