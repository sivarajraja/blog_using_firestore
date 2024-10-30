import { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import {auth, db} from '../firebase/config'
import { doc, setDoc } from 'firebase/firestore';
import toast from 'react-hot-toast';
import { useAuthContext } from './useAuthContext';
import { Link, useNavigate } from 'react-router-dom';

export default function useAuthentication() {

    const navigate = useNavigate()

    const [authError,setAuthError] = useState(null);

    const {dispatch} = useAuthContext()

    const signup = ({firstName,lastName,email,password}) => {
        setAuthError(null);

        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            const user = userCredential.user;
            toast.success('Signed in!',{position:"top-center"})
            const docRef = doc(db,"users",user.uid)
            setDoc(docRef,{firstName,lastName,email})

            dispatch({type:'LOGIN',payload:user})

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
            dispatch({type:'LOGIN',payload:user})
            navigate("/")

        }).catch((err)=>{
            setAuthError(err.message)
        })
    }   

    const signout = () => {
        signOut(auth)
        .then((response) => {
            toast.success('Logged Out !',{position:"top-center"})
            dispatch({type:'LOGOUT'})
            navigate("/login")
        })
        .catch((err)=>{
            setAuthError(err.message)
        })
    }

    return {signup,login,signout,authError}
}
