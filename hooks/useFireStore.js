import { useState } from "react"
import { addDoc, collection, deleteDoc, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import {db} from "../firebase/config"

export const useFireStore = (fbCollection) => {
    
    const [document,setFbDocument] = useState(null);
    const [docError,setDocError] = useState(null);

    const collectionRef = collection(db,fbCollection)

    const addDocument = async(documents) => {
        try{
            const doc = await addDoc(collectionRef,{...documents,createdAt:serverTimestamp()})
            setFbDocument(doc);

        } catch(err){
            setDocError(err.message);
        }

    }

    const deleteDocument = async(id) => {
        const documentRef = doc(db,fbCollection,id)

        try{
            await deleteDoc(documentRef)

        }catch(err){
            setDocError(err.message);
        }
    }

    const editDocument = async(id,modifiedField) => {
        const docRef = doc(db,fbCollection,id) 
        try{
            await updateDoc(docRef,{...modifiedField,createdAt:serverTimestamp()});
        }catch(err){
            setDocError(err.message);
        }
    }

    return{addDocument,deleteDocument,editDocument,document,docError};
}