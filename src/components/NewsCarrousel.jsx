import { act, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { NewsSlide } from './NewsSlide';

import 'swiper/css';
import 'swiper/css/navigation';


export const NewsCarrousel = () => {
    const swiperRef = useRef(null);
    const [slideActive, setSlideActive] = useState(0);

    const handleSlideChange = () => {
        const swiperInstance = swiperRef.current.swiper;
        const activeIndex = swiperInstance.activeIndex; // Índice del slide activo
        setSlideActive(activeIndex);
        console.log(activeIndex);
    };

    const nextSlide = () => {
        if (slideActive === 5) return;
        setSlideActive(slideActive + 1);
        setTimeout(() => {
            swiperRef.current.swiper.slideNext();
            handleSlideChange();
        } , 500);
    };

    const prevSlide = () => {
        if (slideActive === 0) return;
        setSlideActive(slideActive - 1);
        setTimeout(() => {
            swiperRef.current.swiper.slidePrev();
            handleSlideChange();
        } , 500);
    };
    
    const isActive = (index = 0) => {
        return index === slideActive ? 'animation-init' : 'animation-exit';
    }
    
    useEffect(() => {
        handleSlideChange();
    }, []);
    
    return (
        <>
        <button className='text-black' onClick={ nextSlide }>Next</button>
        <button className='text-black' onClick={ prevSlide }>Prev</button>
            <Swiper
                ref={ swiperRef }
                spaceBetween={ 20 }
                slidesPerView={ '3' }
                slidesPerGroup={ 1 }
                className="mySwiper !h-[600px]"
                // onSlideChange={ handleSlideChange }
                allowTouchMove={ false }
                modules={[ Navigation ]}
            >
                <SwiperSlide className={`${ isActive(0) } rounded-3xl !items-start !justify-between overflow-hidden !bg-transparent`}>
                    <NewsSlide isActive={ slideActive === 0 } />
                </SwiperSlide>
                <SwiperSlide className={`${ isActive(1)} rounded-3xl !items-start !justify-between overflow-hidden !bg-transparent`}>
                    <NewsSlide isActive={ slideActive === 1 } />
                </SwiperSlide>
                <SwiperSlide className={`${ isActive(2) } rounded-3xl !items-start !justify-between overflow-hidden !bg-transparent`}>
                    <NewsSlide isActive={ slideActive === 2 } />
                </SwiperSlide>
                <SwiperSlide className={`${isActive(3)} rounded-3xl !items-start !justify-between overflow-hidden !bg-transparent`}>
                    <NewsSlide isActive={ slideActive === 3 } />
                </SwiperSlide>
                <SwiperSlide className={`${isActive(4)} rounded-3xl !items-start !justify-between overflow-hidden !bg-transparent`}>
                    <NewsSlide isActive={ slideActive === 4 } />
                </SwiperSlide>
                <SwiperSlide className={`${isActive(5)} rounded-3xl !items-start !justify-between overflow-hidden !bg-transparent`}>
                    <NewsSlide isActive={ slideActive === 5 } />
                </SwiperSlide>
                <SwiperSlide className='opacity-0 !w-[600px]'></SwiperSlide>
                <SwiperSlide className='opacity-0 !w-[600px]'></SwiperSlide>
            </Swiper>
        </>
    )
}
