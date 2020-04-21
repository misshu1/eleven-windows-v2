import { library } from '@fortawesome/fontawesome-svg-core';
import { faCommentAlt } from '@fortawesome/free-regular-svg-icons';
import {
    faCheckSquare,
    faCog,
    faEllipsisV,
    faExclamationCircle,
    faExclamationTriangle,
    faLayerGroup,
    faSpinner,
    faTh,
    faTimes,
    faUserCircle,
    faWindowMinimize
} from '@fortawesome/free-solid-svg-icons';
import React, { useContext, useLayoutEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import LoginApp from './components/login/LoginApp';
import { GlobalStyle } from './components/style/GlobalStyle';
import WorkspaceApp from './components/workspace/WorkspaceApp';
import { FirebaseProvider } from './contexts/firebaseContext';
import { NotificationProvider } from './contexts/notificationContext';
import { useSettingsContext } from './contexts/settingsContext';
import { ThemeContext } from './contexts/themeContext';
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
    faEllipsisV,
    faLayerGroup,
    faTh,
    faCog
);

const App = () => {
    const {
        theme,
        getSelectedBackground,
        checkLocalStorageTheme,
        checkLocalStorageBackground,
    } = useContext(ThemeContext);
    const desktopBg = getSelectedBackground().bg;
    const {
        isLinuxSelected,
        isWindowsSelected,
        appSize,
    } = useSettingsContext();
    useLayoutEffect(() => {
        checkLocalStorageTheme();
        checkLocalStorageBackground();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <FirebaseProvider>
            <ProvideAuth>
                <ThemeProvider theme={theme}>
                    <GlobalStyle
                        size={appSize}
                        background={desktopBg}
                        linux={isLinuxSelected()}
                        windows={isWindowsSelected()}
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
            </ProvideAuth>
        </FirebaseProvider>
    );
};

export default App;
