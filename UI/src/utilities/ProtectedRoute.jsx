import { Navigate } from "react-router-dom";
import useAuth from "../contexts/auth";


export default function ProtectedRoute({ element }) {
    const { isLoggedIn, isLoading } = useAuth();
    if(isLoading) {
        return <div>Loading....</div>
    }
    if (!isLoggedIn) return <Navigate to="/signIn" />
    return element;
}