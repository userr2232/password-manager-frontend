import { createContext, useContext, useState } from "react";

let AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loadingInitial, setLoadingInitial] = useState(true)

    return (
        <AuthContext.Provider value={user} >
            {!loadingInitial && children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}