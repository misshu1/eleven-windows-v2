import React from 'react';
import FolderApp from 'components/folder/FolderApp';
import { Container } from './style';

const PrivacyApp = () => {
    return (
        <FolderApp appId={10} marginLeft={170} marginTop={120}>
            <Container>privacy policy here</Container>
        </FolderApp>
    );
};

export default PrivacyApp;
