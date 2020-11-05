import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

import firebase from 'firebase/app';
import React, { createContext, useContext } from 'react';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();

const FirebaseContext = createContext(null);
export const FirebaseProvider = ({ children }) => {
    const firebaseTimestamp = firebase.firestore.Timestamp.now;
    const firestoreTimestampFromDate = (date) =>
        firebase.firestore.Timestamp.fromDate(date);
    // const firebaseTimestamp = firebase.firestore.FieldValue.serverTimestamp;
    return (
        <FirebaseContext.Provider
            value={{
                auth,
                firestore,
                storage,
                firebaseTimestamp,
                firestoreTimestampFromDate
            }}
        >
            {children}
        </FirebaseContext.Provider>
    );
};

export const useFirebaseContext = () => {
    return useContext(FirebaseContext);
};
