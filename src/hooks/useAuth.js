import React, { createContext, useContext, useEffect, useState } from 'react';

import { useFirebaseContext } from '../contexts/firebaseContext';

const AuthContext = createContext();
export function AuthProvider(props) {
    const auth = useProvideAuth();

    return (
        <AuthContext.Provider value={auth}>
            {props.children}
        </AuthContext.Provider>
    );
}

function useProvideAuth() {
    const { auth } = useFirebaseContext();
    const [user, setUser] = useState(null);

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
            displayName: name,
        });

        setUser(newUser.user);
        return newUser.user;
    };

    const logout = async () => {
        setUser(null);
        return await auth.signOut();
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
    };
}

export const useAuth = () => {
    return useContext(AuthContext);
};
