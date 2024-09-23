import { Outlet, useLocation } from "react-router-dom"
import { Footer, Header } from "./UI"
import { useEffect } from "react"
import { CursorTrail } from "./components"

export const InspiralabApp = () => {

    const location = useLocation()

    useEffect(() => {
        // Si hay un hash en la URL, espera 200 ms y luego hace scroll al inicio
        if (!location.hash) {
            const timer = setTimeout(() => {
                window.scrollTo(0, 0);
            }, 200);

            return () => clearTimeout(timer);
        }
    }, [location]);
    
    return (
        <>
            <CursorTrail />
        
            <Header />
        
            <Outlet />

            <Footer />
        </>
    )
}
