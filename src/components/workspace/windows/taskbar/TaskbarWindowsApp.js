import React from 'react';

import { StartMenuProvider } from './contexts/startMenuContext';
import StartMenuAndLogo from './StartMenuAndLogo';
import { Container } from './style';

const TaskbarWindowsApp = () => {
    return (
        <Container>
            <StartMenuProvider>
                <StartMenuAndLogo></StartMenuAndLogo>
            </StartMenuProvider>
            {/* <OpenApps />
            <CartIconApp />
            <LanguageIconApp />
            <ClockIconApp />
            <NotificationIconApp /> */}
        </Container>
    );
};

export default TaskbarWindowsApp;
