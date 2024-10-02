import { useDispatch } from "react-redux";
import { login, logout } from "../firebase/providers";
import { onCheck, onLogin, onLogout } from "../store/auth/authSlice";

export const useAuthStore = () => {
    const dispatch = useDispatch();
    
    const firebaseLogin = async ({email, password}) => {
        dispatch(onCheck());
        
        const data = await login(email, password);

        if (data.ok) {
            dispatch(onLogin(data));
            localStorage.setItem('token', data.token);
        } else {
            dispatch(onLogout(data));
        }
    };

    const firebaseLogout = async () => {
        dispatch(onLogout());
        return await logout();
    };

    return {
        firebaseLogin,
        firebaseLogout
    };
};