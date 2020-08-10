import { library } from '@fortawesome/fontawesome-svg-core';
import { faTelegramPlane, faUbuntu, faWindows } from '@fortawesome/free-brands-svg-icons';
import { faCommentAlt } from '@fortawesome/free-regular-svg-icons';
import {
    faAngleDoubleLeft,
    faAngleDoubleRight,
    faArrowLeft,
    faBell,
    faBellSlash,
    faCheck,
    faClone,
    faCog,
    faEllipsisV,
    faExchangeAlt,
    faExclamation,
    faExclamationTriangle,
    faInfo,
    faLayerGroup,
    faPalette,
    faPowerOff,
    faRoute,
    faShoppingCart,
    faSignInAlt,
    faSitemap,
    faSpinner,
    faSquare,
    faTh,
    faTimes,
    faTrashAlt,
    faUserCircle,
    faWindowMinimize
} from '@fortawesome/free-solid-svg-icons';
import { makeStyles } from '@material-ui/core/styles';
import { SnackbarProvider } from 'notistack';
import React, { lazy, Suspense, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import SpinnerApp from './components/common/SpinnerApp';
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
    faBellSlash,
    faBell,
    faExchangeAlt,
    faPowerOff,
    faClone,
    faSquare,
    faRoute,
    faTelegramPlane,
    faPalette
);

const VideoApp = lazy(() => import('./components/video/VideoApp'));

const VideoBackground = () => {
    const { isVideoEnabledOnDesktop } = useSettingsContext();

    return (
        <>
            {isVideoEnabledOnDesktop() && (
                <Suspense fallback={<SpinnerApp global delay={200} />}>
                    <VideoApp />
                </Suspense>
            )}
        </>
    );
};

const useStyles = makeStyles({
    margin: {
        bottom: '5rem',
    },
});

const App = () => {
    const [renderStyles, setRenderStyles] = useState(false);
    const {
        getSelectedBackground,
        isLinuxSelected,
        isWindowsSelected,
        isMobileSelected,
    } = useSettingsContext();
    const classes = useStyles();
    const location = useLocation();

    // Disable the default styles for 'desktop' and 'taskbar' when naviating to 'excludedRoutes'
    useEffect(() => {
        const excludedRoutes = ['/401', '/404', '/login'];
        const routeMatch = excludedRoutes.includes(location.pathname);

        if (!routeMatch) {
            setRenderStyles(true);
        } else {
            setRenderStyles(false);
        }
    }, [location.pathname]);

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
                        <GlobalStyle
                            background={getSelectedBackground()}
                            linux={isLinuxSelected()}
                            windows={isWindowsSelected()}
                            mobile={isMobileSelected()}
                            renderStyles={renderStyles}
                        />
                        <CartProvider>
                            <FolderProvider>
                                <RoutesApp />
                                <VideoBackground />
                            </FolderProvider>
                        </CartProvider>
                    </AuthProvider>
                </FirebaseProvider>
            </NotificationsProvider>
        </SnackbarProvider>
    );
};

export default App;
