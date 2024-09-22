import { Button } from '../components';
import { FacebookIcon, InstagramIcon, LocationIcon } from '../icons';
import { WeInspireBeauty, WeInspireCircle } from '../lottie';
import { useScreen } from '../hooks/useScreen';
import { useRandomContacts } from '../hooks';

export const ContactoPage = () => {
    const { screen } = useScreen();
    const { phoneNumber, email } = useRandomContacts();

    return (
        <section className='xl:h-screen w-full flex flex-col xl:flex-row items-center justify-center gap-10 relative overflow-hidden'>
            <div className='xl:w-[40%] h-[160px] xl:h-full relative flex xl:block items-center justify-center'>
                <div className="mt-40 2xl:mt-10 size-72 absolute xl:static xl:size-full xl:p-20 -translate-x-10" >
                    <WeInspireBeauty />
                </div>
            </div>
            <div className='w-[1px] bg-[#E71667] h-[620px] hidden xl:block mr-20'></div>
            <div className='flex flex-col xl:flex-row mt-10 xl:m-0'>
                <div className='flex flex-col items-center gap-10'>
                    <h1 className='text-[#F5F5F5] text-3xl 2xl:text-5xl'>Contáctanos</h1>
                    <div className='flex flex-col gap-5 w-full max-w-[310px] xl:max-w-[unset]'>
                        <Button text='WhatsApp' path={`https://wa.me/${ phoneNumber }?text=Hola,%20estoy%20interesado/a%20en%20conocer%20más%20sobre%20sus%20productos%20de%20belleza.%20¿Podrían%20brindarme%20más%20información?`} className='!w-full 2xl:!w-[448px] flex justify-center border-[#E71667] text-[#E71567] !text-lg 2xl:!text-3xl' button={0} iconColor='#E71567' />
                        <Button text='Correo electrónico' path={`mailto:${email}`} className='!w-full 2xl:!w-[448px] flex justify-center border-[#E71667] text-[#E71567] !text-lg 2xl:!text-3xl' button={0} iconColor='#E71567' />
                    </div>
                    <p className='inline-flex uppercase text-[10px] xl:text-base'>
                        <span className='mr-1 xl:mr-3 mt-1'>
                            {
                                screen === 1 ? <LocationIcon className='size-[14px]' /> : <LocationIcon />
                            }
                        </span>
                        Carlos Cabanillas 1021,<br/>
                        Lomas de Polanco,<br/>
                        44960 Guadalajara, Jal.
                    </p>
                    <div className='flex gap-5'>
                        <a href='https://www.instagram.com/inspiralabcosmetics' target='_blank' className='bg-[#E0A5FF] size-10 xl:size-[63px] rounded-full flex items-center justify-center'>
                            {
                                screen === 1 ? <InstagramIcon color="#E71567" width="22" height="22" /> : <InstagramIcon color="#E71567" />
                            }
                        </a>
                        <a href='https://www.facebook.com/inspiralabcosmetics' target='_blank' className='bg-[#E0A5FF] size-10 xl:size-[63px] rounded-full flex items-center justify-center'>
                            {
                                screen === 1 ? <FacebookIcon color="#E71567" width="12" height="24" /> : <FacebookIcon color="#E71567" />
                            }
                        </a>
                    </div>
                </div>
                <div className='mt-14 mb-5 relative'>
                    <div className='relative xl:-top-32 xl:left-5 max-w-72'>
                        <WeInspireCircle />
                    </div>
                </div>
            </div>
        </section>
    )
}
