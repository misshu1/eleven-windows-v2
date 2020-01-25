import React from 'react';
import firebase from '../config/firebase';

export const FirebaseContext = React.createContext(null);

export const FirebaseProvider = props => {
    return (
        <FirebaseContext.Provider value={{ firebase }}>
            {props.children}
        </FirebaseContext.Provider>
    );
};
