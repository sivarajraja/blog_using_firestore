import { useReducer } from "react";
import { createContext } from "react";

export const AuthContext = createContext()

//create reducer function

const authReducerFunction = (state,action) => {
    switch(action.type){
        case 'LOGIN':
            return {...state,user:action.payload}

        case 'LOGOUT':
            return {...state,user:null}
        
        default:
            return {state}
    }
}

//create context 

export const AuthContextProvider = ({children}) => {

    const [state,dispatch] = useReducer(authReducerFunction,{user:null})

    console.log('auth state is',state)

    return (
        <AuthContext.Provider value={{...state,dispatch}}>
        {children}
        </AuthContext.Provider>
    )
}