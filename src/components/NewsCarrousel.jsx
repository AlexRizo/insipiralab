import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';


export const NewsCarrousel = () => {
    const swiperRef = useRef(null);
    const [slideActive, setSlideActive] = useState(0);

    const handleSlideChange = () => {
        const swiperInstance = swiperRef.current.swiper;
        const activeIndex = swiperInstance.activeIndex; // Índice del slide activo
        setSlideActive(activeIndex);
    };
    
    return (
        <Swiper
            ref={ swiperRef }
            spaceBetween={ 30 }
            slidesPerView={ 'auto' }
            className="mySwiper border-2 border-pink-900"
            onSlideChange={ handleSlideChange }
            autoplay={{
                delay: 3000,
                disableOnInteraction: false
            }}
            modules={[ Autoplay ]}
        >
            <SwiperSlide className={`${slideActive === 0 ? 'animate-alarge !bg-pink-600' : '!w-1/4'} rounded-3xl`}>Slide 1</SwiperSlide>
            <SwiperSlide className={`${slideActive === 1 ? 'animate-alarge !bg-pink-600' : '!w-1/4'} rounded-3xl`}>Slide 2</SwiperSlide>
            <SwiperSlide className={`${slideActive === 2 ? 'animate-alarge !bg-pink-600' : '!w-1/4'} rounded-3xl`}>Slide 3</SwiperSlide>
            <SwiperSlide className={`${slideActive === 3 ? 'animate-alarge !bg-pink-600' : '!w-1/4'} rounded-3xl`}>Slide 4</SwiperSlide>
            <SwiperSlide className={`${slideActive === 4 ? 'animate-alarge !bg-pink-600' : '!w-1/4'} rounded-3xl`}>Slide 5</SwiperSlide>
            <SwiperSlide className={`${slideActive === 5 ? 'animate-alarge !bg-pink-600' : '!w-1/4'} rounded-3xl`}>Slide 6</SwiperSlide>
            <SwiperSlide className={`${slideActive === 6 ? 'animate-alarge !bg-pink-600' : '!w-1/4'} rounded-3xl`}>Slide 7</SwiperSlide>
            <SwiperSlide className={`${slideActive === 7 ? 'animate-alarge !bg-pink-600' : '!w-1/4'} rounded-3xl`}>Slide 8</SwiperSlide>
            <SwiperSlide className={`${slideActive === 8 ? 'animate-alarge !bg-pink-600' : '!w-1/4'} rounded-3xl`}>Slide 9</SwiperSlide>
            <SwiperSlide className='opacity-0 !w-[60%]'></SwiperSlide>
      </Swiper>
    )
}
