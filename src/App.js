import React, { useContext, useLayoutEffect } from 'react';
import WorkspaceApp from './components/workspace/WorkspaceApp';
import { NotificationProvider } from './contexts/notificationContext';
import { GlobalAppContext } from './contexts/globalContext';
import { TaskbarProvider } from './contexts/taskbarContext';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from './contexts/themeContext';
import { GlobalStyle } from './components/style/GlobalStyle';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faCheckSquare,
    faExclamationTriangle,
    faTimes,
    faWindowMinimize,
    faUserCircle,
    faSpinner,
    faExclamationCircle,
    faEllipsisV
} from '@fortawesome/free-solid-svg-icons';
import { faCommentAlt } from '@fortawesome/free-regular-svg-icons';
import LoginApp from './components/login/LoginApp';
import { FirebaseProvider } from './contexts/firebaseContext';
import { ProvideAuth } from './hooks/useAuth';
library.add(
    faCommentAlt,
    faCheckSquare,
    faExclamationTriangle,
    faTimes,
    faWindowMinimize,
    faUserCircle,
    faSpinner,
    faExclamationCircle,
    faEllipsisV
);

const App = () => {
    const {
        theme,
        getSelectedBackground,
        checkLocalStorageTheme,
        checkLocalStorageBackground
    } = useContext(ThemeContext);
    const { globalApp } = useContext(GlobalAppContext);
    const desktopBg = getSelectedBackground().bg;

    useLayoutEffect(() => {
        checkLocalStorageTheme();
        checkLocalStorageBackground();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <FirebaseProvider>
            <ProvideAuth>
                <TaskbarProvider>
                    <ThemeProvider theme={theme}>
                        <GlobalStyle
                            size={globalApp.size}
                            background={desktopBg}
                        />

                        <NotificationProvider>
                            <Switch>
                                <Route
                                    exact
                                    path='/login'
                                    render={() => (
                                        <LoginApp background={desktopBg} />
                                    )}
                                />
                                <Route path='/' component={WorkspaceApp} />
                                <Route
                                    path='/404'
                                    render={() => <div>404...</div>}
                                />
                            </Switch>
                        </NotificationProvider>
                    </ThemeProvider>
                </TaskbarProvider>
            </ProvideAuth>
        </FirebaseProvider>
    );
};

export default App;
