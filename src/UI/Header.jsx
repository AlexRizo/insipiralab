import { NavLink } from "react-router-dom"

export const Header = () => {
    return (
        <header className="w-full px-20 absolute">
            <nav className="py-8 flex flex-row items-center justify-between border-b border-white/20">
                <div>
                    <NavLink to={'/'} className={({ isActive }) => `w-[110px] text-sm py-1 rounded-full ${ isActive && 'border' } inline-block text-center align-middle`} >INICIO</NavLink>
                </div>
                <div>
                    <NavLink to={'/maquila'} className={({ isActive }) => `w-[110px] text-sm py-1 rounded-full ${ isActive && 'border' } inline-block text-center align-middle`} >MAQUILA</NavLink>
                </div>
                <div className="text-4xl">
                    <h1>INSPIRA<span className="font-bold">LAB</span></h1>
                </div>
                <div>
                    <NavLink to={'/nosotros'} className={({ isActive }) => `w-[110px] text-sm py-1 rounded-full ${ isActive && 'border' } inline-block text-center align-middle`} >NOSOTROS</NavLink>
                </div>
                <div>
                    <NavLink to={'/contacto'} className={({ isActive }) => `w-[110px] text-sm py-1 rounded-full ${ isActive && 'border' } inline-block text-center align-middle`} >CONTACTO</NavLink>
                </div>
            </nav>
        </header>
    )
}
