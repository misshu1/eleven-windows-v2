import React, { useContext } from 'react';
import { IndexContext } from '../../../contexts/indexContext';
import FolderApp from '../../folder/FolderApp';

const CalculatorApp = () => {
    const { index } = useContext(IndexContext);

    return (
        <FolderApp
            appMinimize={'calculatorMinimize'}
            appOpen={'calculatorOpen'}
            appIndexName='calculator'
            appIndexValue={index.calculator}
            folderName='Calculator'
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
