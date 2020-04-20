import React, { useContext } from 'react';
import ReactDOM from 'react-dom';

import { OS_THEME, ThemeContext } from '../../contexts/themeContext';
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
