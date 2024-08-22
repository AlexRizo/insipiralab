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
    return (
        <Swiper
            slidesPerView={ 5 }
            spaceBetween={ 10 }
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}
            modules={[ Navigation ]}
            className="mySwiper"
        >
            <div className="swiper-button-prev after:content-none w-auto rotate-180" >
                <SliderArrowIcon />
            </div>
            <div className="swiper-button-next after:content-none w-auto" >
                <SliderArrowIcon />
            </div>
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
    )
}
