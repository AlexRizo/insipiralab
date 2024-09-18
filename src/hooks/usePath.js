import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const paths = {
    '/': 1,
    '/maquila': 2,
    '/nosotros': 3,
    '/contacto': 4,
};

export const usePath = () => {
    const location = useLocation();
    const [path, setPath] = useState(paths[location.pathname]);
    
    useEffect(() => {
        setPath(paths[location.pathname]);
    }, [location]);
    
    return { path };
};
