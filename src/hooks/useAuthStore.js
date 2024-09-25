import { useDispatch } from "react-redux";
import { login, logout } from "../firebase/providers";
import { onLogin, onLogout } from "../store/auth/authSlice";

export const useAuthStore = () => {
    const dispatch = useDispatch();
    
    const firebaseLogin = async ({email, password}) => {
        const data = await login(email, password);

        if (data.ok) {
            dispatch(onLogin(data));
        } else {
            dispatch(onLogout(data));
        }
        
        return data;
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