import { library } from '@fortawesome/fontawesome-svg-core';
import { faCommentAlt } from '@fortawesome/free-regular-svg-icons';
import {
    faAngleDoubleRight,
    faArrowLeft,
    faCheck,
    faCog,
    faEllipsisV,
    faExclamation,
    faExclamationTriangle,
    faInfo,
    faLayerGroup,
    faShoppingCart,
    faSitemap,
    faSpinner,
    faTh,
    faTimes,
    faTrashAlt,
    faUserCircle,
    faWindowMinimize
} from '@fortawesome/free-solid-svg-icons';
import { makeStyles } from '@material-ui/core/styles';
import { SnackbarProvider } from 'notistack';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Routes } from './components/routes/Routes';
import { GlobalStyle } from './components/style/GlobalStyle';
import { CartProvider } from './contexts/cartContext';
import { FirebaseProvider } from './contexts/firebaseContext';
import { FolderProvider } from './contexts/folderContext';
import { NotificationsProvider } from './contexts/notificationsContext';
import { useSettingsContext } from './contexts/settingsContext';
import { AuthProvider } from './hooks/useAuth';

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
    faArrowLeft,
    faTrashAlt,
    faAngleDoubleRight,
    faSitemap
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
                <AuthProvider>
                    <ThemeProvider theme={theme}>
                        <GlobalStyle
                            background={getSelectedBackground()}
                            linux={isLinuxSelected()}
                            windows={isWindowsSelected()}
                            mobile={isMobileSelected()}
                        />
                        <CartProvider>
                            <NotificationsProvider>
                                <FolderProvider>
                                    <Routes />
                                </FolderProvider>
                            </NotificationsProvider>{' '}
                        </CartProvider>
                    </ThemeProvider>
                </AuthProvider>
            </FirebaseProvider>
        </SnackbarProvider>
    );
};

export default App;
