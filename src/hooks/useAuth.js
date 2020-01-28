import React, { useState, useEffect, useContext, createContext } from 'react';
import firebase from '../config/firebase';

const AuthContext = createContext();
export function ProvideAuth(props) {
    const auth = useProvideAuth();

    return (
        <AuthContext.Provider value={auth}>
            {props.children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(AuthContext);
};

function useProvideAuth() {
    const [user, setUser] = useState(null);

    const login = async (email, password) => {
        return await firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(response => {
                setUser(response.user);
                return response.user;
            });
    };

    const register = async (name, email, password) => {
        const newUser = await firebase
            .auth()
            .createUserWithEmailAndPassword(email, password);

        await newUser.user.updateProfile({
            displayName: name
        });

        setUser(newUser.user);
        return newUser.user;
    };

    const logout = async () => {
        setUser(null);
        return await firebase.auth().signOut();
    };

    const sendPasswordResetEmail = async email => {
        await firebase.auth().sendPasswordResetEmail(email);
        return true;
    };

    const confirmPasswordReset = async (code, password) => {
        await firebase.auth().confirmPasswordReset(code, password);
        return true;
    };

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    return {
        user,
        login,
        register,
        logout,
        sendPasswordResetEmail,
        confirmPasswordReset
    };
}
