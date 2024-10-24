import { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import {auth, db} from '../firebase/config'
import { doc, setDoc } from 'firebase/firestore';
import toast from 'react-hot-toast';

export default function useAuthentication() {

    const [authError,setAuthError] = useState(null);

    const signup = ({firstName,lastName,email,password}) => {
        setAuthError(null);

        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            const user = userCredential.user;
            toast.success('Signed in!',{position:"top-center"})
            const docRef = doc(db,"users",user.uid)
            setDoc(docRef,{firstName,lastName,email})

        }).catch((err) => {
            setAuthError(err.message)
        })
    }

    const login = ({email,password}) => {
        setAuthError(null);

        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            const user = userCredential.user
            toast.success('Logged in!',{position:"top-center"})
        }).catch((err)=>{
            setAuthError(err.message)
        })
    }

    const signout = () => {
        signOut(auth)
        .then((response) => {
            toast.success('Logged Out !',{position:"top-center"})
        })
        .catch((err)=>{
            setAuthError(err.message)
        })
    }

    return {signup,login,signout,authError}
}
