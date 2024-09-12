import { NavItem } from "../components"
import { useNavigateTo } from "../hooks/useNavigateTo";
import { BurguerMenuIcon, InspiralabHeaderIcon } from "../icons"

export const Header = () => {
    const { onNavigate } = useNavigateTo();
    
    return (
        <header className="w-full xl:px-20 fixed <xl:absolute z-10">
            <nav className="py-3 xl:py-8 flex flex-row items-center justify-center xl:justify-between relative">
                <div className="hidden xl:block">
                    <NavItem text="INICIO" path="/" />
                </div>
                <div className="hidden xl:block">
                    <NavItem text="MAQUILA" path="/maquila" />
                </div>
                <div onClick={ onNavigate }>
                    <InspiralabHeaderIcon width={170} />
                </div>
                <div className="hidden xl:block">
                    <NavItem text="NOSOTROS" path="/nosotros" />
                </div>
                <div className="hidden xl:block">
                    <NavItem text="CONTACTO" path="/contacto" />
                </div>
                <div className="xl:hidden absolute right-7">
                    <BurguerMenuIcon />
                </div>
            </nav>
        </header>
    )
}
