import Backdrop from '@material-ui/core/Backdrop';
import { AnimatePresence } from 'framer-motion';
import React, { useCallback, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useLocation, useNavigate } from 'react-router-dom';

import { useDispatchFolderContext } from 'contexts';
import { useAuth, useMediaQuery } from 'hooks';
import { modalPageAnimation } from 'components/animations';
import AuthApp from 'components/auth/AuthApp';
import { AuthContiner, Container } from './style';
import { zIndex } from 'components/theme/zIndex';
import { ROUTES } from 'components/common';

const LoginPage = () => {
    const [showAuth, setShowAuth] = useState(true);
    const { isUserLoggedIn } = useAuth();
    const { closeAllFolders } = useDispatchFolderContext();
    const isMobile = useMediaQuery('(max-width: 450px)');
    const location = useLocation();
    const navigate = useNavigate();

    const navigateWithAnimation = useCallback((path) => {
        setShowAuth(false);

        // setTimeout is used for unmount animation
        setTimeout(() => {
            navigate(path);
        }, 210);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onCancel = () => {
        // If user is not logged in and cancels login
        // Redirect user to previous route
        // Or redirect to '/' if no previous route
        if (!isUserLoggedIn() && !!location.state?.nextPathname) {
            if (!isMobile) {
                navigateWithAnimation(location.state.nextPathname);
            } else {
                navigate(location.state.nextPathname);
            }
        } else if (!isUserLoggedIn() && !location.state?.nextPathname) {
            if (!isMobile) {
                navigateWithAnimation(ROUTES.root);
            } else {
                navigate(ROUTES.root);
            }
        }
    };

    useEffect(() => {
        // Close all folders when navigating to '/login'
        closeAllFolders();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        // When folder route requires login
        // And we navigate to the folder route directly from the address bar
        // Redirect the user back after auto-login
        if (isUserLoggedIn() && !!location.state?.nextPathname) {
            if (!isMobile) {
                navigateWithAnimation(location.state.nextPathname);
            } else {
                navigate(location.state.nextPathname);
            }
        } else if (isUserLoggedIn() && !location.state?.nextPathname) {
            if (!isMobile) {
                navigateWithAnimation(ROUTES.root);
            } else {
                navigate(ROUTES.root);
            }
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isUserLoggedIn]);

    return ReactDOM.createPortal(
        <Container>
            <Backdrop
                open={showAuth}
                onClick={onCancel}
                style={{
                    zIndex: zIndex.page.backdrop,
                    background: 'rgba(0,0,0,0.35)',
                    backdropFilter: 'blur(10px)'
                }}
            />
            <AnimatePresence>
                {showAuth && (
                    <AuthContiner
                        key='modalPageAnimation'
                        initial='initial'
                        animate='open'
                        exit='close'
                        variants={!isMobile && modalPageAnimation}
                    >
                        <AuthApp onCancel={onCancel} />
                    </AuthContiner>
                )}
            </AnimatePresence>
        </Container>,
        document.getElementById('desktop')
    );
};

export default LoginPage;
