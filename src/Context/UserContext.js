import React, { Children, createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase/firebase.config'

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const signInWithGoogle = ()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }

    const signInWithFaceBook = () =>{
        setLoading(true);
        return signInWithPopup(auth,facebookProvider);
    }
   
    const signInWithGithub = () =>{
        setLoading(true);
        return signInWithPopup(auth,githubProvider);
    }
    

    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
       }




    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false);
        })
        return () =>{
            unsubscribe();
        }
    },[])

    const authInfo={user,
        signInWithGoogle,
        signInWithFaceBook,
        signInWithGithub,
        createUser,
        loading,
        signIn,
        logOut
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
              {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;