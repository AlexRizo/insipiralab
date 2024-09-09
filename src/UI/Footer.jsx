import { NavItem } from '../components'
import { useNavigateTo } from '../hooks/useNavigateTo'
import { FacebookIcon, InspiralabFooterIcon, InstagramIcon, TiktokIcon, YoutubeIcon } from '../icons'

export const Footer = () => {
    const { onNavigate } = useNavigateTo()
    
    return (
        <>
            <footer className='flex flex-col 2xl:flex-row justify-between items-center py-10 2xl:py-20 px-40 w-full'>
                <nav className='flex flex-col items-center 2xl:items-start gap-3 2xl:gap-6 2xl:w-1/3 order-2 2xl:order-none my-10 2xl:my-0'>
                    <NavItem text='INICIO' path='/' custom='!w-auto !text-left !p-0 border-0'/>
                    <NavItem text='MAQUILA' path='/maquila' custom='!w-auto !text-left !p-0 border-0' />
                    <NavItem text='NOSOTROS' path='/nosotros' custom='!w-auto !text-left !p-0 border-0' />
                    <NavItem text='CONTACTO' path='/contacto' custom='!w-auto !text-left !p-0 border-0' />
                </nav>
                <div className='2xl:w-1/3 order-1 2xl:order-none' onClick={ onNavigate }>
                    <InspiralabFooterIcon className='m-auto hidden 2xl:block' />
                    <InspiralabFooterIcon className='m-auto 2xl:hidden' width='236' />
                </div>
                <div className='flex justify-end 2xl:w-1/3 order-3 2xl:order-none'>
                    <nav className='flex 2xl:flex-col items-center gap-4'>
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
