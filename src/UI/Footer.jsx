import { NavItem } from '../components'
import { FacebookIcon, InspiralabFooterIcon, InstagramIcon, TiktokIcon, YoutubeIcon } from '../icons'

export const Footer = () => {
    return (
        <>
            <footer className='flex justify-between items-center py-20 px-40 w-full'>
                <nav className='flex flex-col gap-6 w-1/3'>
                    <NavItem text='INICIO' path='/' custom='!w-auto !text-left !p-0 border-0'/>
                    <NavItem text='MAQUILA' path='/maquila' custom='!w-auto !text-left !p-0 border-0' />
                    <NavItem text='NOSOTROS' path='/nosotros' custom='!w-auto !text-left !p-0 border-0' />
                    <NavItem text='CONTACTO' path='/contacto' custom='!w-auto !text-left !p-0 border-0' />
                </nav>
                <div className='w-1/3'>
                    <InspiralabFooterIcon className='m-auto' />
                </div>
                <div className='flex justify-end w-1/3'>
                    <nav className='flex flex-col items-center gap-4'>
                        <InstagramIcon color="#fff" />
                        <FacebookIcon color="#fff" />
                        <TiktokIcon color="#fff" />
                        <YoutubeIcon color="#fff" />
                    </nav>
                </div>
            </footer>

            <div className='bg-[#E71567] w-full text-center text-sm py-2'>
                <span>AVISO DE PRIVACIDAD</span>
            </div>
        </>
    )
}
