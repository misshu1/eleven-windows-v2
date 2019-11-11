import React, { useContext } from 'react';
import { FolderContext } from '../../../contexts/FolderContext';
import { IndexContext } from '../../../contexts/indexContext';
import FolderApp from '../../folder/FolderApp';

const StoreApp = () => {
    const { folder } = useContext(FolderContext);
    const { index } = useContext(IndexContext);
    return (
        <FolderApp
            appMinimize={'storeMinimize'}
            appOpen={'storeOpen'}
            appIndexName='store'
            appIndexValue={index.store}
            folderName='Store'
            open={folder.storeOpen}
            marginLeft='4rem'
            marginTop='4rem'
        >
            Store
        </FolderApp>
    );
};
export default StoreApp;
