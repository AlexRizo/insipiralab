import { NavLink } from "react-router-dom"

export const NavItem = ({ text = 'Inicio', path = '/#', custom = '' }) => {
    return (
        <NavLink 
            to={ path }
            className={
                ({ isActive }) => `w-[110px] text-[10px] 2xl:text-sm py-1 rounded-full ${ isActive && 'border' } inline-block text-center align-middle ${ custom }`
            }
        >
            { text }
        </NavLink>
    )
}