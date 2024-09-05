import { NavItem } from "../components"
import { useNavigateTo } from "../hooks/useNavigateTo";
import { BurguerMenuIcon, InspiralabHeaderIcon } from "../icons"

export const Header = () => {
    const { onNavigate } = useNavigateTo();
    
    return (
        <header className="w-full 2xl:px-20 fixed <2xl:absolute z-10">
            <nav className="py-3 2xl:py-8 flex flex-row items-center justify-center 2xl:justify-between relative">
                <div className="hidden 2xl:block">
                    <NavItem text="INICIO" path="/" />
                </div>
                <div className="hidden 2xl:block">
                    <NavItem text="MAQUILA" path="/maquila" />
                </div>
                <div onClick={ onNavigate }>
                    <InspiralabHeaderIcon width={170} />
                </div>
                <div className="hidden 2xl:block">
                    <NavItem text="NOSOTROS" path="/nosotros" />
                </div>
                <div className="hidden 2xl:block">
                    <NavItem text="CONTACTO" path="/contacto" />
                </div>
                <div className="2xl:hidden absolute right-7">
                    <BurguerMenuIcon />
                </div>
            </nav>
        </header>
    )
}
