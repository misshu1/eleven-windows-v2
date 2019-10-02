import React from 'react';
import { ThemeStateProvider } from './contexts/themeContext';
import WindowsApp from './components/windows/WindowsApp';
import { NotificationProvider } from './contexts/notificationContext';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faListAlt,
    faCheckSquare,
    faExclamationTriangle,
    faTimes,
    faSitemap,
    faCog
} from '@fortawesome/free-solid-svg-icons';
import { faCommentAlt } from '@fortawesome/free-regular-svg-icons';
library.add(
    faCommentAlt,
    faListAlt,
    faCheckSquare,
    faExclamationTriangle,
    faTimes,
    faSitemap,
    faCog
);

const App = () => {
    return (
        <NotificationProvider>
            <ThemeStateProvider>
                <WindowsApp />
            </ThemeStateProvider>
        </NotificationProvider>
    );
};

export default App;
