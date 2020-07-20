import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useLocation, useNavigate } from 'react-router-dom';

import { useAuth } from '../../../hooks/useAuth';
import { Container } from './style';

const NotAuthorized = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { isUserAdmin } = useAuth();

    useEffect(() => {
        if (isUserAdmin() && !!location.state?.nextPathname) {
            // When folder route requires user to be admin
            // And we navigate to the folder route directly from the address bar
            // Redirect the user back after auto-login, if user is admin
            navigate(location.state.nextPathname);
        }
    }, [isUserAdmin, location.state, navigate]);

    return ReactDOM.createPortal(
        <Container>
            <h1>This is 401 Page, Needs some design work</h1>
        </Container>,
        document.getElementById('pages')
    );
};

export default NotAuthorized;
