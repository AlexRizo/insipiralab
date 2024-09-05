import { Outlet, useLocation } from "react-router-dom"
import { Footer, Header } from "./UI"
import { useEffect } from "react"

export const InspiralabApp = () => {

    const location = useLocation()

    useEffect(() => {
        setTimeout(() => window.scrollTo(0, 0), 150);
    }), [location]
    
    return (
        <>
            <Header />
        
            <Outlet />

            <Footer />
        </>
    )
}
