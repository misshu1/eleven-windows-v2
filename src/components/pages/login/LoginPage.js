import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useLocation, useNavigate } from 'react-router-dom';

import { useAuth } from '../../../hooks/useAuth';
import { Container } from './style';

const LoginPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { isUserLoggedIn } = useAuth();

    useEffect(() => {
        if (
            isUserLoggedIn() &&
            !!location.state?.nextPathname &&
            !!location.state?.requireLogin
        ) {
            // When folder route requires login
            // And we navigate to the folder route directly from the address bar
            // Redirect the user back after auto-login
            navigate(location.state.nextPathname);
        }
    }, [isUserLoggedIn, location.state, navigate]);

    return ReactDOM.createPortal(
        <Container>
            <h1>This is the LOGIN Page, Needs some design work</h1>
        </Container>,
        document.getElementById('pages')
    );
};

export default LoginPage;
