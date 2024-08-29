import { Button } from '../components';
import { FacebookIcon, InstagramIcon, TiktokIcon, YoutubeIcon, LocationIcon } from '../icons';
import { WeInspireBeauty } from '../lottie';
import { WeInspireBeautyCircle } from '../art';

export const ContactoPage = () => {
    return (
        <section className='h-screen w-full flex items-center justify-center gap-10 relative overflow-hidden'>
            <div className='w-[500px]'>
                <div className="absolute size-[750px] top-10 right-[55%]" >
                    <WeInspireBeauty />
                </div>
            </div>
            <div className='w-[1px] bg-[#E71667] h-[620px] mr-20'></div>
            <div className='flex'>
                <div className='flex flex-col gap-10'>
                    <h1 className='text-[#F5F5F5] text-5xl'>Contáctanos</h1>
                    <div className='flex flex-col gap-5'>
                        <Button text='WhatsApp' className='!w-[448px] flex justify-center border-[#E71667] text-[#E71567] !text-3xl' button={0} iconColor='#E71567' />
                        <Button text='Correo electrónico' className='!w-[448px] flex justify-center border-[#E71667] text-[#E71567] !text-3xl' button={0} iconColor='#E71567' />
                    </div>
                    <p className='inline-flex uppercase'>
                        <span className='mr-3 mt-1'><LocationIcon /></span>
                        Carlos Cabanillas 1021,<br/>
                        Lomas de Polanco,<br/>
                        44960 Guadalajara, Jal.
                    </p>
                    <div className='flex gap-5'>
                        <span className='bg-[#E0A5FF] size-[63px] rounded-full flex items-center justify-center'><InstagramIcon color="#E71567" /></span>
                        <span className='bg-[#E0A5FF] size-[63px] rounded-full flex items-center justify-center'><FacebookIcon color="#E71567" /></span>
                        <span className='bg-[#E0A5FF] size-[63px] rounded-full flex items-center justify-center'><TiktokIcon color="#E71567" /></span>
                        <span className='bg-[#E0A5FF] size-[63px] rounded-full flex items-center justify-center'><YoutubeIcon color="#E71567" /></span>
                    </div>
                </div>
                <div><WeInspireBeautyCircle className="animation-spin relative -top-32 left-5" /></div>
            </div>
        </section>
    )
}
