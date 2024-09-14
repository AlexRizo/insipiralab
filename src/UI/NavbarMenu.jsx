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
        <nav className={`h-screen w-screen fixed z-[9999] bg-black text-[#E71567] flex flex-col items-center justify-center gap-8 ${ isOpen ? 'top-0' : '-top-[100%]'} transition-all ease-linear`}>
            {
                navItems.map(({ text, path }, index) => (
                    path ? 
                        (
                            <span  onClick={ () => setIsOpen(false) } >
                                <NavItem key={ index } text={ text } path={ path } custom="border-0" />
                            </span>
                        )
                        :
                        (
                            <span onClick={ () => setIsOpen(false) } className="text-[10px] cursor-pointer">
                                { text }
                            </span>
                        )
                ))
            }
        </nav>
    )
}
