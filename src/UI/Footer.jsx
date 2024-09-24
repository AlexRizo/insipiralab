import { NavItem } from '../components'
import { useNavigateTo } from '../hooks/useNavigateTo'
import { FacebookIcon, InspiralabFooterIcon, InstagramIcon, TiktokIcon, YoutubeIcon } from '../icons'

export const Footer = () => {
    const onNavigate = useNavigateTo()
    
    return (
        <>
            <footer className='flex flex-col xl:flex-row justify-between items-center py-10 xl:py-20 px-40 w-full'>
                <nav className='flex flex-col items-center xl:items-start gap-3 xl:gap-6 xl:w-1/3 order-2 xl:order-none my-10 xl:my-0'>
                    <NavItem text='INICIO' path='/' custom='!w-auto !text-left !p-0 border-0'/>
                    <NavItem text='MAQUILA' path='/maquila' custom='!w-auto !text-left !p-0 border-0' />
                    <NavItem text='NOSOTROS' path='/nosotros' custom='!w-auto !text-left !p-0 border-0' />
                    <NavItem text='CONTACTO' path='/contacto' custom='!w-auto !text-left !p-0 border-0' />
                </nav>
                <div className='xl:w-1/3 order-1 xl:order-none' onClick={ onNavigate }>
                    <InspiralabFooterIcon className='m-auto hidden xl:block' />
                    <InspiralabFooterIcon className='m-auto xl:hidden' width='236' />
                </div>
                <div className='flex justify-end xl:w-1/3 order-3 xl:order-none'>
                    <nav className='flex xl:flex-col items-center gap-4'>
                        <a href='https://www.instagram.com/inspiralabcosmetics' className='cursor-none' target='_blank'>
                            <InstagramIcon color="#fff" />
                        </a>
                        <a href='https://www.facebook.com/inspiralabcosmetics' className='cursor-none' target='_blank'>
                            <FacebookIcon color="#fff" />
                        </a>
                        {/* <a>
                            <TiktokIcon color="#fff" />
                        </a>
                        <a>
                            <YoutubeIcon color="#fff" />
                        </a> */}
                    </nav>
                </div>
            </footer>
        </>
    )
}
