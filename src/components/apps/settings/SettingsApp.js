import React from 'react';
import { Container } from './style';
import Background from './Background';
import FolderApp from '../../folder/FolderApp';
import Resize from './Resize';
import Language from './Language';
import Notification from './Notification';
import Theme from './Theme';

const SettingsApp = () => {
    return (
        <FolderApp appId={1} marginLeft='6rem' marginTop='6rem'>
            <Container>
                <Theme />
                <Background />
                <Language />
                <Resize />
                <Notification />
            </Container>
        </FolderApp>
    );
};
export default SettingsApp;
