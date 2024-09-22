import { useState } from "react";
import { NavItem } from "../components"
import { useNavigateTo, useScreen } from "../hooks";
import { BurguerMenuIcon, InspiralabHeaderIcon } from "../icons"
import { NavbarMenu } from "./NavbarMenu";

export const NewsHeader = () => {
    const { onNavigate } = useNavigateTo();
    const { screen } = useScreen()

    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <>
            <header className={`w-full xl:px-20 bg-black`}>
                <nav className="py-3 xl:py-8 flex flex-row items-center justify-center xl:justify-between relative">
                    <div className="hidden xl:block">
                        <NavItem text="INICIO" path="/" />
                    </div>
                    <div className="hidden xl:block">
                        <NavItem text="MAQUILA" path="/maquila" />
                    </div>
                    <div onClick={ onNavigate }>
                        {
                            screen === 1 ? <InspiralabHeaderIcon width={170} /> : <InspiralabHeaderIcon />
                        }
                    </div>
                    <div className="hidden xl:block">
                        <NavItem text="NOSOTROS" path="/nosotros" />
                    </div>
                    <div className="hidden xl:block">
                        <NavItem text="CONTACTO" path="/contacto" />
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
