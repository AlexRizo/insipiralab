import { NavItem } from "../components"
import { useNavigateTo } from "../hooks/useNavigateTo";
import { InspiralabHeaderIcon } from "../icons"

export const Header = () => {
    const { onNavigate } = useNavigateTo();
    
    return (
        <header className="w-full px-20 absolute z-10">
            <nav className="py-8 flex flex-row items-center justify-between">
                <div>
                    <NavItem text="INICIO" path="/" />
                </div>
                <div>
                    <NavItem text="MAQUILA" path="/maquila" />
                </div>
                <div onClick={ onNavigate }>
                    <InspiralabHeaderIcon  />
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
