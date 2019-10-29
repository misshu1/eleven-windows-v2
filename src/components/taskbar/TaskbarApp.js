import React, { useContext, useCallback } from 'react';
import { TaskbarContext } from '../../contexts/taskbarContext';
import { Taskbar } from './style';
import NotificationIconApp from './icons/NotificationIconApp';
import ReactDOM from 'react-dom';
import ClockIconApp from './icons/ClockIconApp';
import SettingsIconApp from './icons/SettingsIconApp';
import LanguageIconApp from './icons/LanguageIconApp';
import OpenApps from './OpenApps';
import LogoIconApp from './icons/LogoIconApp';

const TaskbarApp = () => {
    const { closeAllApps } = useContext(TaskbarContext);

    const close = useCallback(() => {
        closeAllApps();
    }, [closeAllApps]);

    return ReactDOM.createPortal(
        <Taskbar onClick={close}>
            <LogoIconApp />
            <OpenApps />
            <LanguageIconApp />
            <ClockIconApp />
            <SettingsIconApp />
            <NotificationIconApp />
        </Taskbar>,
        document.querySelector('#taskbar')
    );
};

export default TaskbarApp;
