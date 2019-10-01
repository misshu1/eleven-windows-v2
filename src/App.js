import React from 'react';
import { ThemeStateProvider } from './contexts/themeContext';
import WindowsApp from './components/windows/WindowsApp';
import { NotificationProvider } from './contexts/notificationContext';

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
