import React, { useContext, Suspense } from 'react';
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
import SpinnerApp from '../style/SpinnerApp';
import TaskbarLinuxApp from '../workspace/linux/taskbar/TaskbarLinuxApp';
import TaskbarWindowsApp from '../workspace/windows/taskbar/TaskbarWindowsApp';

const TaskbarApp = () => {
    const { currentOS } = useContext(ThemeContext);

    return ReactDOM.createPortal(
        <>
            {currentOS === OS_THEME.windows && (
                // <Taskbar onClick={closeAllApps}>
                //     <LogoIconApp />
                //     <OpenApps />
                //     <CartIconApp />
                //     <Suspense fallback={<SpinnerApp delay={200} />}>
                //         {startMenuOpen && <StartMenuApp />}
                //     </Suspense>{' '}
                //     <LanguageIconApp />
                //     <ClockIconApp />
                //     <NotificationIconApp />
                // </Taskbar>
                <TaskbarWindowsApp />
            )}
            {currentOS === OS_THEME.linux && <TaskbarLinuxApp />}
        </>,
        document.querySelector('#taskbar')
    );
};

export default TaskbarApp;
