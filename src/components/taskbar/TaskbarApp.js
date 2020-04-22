import React from 'react';
import ReactDOM from 'react-dom';

import { useSettingsContext } from '../../contexts/settingsContext';
import TaskbarLinuxApp from '../workspace/linux/taskbar/TaskbarLinuxApp';
import TaskbarWindowsApp from '../workspace/windows/taskbar/TaskbarWindowsApp';

const TaskbarApp = () => {
    const { isLinuxSelected, isWindowsSelected } = useSettingsContext();

    return ReactDOM.createPortal(
        <>
            {isWindowsSelected() && <TaskbarWindowsApp />}
            {isLinuxSelected() && <TaskbarLinuxApp />}
        </>,
        document.querySelector('#taskbar')
    );
};

export default TaskbarApp;
