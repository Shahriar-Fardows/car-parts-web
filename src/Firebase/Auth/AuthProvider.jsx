/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase";

export const AuthContext = createContext(null);

const auth = getAuth(app);


const AuthProvider = ({ Children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setUser(user);
            setLoading(false)
        })
        return () => {
            return unsubscribe();
        };

    }, [])

    // user sign up code 

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // user login code 

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(email, password);
    }

    // user log Out code 

    const LogOut = () => {
        return signOut(auth) ;
    }




    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        LogOut

    }



    return (
        <AuthContext.Provider value={authInfo}>
            {Children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
