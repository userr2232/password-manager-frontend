import { createContext, useContext, useEffect, useState } from "react";
import { apiUrl } from "../config";

let AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loadingInitial, setLoadingInitial] = useState(true)

    useEffect(() => {
        async function validateToken() {
            const jwt = localStorage.getItem("jwt")
            console.log(jwt)
            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + jwt
                }
            })
            console.log(response)
            if (response.status !== 200) {
                setUser(false)
                setLoadingInitial(false)
            } else {
                console.log("TOKEN VALIDO")
                setUser(true)
                setLoadingInitial(false)
            }
        }
        validateToken()
    }, [])

    return (
        <AuthContext.Provider value={{ u: [user, setUser]}} >
            {!loadingInitial && children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}