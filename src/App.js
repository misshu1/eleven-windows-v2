import React from 'react';
import { ThemeStateProvider } from './contexts/themeContext';
import WindowsApp from './components/windows/WindowsApp';

const App = () => {
    return (
        <ThemeStateProvider>
            <WindowsApp />
        </ThemeStateProvider>
    );
};

export default App;
