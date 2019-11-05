import React, { useContext } from 'react';
import WorkspaceApp from './components/workspace/WorkspaceApp';
import { NotificationProvider } from './contexts/notificationContext';
import { TaskbarProvider } from './contexts/taskbarContext';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from './contexts/themeContext';
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
    const { theme } = useContext(ThemeContext);

    return (
        <TaskbarProvider>
            <ThemeProvider theme={theme}>
                <NotificationProvider>
                    <Switch>
                        <Route
                            exact
                            path='/login'
                            render={() => <div>login component...</div>}
                        />
                        <Route path='/' component={WorkspaceApp} />
                        <Route path='/404' render={() => <div>404...</div>} />
                    </Switch>
                </NotificationProvider>
            </ThemeProvider>
        </TaskbarProvider>
    );
};

export default App;
