import { Button } from '../components';
import { FacebookIcon, InstagramIcon, TiktokIcon, YoutubeIcon, LocationIcon } from '../icons';
import { WeInspireBeauty, WeInspireCircle } from '../lottie';
import { useScreen } from '../hooks/useScreen';

export const ContactoPage = () => {
    const { screen } = useScreen();

    return (
        <section className='xl:h-screen w-full flex flex-col xl:flex-row items-center justify-center gap-10 relative overflow-hidden'>
            <div className='xl:w-[500px] h-72 xl:h-auto overflow-hidden'>
                <div className="absolute mt-10 size-96 -left-[10%] xl:left-[unset] xl:size-[750px] xl:top-10 xl:right-[55%]" >
                    <WeInspireBeauty />
                </div>
            </div>
            <div className='w-[1px] bg-[#E71667] h-[620px] hidden xl:block mr-20'></div>
            <div className='flex flex-col xl:flex-row mt-10 xl:m-0'>
                <div className='flex flex-col items-center gap-10'>
                    <h1 className='text-[#F5F5F5] text-3xl xl:text-5xl'>Contáctanos</h1>
                    <div className='flex flex-col gap-5 w-full max-w-[310px] xl:max-w-[unset]'>
                        <Button text='WhatsApp' className='!w-full xl:!w-[448px] flex justify-center border-[#E71667] text-[#E71567] !text-lg xl:!text-3xl' button={0} iconColor='#E71567' />
                        <Button text='Correo electrónico' className='!w-full xl:!w-[448px] flex justify-center border-[#E71667] text-[#E71567] !text-lg xl:!text-3xl' button={0} iconColor='#E71567' />
                    </div>
                    <p className='inline-flex uppercase text-[10px] xl:text-base'>
                        <span className='mr-1 xl:mr-3 mt-1'>
                            {
                                screen ? <LocationIcon className='size-[14px]' /> : <LocationIcon />
                            }
                        </span>
                        Carlos Cabanillas 1021,<br/>
                        Lomas de Polanco,<br/>
                        44960 Guadalajara, Jal.
                    </p>
                    <div className='flex gap-5'>
                        <span className='bg-[#E0A5FF] size-10 xl:size-[63px] rounded-full flex items-center justify-center'>
                            {
                                screen ? <InstagramIcon color="#E71567" width="22" height="22" /> : <InstagramIcon color="#E71567" />
                            }
                        </span>
                        <span className='bg-[#E0A5FF] size-10 xl:size-[63px] rounded-full flex items-center justify-center'>
                            {
                                screen ? <FacebookIcon color="#E71567" width="12" height="24" /> : <FacebookIcon color="#E71567" />
                            }
                        </span>
                        <span className='bg-[#E0A5FF] size-10 xl:size-[63px] rounded-full flex items-center justify-center'>
                            {
                                screen ? <TiktokIcon color="#E71567" width="20" height="23" /> : <TiktokIcon color="#E71567" />
                            }
                        </span>
                        <span className='bg-[#E0A5FF] size-10 xl:size-[63px] rounded-full flex items-center justify-center'>
                            {
                                screen ? <YoutubeIcon color="#E71567" width="23" height="16" /> : <YoutubeIcon color="#E71567" />
                            }
                        </span>
                    </div>
                </div>
                <div className='mt-14 mb-5'>
                    <div className='relative xl:-top-32 xl:left-5'>
                        <WeInspireCircle />
                    </div>
                </div>
            </div>
        </section>
    )
}
