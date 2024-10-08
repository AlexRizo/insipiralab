import { NavLink } from "react-router-dom"

export const NavItem = ({ text = 'Inicio', path, cPath, isHover, setIsHover = () => {}, borderColor, hoverColor }) => {
    
    return (
        <NavLink 
            to={ path }
            onMouseEnter={ () => setIsHover(path) }
            onMouseLeave={ () => setIsHover(cPath) }
            className={
                ({ isActive }) => `w-[120px] text-sm py-1 rounded-full border inline-block text-center align-middle ${ isActive ? borderColor : 'border-transparent'} ${ hoverColor } transition-colors cursor-none`
            }
            style={{ borderColor: isHover !== path && 'transparent' }}
        >
            { text }
        </NavLink>
    )
}