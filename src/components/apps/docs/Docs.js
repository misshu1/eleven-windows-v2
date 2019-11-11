import React, { useContext } from 'react';
import { FolderContext } from '../../../contexts/FolderContext';
import { IndexContext } from '../../../contexts/indexContext';
import FolderApp from '../../folder/FolderApp';

const DocsApp = () => {
    const { folder } = useContext(FolderContext);
    const { index } = useContext(IndexContext);
    return (
        <FolderApp
            appMinimize={'docsMinimize'}
            appOpen={'docsOpen'}
            appIndexName='docs'
            appIndexValue={index.docs}
            folderName='Docs'
            open={folder.docsOpen}
        >
            docs
        </FolderApp>
    );
};
export default DocsApp;
