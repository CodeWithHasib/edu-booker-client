import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { app } from '../config/firebase.init';
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [error, setError] = useState('');
    const [loader, setLoader] = useState(true);
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const register = async (email, password) => {
        try {
            setLoader(true);
            return await createUserWithEmailAndPassword(auth, email, password);
        }
        catch (error) {
            setLoader(false);
            setError(error.code);
            throw error;
        }
    }

    const updateName = (name) => {

        return updateProfile(auth.currentUser, { displayName: name })

    }
    const logout = () => {
        return signOut(auth)
    }


    const login = async (email, password) => {
        try {
            setLoader(true);
            return await signInWithEmailAndPassword(auth, email, password);
        }
        catch (error) {
            setLoader(false);
            setError(error.code);
            throw error;
        }
    }

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser);
                setLoader(false);
            }
            else {
                setLoader(false);
            }
        })
        return () => unsubscribe();
    }, [auth])

    const contextValue = { register, updateName, error, loader, setLoader, user, logout, login, setUser , googleLogin , githubLogin };
    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;