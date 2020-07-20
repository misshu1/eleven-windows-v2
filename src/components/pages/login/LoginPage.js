import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useLocation, useNavigate } from 'react-router-dom';

import { useAuth } from '../../../hooks/useAuth';
import useMediaQuery from '../../../hooks/useMediaQuery';
import { loginPageAnimation } from '../../animations';
import AuthApp from '../../auth/AuthApp';
import { AuthContiner, Container } from './style';

const LoginPage = () => {
    const [showAuth, setShowAuth] = useState(true);
    const { isUserLoggedIn } = useAuth();
    const isMobile = useMediaQuery('(max-width: 450px)');
    const location = useLocation();
    const navigate = useNavigate();

    const onCancel = () => {
        if (!isMobile) {
            setShowAuth(false);
            setTimeout(() => {
                navigate('/');
            }, 250);
        } else {
            navigate('/');
        }
    };

    useEffect(() => {
        if (isUserLoggedIn() && !!location.state?.nextPathname) {
            // When folder route requires login
            // And we navigate to the folder route directly from the address bar
            // Redirect the user back after auto-login
            navigate(location.state.nextPathname);
        }
    }, [isUserLoggedIn, location.state, navigate]);

    return ReactDOM.createPortal(
        <Container>
            <AnimatePresence>
                {showAuth && (
                    <AuthContiner
                        key='loginPageAnimation'
                        initial='initial'
                        animate='open'
                        exit='close'
                        variants={!isMobile && loginPageAnimation}
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
