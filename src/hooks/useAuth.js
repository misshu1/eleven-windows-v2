import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import {
    useFirebaseContext,
    useGapiContext,
    useNotificationsContext
} from 'contexts';
import { ROUTES } from 'components/common';

const AuthContext = createContext();
export function AuthProvider({ children }) {
    const auth = useProvideAuth();

    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

function useProvideAuth() {
    const [user, setUser] = useState(null);
    const { showError } = useNotificationsContext();
    const { auth } = useFirebaseContext();
    const { logoutGapi } = useGapiContext();
    const navigate = useNavigate();
    const location = useLocation();

    const isUserLoggedIn = () => {
        return !!user;
    };

    const isUserAdmin = () => {
        // TODO Add admin role
        return !!user && false;
    };

    const login = async (email, password) => {
        return await auth
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                setUser(response.user);
                return response.user;
            });
    };

    const register = async (name, email, password) => {
        const newUser = await auth.createUserWithEmailAndPassword(
            email,
            password
        );

        await newUser.user.updateProfile({
            displayName: name
        });

        setUser(newUser.user);
        return newUser.user;
    };

    const logout = async () => {
        setUser(null);
        await logoutGapi();
        return await auth
            .signOut()
            .then(() => {
                if (location.pathname !== ROUTES.root) {
                    navigate(ROUTES.root);
                }
            })
            .catch((err) => showError('Error', err.message, 500));
    };

    const sendPasswordResetEmail = async (email) => {
        await auth.sendPasswordResetEmail(email);
        return true;
    };

    const confirmPasswordReset = async (code, password) => {
        await auth.confirmPasswordReset(code, password);
        return true;
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, [auth]);

    return {
        user,
        login,
        register,
        logout,
        sendPasswordResetEmail,
        confirmPasswordReset,
        isUserLoggedIn,
        isUserAdmin
    };
}

export const useAuth = () => {
    return useContext(AuthContext);
};
