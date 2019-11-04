import React from 'react';
import { ThemeStateProvider } from './contexts/themeContext';
import WorkspaceApp from './components/workspace/WorkspaceApp';
import { NotificationProvider } from './contexts/notificationContext';
import { GlobalAppProvider } from './contexts/GlobalContext';
import { TaskbarProvider } from './contexts/taskbarContext';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faCheckSquare,
    faExclamationTriangle,
    faTimes,
    faSitemap,
    faWindowMinimize,
    faUserCircle,
    faPowerOff,
    faSpinner,
    faExclamationCircle
} from '@fortawesome/free-solid-svg-icons';
import { faCommentAlt } from '@fortawesome/free-regular-svg-icons';
library.add(
    faCommentAlt,
    faCheckSquare,
    faExclamationTriangle,
    faTimes,
    faSitemap,
    faWindowMinimize,
    faUserCircle,
    faPowerOff,
    faSpinner,
    faExclamationCircle
);

const App = () => {
    return (
        <GlobalAppProvider>
            <TaskbarProvider>
                <ThemeStateProvider>
                    <NotificationProvider>
                        <WorkspaceApp />
                    </NotificationProvider>
                </ThemeStateProvider>
            </TaskbarProvider>
        </GlobalAppProvider>
    );
};

export default App;
