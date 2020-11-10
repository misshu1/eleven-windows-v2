import React from 'react';
import FolderApp from 'components/folder/FolderApp';
import { Container } from './style';

const MyAccountApp = () => {
    return (
        <FolderApp appId={7} marginLeft={170} marginTop={120}>
            <Container>ceva</Container>
        </FolderApp>
    );
};

export default MyAccountApp;
