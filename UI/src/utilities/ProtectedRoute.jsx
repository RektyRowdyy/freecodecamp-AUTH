import { Navigate } from "react-router-dom";
import useAuth from "../contexts/auth";
import { toast } from "react-toastify";
import { useEffect } from "react";


export default function ProtectedRoute({ element }) {
    const { isLoggedIn, isLoading, checkIsLoggedIn } = useAuth();

    useEffect(() => {
        checkIsLoggedIn();
    }, []);

    useEffect(() => {
        if (!isLoading && !isLoggedIn) {
            toast.warn("Your session expired!");
        }
    }, [isLoggedIn, isLoading]);

    if(isLoading) {
        return <div>Loading....</div>
    }
    if (!isLoggedIn) {
        return <Navigate to="/signIn" />
    } 
    return element;
}