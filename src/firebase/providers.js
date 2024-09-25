import { signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseAuth } from "./firebase";

export const login = async (email = '', password = '') => {
    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid } = resp.user;
        return {
            ok: true,
            email,
            uid
        }
    } catch (error) {
        return {
            ok: false,
            error: error.message
        }
    }
};

export const logout = async () => {
    return await FirebaseAuth.signOut();
};