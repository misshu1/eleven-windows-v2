import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { TaskbarContext } from '../../contexts/taskbarContext';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { Taskbar } from './style';
import ClockApp from './ClockApp';
import Notification from './Notification';
import Settings from './Settings';
import Language from './Language';
import OpenApps from './OpenApps';
import LogoApp from './LogoApp';
library.add(faCommentAlt);

const TaskbarApp = props => {
    const { closeAllApps } = useContext(TaskbarContext);

    return ReactDOM.createPortal(
        <Taskbar onClick={closeAllApps}>
            <LogoApp />
            <OpenApps />
            <Language />
            <ClockApp />
            <Settings />
            <Notification />
        </Taskbar>,
        document.querySelector('#taskbar')
    );
};

export default TaskbarApp;
