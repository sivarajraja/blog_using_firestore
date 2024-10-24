import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAG2QFm_glRLqhpN7Zk3nHdfgSV117IIUQ",
    authDomain: "blog-d5cba.firebaseapp.com",
    projectId: "blog-d5cba",
    storageBucket: "blog-d5cba.appspot.com",
    messagingSenderId: "847825367026",
    appId: "1:847825367026:web:1468eb50375860d28a056b"
};

initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth()

export {db,auth};