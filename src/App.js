import React from 'react';
import { ThemeStateProvider } from './contexts/themeContext';
import WindowsApp from './components/windows/WindowsApp';
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
    faWindowMinimize
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
    faWindowMinimize
);

const App = () => {
    return (
        <GlobalAppProvider>
            <ThemeStateProvider>
                <NotificationProvider>
                    <WindowsApp />
                </NotificationProvider>
            </ThemeStateProvider>
        </GlobalAppProvider>
    );
};

export default App;
