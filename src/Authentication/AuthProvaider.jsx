import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app)

export const AuthContext = createContext(null)

const AuthProvaider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    //create account using email and passwored:
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //signIn with email and password :
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    //signOut by using Auth :
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // set an observer to chack user :
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, logedUser => {
            setLoading(false)
            setUser(logedUser)

        })
        return () => {
            unsubscribe()
        }
    }, [])

    const authInfo = {
        user,
        setUser,
        createUser,
        signIn,
        logOut,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvaider;