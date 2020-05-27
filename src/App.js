import { library } from '@fortawesome/fontawesome-svg-core';
import { faCommentAlt } from '@fortawesome/free-regular-svg-icons';
import {
    faArrowLeft,
    faCheck,
    faCog,
    faEllipsisV,
    faExclamation,
    faExclamationTriangle,
    faInfo,
    faLayerGroup,
    faShoppingCart,
    faSpinner,
    faTh,
    faTimes,
    faUserCircle,
    faWindowMinimize
} from '@fortawesome/free-solid-svg-icons';
import { makeStyles } from '@material-ui/core/styles';
import { SnackbarProvider } from 'notistack';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Routes } from './components/routes/Routes';
import { GlobalStyle } from './components/style/GlobalStyle';
import { FirebaseProvider } from './contexts/firebaseContext';
import { FolderProvider } from './contexts/folderContext';
import { NotificationsProvider } from './contexts/notificationsContext';
import { useSettingsContext } from './contexts/settingsContext';
import { ProvideAuth } from './hooks/useAuth';

library.add(
    faCommentAlt,
    faCheck,
    faExclamation,
    faTimes,
    faWindowMinimize,
    faUserCircle,
    faSpinner,
    faExclamationTriangle,
    faEllipsisV,
    faLayerGroup,
    faTh,
    faCog,
    faInfo,
    faShoppingCart,
    faArrowLeft
);

const useStyles = makeStyles({
    margin: {
        bottom: '5rem',
    },
});

const App = () => {
    const {
        theme,
        getSelectedBackground,
        isLinuxSelected,
        isWindowsSelected,
        isMobileSelected,
    } = useSettingsContext();
    const classes = useStyles();

    return (
        <SnackbarProvider
            dense
            domRoot={document.getElementById('modal')}
            classes={{
                containerAnchorOriginBottomRight: classes.margin,
            }}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
        >
            <FirebaseProvider>
                <ProvideAuth>
                    <ThemeProvider theme={theme}>
                        <GlobalStyle
                            background={getSelectedBackground()}
                            linux={isLinuxSelected()}
                            windows={isWindowsSelected()}
                            mobile={isMobileSelected()}
                        />
                        <NotificationsProvider>
                            <FolderProvider>
                                <Routes />
                            </FolderProvider>
                        </NotificationsProvider>
                    </ThemeProvider>
                </ProvideAuth>
            </FirebaseProvider>
        </SnackbarProvider>
    );
};

export default App;
