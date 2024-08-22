import { NavItem } from '../components'
import { InspiralabFooterIcon } from '../icons'

export const Footer = () => {
    return (
        <footer className='flex justify-between'>
            <nav className='flex flex-col'>
                <NavItem text='Inicio' path='/' />
                <NavItem text='Maquila' path='/maquila' />
                <NavItem text='Nosotros' path='/nosotros' />
                <NavItem text='Contacto' path='/contacto' />
            </nav>
            <div>
                <InspiralabFooterIcon />
            </div>
            <nav className='flex flex-col'>
                <span>Instagram</span>
                <span>Facebook</span>
                <span>Tiktok</span>
                <span>YouTube</span>
            </nav>
        </footer>
    )
}
