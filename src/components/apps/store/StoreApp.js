import React, { useContext } from 'react';
import { IndexContext } from '../../../contexts/indexContext';
import FolderApp from '../../folder/FolderApp';

const StoreApp = () => {
    const { index } = useContext(IndexContext);

    return (
        <FolderApp
            appMinimize={'storeMinimize'}
            appOpen={'storeOpen'}
            appIndexName='store'
            appIndexValue={index.store}
            folderName='Store'
            marginLeft='4rem'
            marginTop='4rem'
        >
            Store
        </FolderApp>
    );
};
export default StoreApp;
