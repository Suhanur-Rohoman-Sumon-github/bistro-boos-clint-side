import React, { createContext, useEffect, useState } from 'react';
import { app } from '../firebase/firebase.cofig';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
export const Authcontext = createContext(null)
const auth = getAuth(app)
import axios from "axios";

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const handleSinup = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const handleLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const sininWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const handleLogout = () => {
        return signOut(auth)

    }
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }
  
    useEffect(() => {
        const unsbcribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser)
            // ERROR : when i trying to login this web token is working but when logout it give me a error like cannot read propartis of undifind reading email
            if (loggedUser) {
                axios.post('http://localhost:5000/jwt', { email: loggedUser?.email })
                    .then(data => {
                        console.log(data.data.token)
                        const token = data.data.token
                        localStorage.setItem('access-token', token)
                        setLoading(false)
                    })

            }
            else{
                 localStorage.removeItem('access-token')       
            }
            
        });
        return () => {
            return unsbcribe()
        }
    }, [])
    const authInfo = {
        handleSinup,
        handleLogin,
        handleLogout,
        user,
        loading,
        updateUserProfile,
        sininWithGoogle,
    }
    return (
        <Authcontext.Provider value={authInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;