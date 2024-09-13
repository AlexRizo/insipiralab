import { NavItem } from "../components"
import { useNavigateTo, useScroll } from "../hooks";
import { BurguerMenuIcon, InspiralabHeaderIcon } from "../icons"

export const Header = () => {
    const { onNavigate } = useNavigateTo();
    const { scrolled } = useScroll();
    
    return (
        <header className={`w-full xl:px-20 fixed z-[9999] ${ scrolled && 'bg-black text-[#E71567] shadow-md' } transition-all`}>
            <nav className="py-3 xl:py-8 flex flex-row items-center justify-center xl:justify-between relative">
                <div className="hidden xl:block">
                    <NavItem text="INICIO" path="/" custom={`${ scrolled && 'border-[#E71567]' }`} />
                </div>
                <div className="hidden xl:block">
                    <NavItem text="MAQUILA" path="/maquila" custom={`${ scrolled && 'border-[#E71567]' }`} />
                </div>
                <div onClick={ onNavigate }>
                    <InspiralabHeaderIcon width={170} fill={`${ scrolled ? '#E71567' : 'white' }`} />
                </div>
                <div className="hidden xl:block">
                    <NavItem text="NOSOTROS" path="/nosotros" custom={`${ scrolled && 'border-[#E71567]' }`} />
                </div>
                <div className="hidden xl:block">
                    <NavItem text="CONTACTO" path="/contacto" custom={`${ scrolled && 'border-[#E71567]' }`} />
                </div>
                <div className="xl:hidden absolute right-7">
                    <BurguerMenuIcon />
                </div>
            </nav>
        </header>
    )
}
