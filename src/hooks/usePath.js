import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const usePath = () => {
    const location = useLocation();
    const [path, setPath] = useState(location.pathname);

    useEffect(() => {
        setPath(location.pathname);
    }, [location]);
    
    return { path };
};
