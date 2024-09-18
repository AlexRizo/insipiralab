import { NavLink } from "react-router-dom"
import { usePath } from "../hooks";

export const NavItem = ({ text = 'Inicio', path, custom = '', setHover, index = 1 }) => {
    const { path:urlIndex } = usePath();
    
    return (
        <NavLink 
            to={ path }
            onMouseEnter={ () => setHover(index) }
            onMouseLeave={ () => setHover(urlIndex) }
            className={
                ({ isActive }) => `w-[120px] text-[10px] xl:text-sm py-1 rounded-full border ${ !isActive && 'border-transparent' } inline-block text-center align-middle ${ custom }`
            }
        >
            { text }
        </NavLink>
    )
}