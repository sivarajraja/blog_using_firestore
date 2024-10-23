import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react"
import { db } from "../firebase/config";

export const useFetch=(fbCollection)=>{
    const [document,setDocument] = useState(null);

    useEffect(()=>{
        let collectionsRef = collection(db,fbCollection)

        const unSubscribe = onSnapshot(collectionsRef,(snapshot)=>{
            let snapShotArr = []
            snapshot.forEach((docsData) => {
                snapShotArr.push({...docsData.data(),id:docsData.id});
                setDocument(snapShotArr);
            });
        })

        return () => unSubscribe()

    },[fbCollection])

    return {document}
}