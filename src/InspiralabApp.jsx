import { Outlet, useLocation } from "react-router-dom"
import { Footer, Header } from "./UI"
import { useEffect } from "react"

export const InspiralabApp = () => {

    const location = useLocation()

    useEffect(() => {
        // Si hay un hash en la URL, espera 150 ms y luego hace scroll al inicio
        if (!location.hash) {
            const timer = setTimeout(() => {
                window.scrollTo(0, 0);
            }, 150);

            return () => clearTimeout(timer);
        }
    }, [location]);
    
    return (
        <>
            <Header />
        
            <Outlet />

            <Footer />
        </>
    )
}
