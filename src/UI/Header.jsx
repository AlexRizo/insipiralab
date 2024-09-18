import { useState } from "react";
import { NavItem } from "../components"
import { useNavigateTo, usePath, useScreen, useScroll } from "../hooks";
import { BurguerMenuIcon, InspiralabHeaderIcon } from "../icons"
import { NavbarMenu } from "./NavbarMenu";

export const Header = () => {
    const { onNavigate } = useNavigateTo();
    const { scrolled } = useScroll();
    const { screen } = useScreen()
    const { path } = usePath();

    const [isOpen, setIsOpen] = useState(false);
    const [isHover, setIsHover] = useState(path);
    
    return (
        <>
            <header className={`w-full xl:px-20 fixed z-[9998] ${ scrolled && 'bg-black text-[#E71567] shadow-md' } transition-all`}>
                <nav className="py-3 xl:py-8 flex flex-row items-center justify-center xl:justify-between relative">
                    <div className="hidden xl:block">
                        <NavItem text="INICIO" path="/" setHover={setIsHover} index={1} custom={`${ scrolled && 'border-[#E71567]' } ${ isHover === 1 ? 'border-white' : 'border-transparent' }`} />
                    </div>
                    <div className="hidden xl:block">
                        <NavItem text="MAQUILA" path="/maquila" setHover={setIsHover} index={2} custom={`${ scrolled && 'border-[#E71567]' } ${ isHover === 2 ? 'border-white' : 'border-transparent' }`} />
                    </div>
                    <div onClick={ onNavigate }>
                        {
                            screen === 1 ? <InspiralabHeaderIcon width={170} />
                                         : <InspiralabHeaderIcon fill={`${ scrolled ? '#E71567' : 'white' }`} />
                        }
                    </div>
                    <div className="hidden xl:block">
                        <NavItem text="NOSOTROS" path="/nosotros" setHover={setIsHover} index={3} custom={`${ scrolled && 'border-[#E71567]' } ${ isHover === 3 ? 'border-white' : 'border-transparent' }`} />
                    </div>
                    <div className="hidden xl:block">
                        <NavItem text="CONTACTO" path="/contacto" setHover={setIsHover} index={4} custom={`${ scrolled && 'border-[#E71567]' } ${ isHover === 4 ? 'border-white' : 'border-transparent' }`} />
                    </div>
                    <div className="xl:hidden absolute right-7">
                        <BurguerMenuIcon onClick={ () => setIsOpen(true) } />
                    </div>
                </nav>
            </header>
            <NavbarMenu isOpen={ isOpen } setIsOpen={ setIsOpen } />
        </>
    )
}
