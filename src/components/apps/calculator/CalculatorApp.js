import React, { useContext } from 'react';
import { FolderContext } from '../../../contexts/FolderContext';
import { IndexContext } from '../../../contexts/indexContext';
import FolderApp from '../../folder/FolderApp';

const CalculatorApp = () => {
    const { folder } = useContext(FolderContext);
    const { index } = useContext(IndexContext);
    return (
        <FolderApp
            appMinimize={'calculatorMinimize'}
            appOpen={'calculatorOpen'}
            appIndexName='calculator'
            appIndexValue={index.calculator}
            folderName='Calculator'
            open={folder.calculatorOpen}
            marginLeft='8rem'
            marginTop='8rem'
            height='42rem'
            width='21.5rem'
        >
            Calculator
        </FolderApp>
    );
};
export default CalculatorApp;
