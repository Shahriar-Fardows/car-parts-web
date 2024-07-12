/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, deleteUser, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/Firebase";

export const Context = createContext();
const auth = getAuth(app)


const AuthContext = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    // console.log(user);

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, user => {
            setUser(user);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const LogOut = () => {
        return signOut(auth);
    };

    const deleted = () => {
        return deleteUser(auth.currentUser)
    }

    const info = {
        user,
        loading,
        createUser,
        loginUser,
        LogOut,
        deleted
    }

    return (
        <Context.Provider value={info}>
            {children}
        </Context.Provider>
    );
};

export default AuthContext;