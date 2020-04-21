import React, { useContext } from 'react';
import ReactDOM from 'react-dom';

import { ThemeContext } from '../../contexts/themeContext';
import TaskbarLinuxApp from '../workspace/linux/taskbar/TaskbarLinuxApp';
import TaskbarWindowsApp from '../workspace/windows/taskbar/TaskbarWindowsApp';

const TaskbarApp = () => {
    const { isLinuxSelected, isWindowsSelected } = useContext(ThemeContext);

    return ReactDOM.createPortal(
        <>
            {isWindowsSelected() && (
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
            {isLinuxSelected() && <TaskbarLinuxApp />}
        </>,
        document.querySelector('#taskbar')
    );
};

export default TaskbarApp;
