import { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EnvaseSlide } from './EnvaseSlide';
import { SliderArrowIcon } from '../icons';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

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
                slidesPerView={ 5 }
                spaceBetween={ 10 }
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                modules={[ Navigation ]}
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
            </Swiper>
            <div className="absolute 3xl:w-[85%] w-[90%] flex justify-between z-10">
                <SliderArrowIcon onClick={ onNavigate } className="rotate-180 cursor-pointer" />
                <SliderArrowIcon onClick={ () => onNavigate('next') } className="cursor-pointer" />
            </div>
        </>
    )
}
