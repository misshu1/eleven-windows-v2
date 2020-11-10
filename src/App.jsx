import { makeStyles } from '@material-ui/core/styles';
import { SnackbarProvider } from 'notistack';
import React, { lazy, Suspense, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { SpinnerApp } from 'components/common';
import RoutesApp from 'components/routes/Routes';
import { GlobalStyle } from 'components/style';
import {
    CartProvider,
    FirebaseProvider,
    FolderProvider,
    NotificationsProvider,
    useSettingsContext,
    GapiProvider
} from 'contexts';
import { AuthProvider } from 'hooks';

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
        bottom: '5rem'
    }
});

export function App() {
    const [renderStyles, setRenderStyles] = useState(false);
    const {
        getSelectedBackground,
        isLinuxSelected,
        isWindowsSelected,
        isMobileSelected
    } = useSettingsContext();
    const classes = useStyles();
    const location = useLocation();

    // Disable the default styles for 'desktop' and 'taskbar' when naviating to 'excludedRoutes'
    useEffect(() => {
        const excludedRoutes = ['/401', '/404', '/500', '/login', '/checkout'];
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
                containerAnchorOriginBottomRight: classes.margin
            }}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
            }}
        >
            <NotificationsProvider>
                <FirebaseProvider>
                    <GapiProvider>
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
                    </GapiProvider>
                </FirebaseProvider>
            </NotificationsProvider>
        </SnackbarProvider>
    );
}
