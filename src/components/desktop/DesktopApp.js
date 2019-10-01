import React, { useContext } from 'react';
import { Desktop } from './style';
import { TaskbarContext } from '../../contexts/taskbarContext';

const DesktopApp = props => {
    const { closeAllApps } = useContext(TaskbarContext);

    return (
        <Desktop
            onClick={() => {
                closeAllApps();
            }}
        ></Desktop>
    );
};

export default DesktopApp;
