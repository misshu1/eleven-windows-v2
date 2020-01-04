import React, { useEffect, useState } from 'react';
import firebase from '../config/firebase';

export const AuthContext = React.createContext();
export const AuthProvider = props => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(setCurrentUser);
    }, []);

    return (
        <AuthContext.Provider
            value={{
                currentUser
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};
