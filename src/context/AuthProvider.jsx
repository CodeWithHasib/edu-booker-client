import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, updateProfile } from 'firebase/auth';
import { app } from '../config/firebase.init';
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [error, setError] = useState('');
    const [loader, setLoader] = useState(true);

    const register = async (email, password) => {
        try {
            setLoader(true);
            return await createUserWithEmailAndPassword(auth, email, password);
        }
        catch (error) {
            setError(error.code);
            throw error;
        }
    }

    const updateName = async (name) => {
        try {
            setLoader(true);
            return await updateProfile(auth.currentUser, { displayName: name })
        } catch (error) {
            setError(error.code);
            throw error;
        }
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setLoader(false);
            }
            else {
                setLoader(false);
            }
        })
        return () => unsubscribe();
    }, [auth])

    const contextValue = { register, updateName, error, loader, setLoader };
    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;