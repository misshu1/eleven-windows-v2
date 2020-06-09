import React, { useState } from 'react';

import Login from './Login';

const AuthApp = ({ onCancel }) => {
    const [isLoginOpen, setIsLoginOpen] = useState(true);
    return (
        <>
            {isLoginOpen && <Login onCancel={onCancel} />}
            {/* {!isLoginOpen && <SignUp onCancel={onCancel} />} */}
        </>
    );
};

export default AuthApp;
