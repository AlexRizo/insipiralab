import { Outlet, useLocation } from "react-router-dom"
import { Footer, Header } from "./UI"
import { useEffect } from "react"
import { CursorTrail } from "./components"
import { useDataStore, useScreen } from "./hooks"

export const InspiralabApp = () => {

    const { screen } = useScreen()

    const location = useLocation()

    const { startLoadingData } = useDataStore()

    useEffect(() => {
        // Si hay un hash en la URL, espera 200 ms y luego hace scroll al inicio
        if (!location.hash) {
            const timer = setTimeout(() => {
                window.scrollTo(0, 0);
            }, 200);

            return () => clearTimeout(timer);
        }
    }, [location]);

    useEffect(() => {
        startLoadingData();
    }, [])
    
    return (
        <>
            {
                screen !== 1 && <CursorTrail />
            }
        
            <Header />
        
            <Outlet />

            <Footer />
        </>
    )
}
