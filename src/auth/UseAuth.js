import { createContext, useContext, useEffect, useState } from "react";
import { apiUrl } from "../config";

let AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loadingInitial, setLoadingInitial] = useState(true)

    useEffect(() => {
        async function validateToken() {
            const jwt = localStorage.getItem("jwt")

            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + jwt
                }
            })

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
        <AuthContext.Provider value={{user}} >
            {!loadingInitial && children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}