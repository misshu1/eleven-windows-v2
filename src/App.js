import React from 'react';
import { ThemeStateProvider } from './contexts/themeContext';
import WorkspaceApp from './components/workspace/WorkspaceApp';
import { NotificationProvider } from './contexts/notificationContext';
import { TaskbarProvider } from './contexts/taskbarContext';
import { Route, Switch } from 'react-router-dom';
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
        <TaskbarProvider>
            <ThemeStateProvider>
                <NotificationProvider>
                    <Switch>
                        <Route
                            exact
                            path='/login'
                            render={() => <div>login component...</div>}
                        />
                        <Route path='/' component={WorkspaceApp} />
                    </Switch>
                </NotificationProvider>
            </ThemeStateProvider>
        </TaskbarProvider>
    );
};

export default App;
