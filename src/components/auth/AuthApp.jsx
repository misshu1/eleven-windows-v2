import React, { useState } from 'react';

import Login from './Login';
import SignUp from './SignUp';

const AuthApp = ({ onCancel }) => {
    const [isLoginOpen, setIsLoginOpen] = useState(true);

    const showLogin = () => {
        setIsLoginOpen(true);
    };
    const showSignUp = () => {
        setIsLoginOpen(false);
    };

    return (
        <>
            {isLoginOpen && (
                <Login onCancel={onCancel} changeView={showSignUp} />
            )}
            {!isLoginOpen && (
                <SignUp onCancel={onCancel} changeView={showLogin} />
            )}
        </>
    );
};

export default AuthApp;
