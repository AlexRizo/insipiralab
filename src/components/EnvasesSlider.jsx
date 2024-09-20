import { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EnvaseSlide } from './EnvaseSlide';
import { SliderArrowIcon } from '../icons';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

export const EnvasesSlider = () => {
    const swiperRef = useRef(null);

    const onNavigate = (direction = '') => {
        if (direction === 'next') {
            swiperRef.current.swiper.slideNext();
        } else {
            swiperRef.current.swiper.slidePrev();
        }
    };
    
    return (
        <>
            <Swiper
                ref={ swiperRef }
                breakpoints={{
                    1280: {
                        slidesPerView: 5,  // 5 slides cuando la ventana es >= 1500px
                        spaceBetween: 5,  // 20px de espacio entre slides en pantallas grandes
                    },
                    0: {
                        slidesPerView: 1,  // 2 slides cuando la ventana es >= 1000px
                        spaceBetween: 0,  // 20px de espacio entre slides en pantallas grandes
                    },
                }}
                loop={ true }
                slidesPerGroup={1}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                modules={[ Navigation, Autoplay ]}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                className="mySwiper"
            >
                <SwiperSlide className="!bg-transparent w-min">
                    <EnvaseSlide img='/img/home/envase-1.png' name='envase 1' />
                </SwiperSlide>
                <SwiperSlide className="!bg-transparent w-min">
                    <EnvaseSlide img='/img/home/envase-2.png' name='envase 2' />
                </SwiperSlide>
                <SwiperSlide className="!bg-transparent w-min">
                    <EnvaseSlide img='/img/home/envase-3.png' name='envase 3' />
                </SwiperSlide>
                <SwiperSlide className="!bg-transparent w-min">
                    <EnvaseSlide img='/img/home/envase-4.png' name='envase 4' />
                </SwiperSlide>
                <SwiperSlide className="!bg-transparent w-min">
                    <EnvaseSlide img='/img/home/envase-5.png' name='envase 5' />
                </SwiperSlide>
                <SwiperSlide className="!bg-transparent w-min">
                    <EnvaseSlide img='/img/home/envase-6.png' name='envase 6' />
                </SwiperSlide>
                <SwiperSlide className="!bg-transparent w-min">
                    <EnvaseSlide img='/img/home/envase-7.png' name='envase 7' />
                </SwiperSlide>
                <SwiperSlide className="!bg-transparent w-min">
                    <EnvaseSlide img='/img/home/envase-8.png' name='envase 8' />
                </SwiperSlide>
                <SwiperSlide className="!bg-transparent w-min">
                    <EnvaseSlide img='/img/home/envase-9.png' name='envase 9' />
                </SwiperSlide>
                <SwiperSlide className="!bg-transparent w-min">
                    <EnvaseSlide img='/img/home/envase-10.png' name='envase 10' />
                </SwiperSlide>
            </Swiper>
            <div className="absolute 3xl:w-[85%] w-[90%] -translate-y-8 flex justify-between z-10">
                <div onClick={ onNavigate } className="rotate-180 cursor-pointer">
                    <SliderArrowIcon/>
                </div>
                <div onClick={ () => onNavigate('next') } className="cursor-pointer" >
                    <SliderArrowIcon/>
                </div>
            </div>
        </>
    )
}
