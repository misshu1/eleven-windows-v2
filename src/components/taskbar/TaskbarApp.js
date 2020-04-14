import React, { useContext } from 'react';
import ReactDOM from 'react-dom';

import { TaskbarContext } from '../../contexts/taskbarContext';
import { OS_THEME, ThemeContext } from '../../contexts/themeContext';
import CartIconApp from './icons/CartIconApp';
import ClockIconApp from './icons/ClockIconApp';
import LanguageIconApp from './icons/LanguageIconApp';
import LogoIconApp from './icons/LogoIconApp';
import NotificationIconApp from './icons/NotificationIconApp';
import OpenApps from './OpenApps';
import { Taskbar } from './style';

const TaskbarApp = () => {
    const { currentOS } = useContext(ThemeContext);
    const { closeAllApps } = useContext(TaskbarContext);

    return ReactDOM.createPortal(
        <>
            {currentOS === OS_THEME.windows && (
                <Taskbar onClick={closeAllApps}>
                    <LogoIconApp />
                    <OpenApps />
                    <CartIconApp />
                    <LanguageIconApp />
                    <ClockIconApp />
                    <NotificationIconApp />
                </Taskbar>
            )}
            {currentOS === OS_THEME.linux && <OpenApps />}
        </>,
        document.querySelector('#taskbar')
    );
};

export default TaskbarApp;
