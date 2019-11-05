import React, { useContext } from 'react';
import { ThemeStateProvider } from './contexts/themeContext';
import WorkspaceApp from './components/workspace/WorkspaceApp';
import { NotificationProvider } from './contexts/notificationContext';
import { GlobalAppContext } from './contexts/GlobalContext';
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
    const { globalApp } = useContext(GlobalAppContext);
    const { isMobile } = globalApp;

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
                        <Route
                            exact={isMobile ? false : true}
                            path='/'
                            render={() => <WorkspaceApp />}
                        />
                        <Route render={() => <div>404...</div>} />
                    </Switch>
                </NotificationProvider>
            </ThemeStateProvider>
        </TaskbarProvider>
    );
};

export default App;
