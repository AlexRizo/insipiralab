import { useNavigate } from "react-router-dom";

export const useNavigateTo = (path = '/') => {
    const navigate = useNavigate();

    const onNavigate = () => {
        navigate(path);
    }

    return onNavigate;
};