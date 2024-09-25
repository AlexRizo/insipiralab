import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const Admin = () => {
    const { user } = useSelector(state => state.auth);

    if (!user) return <Navigate to='/login'/>;
    
    return (
        <h1>Panel Administrativo</h1>
    )
}