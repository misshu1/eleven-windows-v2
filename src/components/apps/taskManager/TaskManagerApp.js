import React, { useContext } from 'react';
import { FolderContext } from '../../../contexts/FolderContext';
import { IndexContext } from '../../../contexts/indexContext';
import FolderApp from '../../folder/FolderApp';

const TaskManagerApp = () => {
    const { folder } = useContext(FolderContext);
    const { index } = useContext(IndexContext);
    return (
        <FolderApp
            appMinimize={'taskManagerMinimize'}
            appOpen={'taskManagerOpen'}
            appIndexName='taskManager'
            appIndexValue={index.taskManager}
            folderName='Task Manager'
            open={folder.taskManagerOpen}
            marginLeft='7rem'
            marginTop='7rem'
        >
            task manager
        </FolderApp>
    );
};
export default TaskManagerApp;
