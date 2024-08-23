import { NavLink } from "react-router-dom"
import { NavItem } from "../components"

export const Header = () => {
    return (
        <header className="w-full px-20 absolute z-10">
            <nav className="py-8 flex flex-row items-center justify-between">
                <div>
                    <NavItem text="INICIO" path="/" />
                </div>
                <div>
                    <NavItem text="MAQUILA" path="/maquila" />
                </div>
                <div className="text-4xl">
                    <h1>INSPIRA<span className="font-bold">LAB</span></h1>
                </div>
                <div>
                    <NavItem text="NOSOTROS" path="/nosotros" />
                </div>
                <div>
                    <NavItem text="CONTACTO" path="/contacto" />
                </div>
            </nav>
        </header>
    )
}
