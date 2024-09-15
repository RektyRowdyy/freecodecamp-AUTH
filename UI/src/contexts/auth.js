import { useContext, createContext } from "react";

export const AuthContext = createContext({
    isLoggedIn: false,
    checkIsLoggedIn: async () => {},
    logOut: async () => {},
    isLoading: true
})

export const AuthProvider = AuthContext.Provider

export default function useAuth() {
    return useContext(AuthContext)
}