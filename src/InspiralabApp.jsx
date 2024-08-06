import { Outlet } from "react-router-dom"
import { Footer, Header } from "./UI"

export const InspiralabApp = () => {
    return (
        <>
            <Header />
        
            <Outlet />

            <Footer />
        </>
    )
}
