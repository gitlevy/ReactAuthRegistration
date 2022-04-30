import React, { useState, createContext, useEffect } from 'react'
import { auth } from '../firebase'

export const AuthContext = createContext()

const AuthContextProvider = (props) => {

    const [currentUser, setCurrentUser] = useState()

    const [loading, setLoading] = useState(true)

    function subscribe(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout(email, password) {
        return auth.signOut()
    }

    useEffect(() => {
        const cleanUpUser = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return cleanUpUser
    }, [])

    return (
        <AuthContext.Provider value={{currentUser, subscribe, login, logout}}>
            { !loading && props.children }
        </AuthContext.Provider>
    )
}

export default AuthContextProvider