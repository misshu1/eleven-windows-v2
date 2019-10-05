import React, { useContext } from 'react';
import { FolderContext } from '../../../contexts/FolderContext';
import { IndexContext } from '../../../contexts/indexContext';
import FolderApp from '../../folder/FolderApp';

const SettingsApp = () => {
    const { folder } = useContext(FolderContext);
    const { index } = useContext(IndexContext);
    return (
        <FolderApp
            appMinimize={'settingsMinimize'}
            appOpen={'settingsOpen'}
            appIndexName='settings'
            appIndexValue={index.settings}
            folderName='Settings'
            width='20rem'
            linkMobile='settings'
            open={folder.settingsOpen}
        >
            lasdorasdeasdasasd
        </FolderApp>
    );
};
export default SettingsApp;
