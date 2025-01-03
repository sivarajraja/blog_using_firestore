import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

export const useAuthContext = () => {
    const authContext = useContext(AuthContext)

    if(!authContext){
        throw new Error("Auth context error");
    }

    return authContext;
}