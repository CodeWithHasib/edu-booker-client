import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut, updateProfile } from 'firebase/auth';
import { app } from '../config/firebase.init';
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [error, setError] = useState('');
    const [loader, setLoader] = useState(true);
    const [user, setUser] = useState(null);
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

    const updateName = (name) => {

        return updateProfile(auth.currentUser, { displayName: name })

    }
    const logout = () => {
        return signOut(auth)
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

    const contextValue = { register, updateName, error, loader, setLoader, user , logout };
    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;