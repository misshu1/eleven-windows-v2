import React from 'react';
import FolderApp from 'components/folder/FolderApp';
import { Container } from './style';

const TermsApp = () => {
    return (
        <FolderApp appId={9} marginLeft={170} marginTop={120}>
            <Container>terms here</Container>
        </FolderApp>
    );
};

export default TermsApp;
