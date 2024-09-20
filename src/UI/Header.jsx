import { useEffect, useState } from "react";
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

    const [borderColor, setBorderColor] = useState('');
    const [hoverColor, setHoverColor] = useState('');

    useEffect(() => {
        setBorderColor(scrolled ? 'border-[#E71567]' : 'border-white');
        setHoverColor(scrolled ? 'hover:border-[#E71567]' : 'hover:border-white');
    }, [scrolled]);

    useEffect(() => {
        setIsHover(path);
    }, [path]);
    
    return (
        <>
            <header className={`w-full xl:px-20 top-0 fixed z-[100] ${ scrolled && 'bg-black text-[#E71567] shadow-md' } transition-colors`}>
                <nav className="py-3 xl:py-8 flex flex-row items-center justify-center xl:justify-between relative">
                    <div className="hidden xl:block">
                        <NavItem text="INICIO" path="/" isHover={ isHover } setIsHover={ setIsHover } cPath={ path } borderColor={ borderColor } hoverColor={ hoverColor } />
                    </div>
                    <div className="hidden xl:block">
                        <NavItem text="MAQUILA" path="/maquila" isHover={ isHover } setIsHover={ setIsHover } cPath={ path } borderColor={ borderColor } hoverColor={ hoverColor } />
                    </div>
                    <div onClick={ onNavigate }>
                        {
                            screen === 1 ? <InspiralabHeaderIcon width={170} />
                                         : <InspiralabHeaderIcon fill={`${ scrolled ? '#E71567' : 'white' }`} />
                        }
                    </div>
                    <div className="hidden xl:block">
                        <NavItem text="NOSOTROS" path="/nosotros" isHover={ isHover } setIsHover={ setIsHover } cPath={ path } borderColor={ borderColor } hoverColor={ hoverColor } />
                    </div>
                    <div className="hidden xl:block">
                        <NavItem text="CONTACTO" path="/contacto" isHover={ isHover } setIsHover={ setIsHover } cPath={ path } borderColor={ borderColor } hoverColor={ hoverColor } />
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
