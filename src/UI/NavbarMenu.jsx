import { XMarkIcon } from "@heroicons/react/24/outline"
import { NavItem } from "../components"

const navItems = [
    {
        text: "INICIO",
        path: "/"
    },
    {
        text: "MAQUILA",
        path: "/maquila"
    },
    {
        text: "NOSOTROS",
        path: "/nosotros"
    },
    {
        text: "CONTACTO",
        path: "/contacto"
    },
    {
        text: "CERRAR"
    }
]

export const NavbarMenu = ({ isOpen, setIsOpen }) => {
    return (
        <nav className={`h-screen w-screen fixed z-[9999] bg-black text-[#E71567] flex flex-col items-center justify-center gap-8 ${ isOpen ? 'top-0' : '-top-[120%]'} transition-all duration-300 ease-in-out`}>
            {
                navItems.map(({ text, path }, index) => (
                    path ? 
                        (
                            <span key={ index } onClick={ () => setIsOpen(false) } >
                                <NavItem text={ text } path={ path } custom="border-0 text-lg" />
                            </span>
                        )
                        :
                        (
                            <span key={ index } onClick={ () => setIsOpen(false) } className="cursor-none">
                                <XMarkIcon className="h-10" />
                            </span>
                        )
                ))
            }
        </nav>
    )
}
