import React from 'react';
import { ThemeStateProvider } from './contexts/themeContext';
import WorkspaceApp from './components/workspace/WorkspaceApp';
import { NotificationProvider } from './contexts/notificationContext';
import { GlobalAppProvider } from './contexts/GlobalContext';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faListAlt,
    faCheckSquare,
    faExclamationTriangle,
    faTimes,
    faSitemap,
    faCog,
    faWindowMinimize,
    faUserCircle,
    faPowerOff
} from '@fortawesome/free-solid-svg-icons';
import { faCommentAlt } from '@fortawesome/free-regular-svg-icons';
library.add(
    faCommentAlt,
    faListAlt,
    faCheckSquare,
    faExclamationTriangle,
    faTimes,
    faSitemap,
    faCog,
    faWindowMinimize,
    faUserCircle,
    faPowerOff
);

const App = () => {
    return (
        <GlobalAppProvider>
            <ThemeStateProvider>
                <NotificationProvider>
                    <WorkspaceApp />
                </NotificationProvider>
            </ThemeStateProvider>
        </GlobalAppProvider>
    );
};

export default App;
