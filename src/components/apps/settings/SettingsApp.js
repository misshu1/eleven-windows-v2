import React, { useContext } from 'react';
import { Container } from './style';
import { IndexContext } from '../../../contexts/indexContext';
import Background from './Background';
import FolderApp from '../../folder/FolderApp';
import Resize from './Resize';
import Language from './Language';
import Notification from './Notification';
import Theme from './Theme';

const SettingsApp = () => {
    const { index } = useContext(IndexContext);

    return (
        <FolderApp
            appMinimize={'settingsMinimize'}
            appOpen={'settingsOpen'}
            appIndexName='settings'
            appIndexValue={index.settings}
            folderName='Settings'
            marginLeft='6rem'
            marginTop='6rem'
        >
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
