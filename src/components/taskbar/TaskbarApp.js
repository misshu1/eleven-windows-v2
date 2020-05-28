import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';

import { useSettingsContext } from '../../contexts/settingsContext';
import SpinnerApp from '../style/SpinnerApp';

const TaskbarWindowsApp = lazy(() =>
    import('../workspace/windows/taskbar/TaskbarWindowsApp')
);
const TaskbarLinuxApp = lazy(() =>
    import('../workspace/linux/taskbar/TaskbarLinuxApp')
);

const TaskbarApp = () => {
    const {
        isLinuxSelected,
        isWindowsSelected,
        isMobileSelected,
    } = useSettingsContext();

    return ReactDOM.createPortal(
        <>
            {(isWindowsSelected() || isMobileSelected()) && (
                <Suspense fallback={<SpinnerApp delay={200} />}>
                    <TaskbarWindowsApp />
                </Suspense>
            )}
            {isLinuxSelected() && (
                <Suspense fallback={<SpinnerApp delay={200} />}>
                    <TaskbarLinuxApp />
                </Suspense>
            )}
        </>,
        document.querySelector('#taskbar')
    );
};

export default TaskbarApp;
