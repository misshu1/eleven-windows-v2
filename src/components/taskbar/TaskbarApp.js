import ReactDOM from 'react-dom';
import React, { useContext } from 'react';
import { TaskbarContext } from '../../contexts/taskbarContext';
import { Taskbar } from './style';
import NotificationIconApp from './icons/NotificationIconApp';
import LanguageIconApp from './icons/LanguageIconApp';
import ClockIconApp from './icons/ClockIconApp';
import CartIconApp from './icons/CartIconApp';
import LogoIconApp from './icons/LogoIconApp';
import OpenApps from './OpenApps';

const TaskbarApp = () => {
    const { closeAllApps } = useContext(TaskbarContext);

    return ReactDOM.createPortal(
        <Taskbar onClick={closeAllApps}>
            <LogoIconApp />
            <OpenApps />
            <CartIconApp />
            <LanguageIconApp />
            <ClockIconApp />
            <NotificationIconApp />
        </Taskbar>,
        document.querySelector('#taskbar')
    );
};

export default TaskbarApp;
