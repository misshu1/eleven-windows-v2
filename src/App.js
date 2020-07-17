import { library } from '@fortawesome/fontawesome-svg-core';
import { faUbuntu, faWindows } from '@fortawesome/free-brands-svg-icons';
import { faCommentAlt } from '@fortawesome/free-regular-svg-icons';
import {
    faAngleDoubleLeft,
    faAngleDoubleRight,
    faArrowLeft,
    faBell,
    faBellSlash,
    faCheck,
    faCog,
    faEllipsisV,
    faExchangeAlt,
    faExclamation,
    faExclamationTriangle,
    faInfo,
    faLayerGroup,
    faMoon,
    faShoppingCart,
    faSignInAlt,
    faSitemap,
    faSpinner,
    faSun,
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

import { RoutesApp } from './components/routes/Routes';
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
    faAngleDoubleLeft,
    faSitemap,
    faSignInAlt,
    faWindows,
    faUbuntu,
    faMoon,
    faSun,
    faBellSlash,
    faBell,
    faExchangeAlt
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
            <NotificationsProvider>
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
                                <FolderProvider>
                                    <RoutesApp />
                                </FolderProvider>
                            </CartProvider>
                        </ThemeProvider>
                    </AuthProvider>
                </FirebaseProvider>
            </NotificationsProvider>
        </SnackbarProvider>
    );
};

export default App;
