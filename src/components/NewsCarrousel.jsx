import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { NewsSlide } from './NewsSlide';
import { newsData } from '../data/data';

import 'swiper/css';
import 'swiper/css/navigation';
import { SliderArrowIcon } from '../icons';

export const NewsCarrousel = () => {
    const swiperRef = useRef(null);
    const [slideActive, setSlideActive] = useState(0);

    const handleSlideChange = () => {
        const swiperInstance = swiperRef.current.swiper;
        const activeIndex = swiperInstance.activeIndex; // Índice del slide activo
        setSlideActive(activeIndex);
    };

    const nextSlide = () => {
        if (slideActive === 4) return;
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
            <div className='absolute 3xl:w-[1600px] w-full max-w-[1500px] 3xl:max-w-[1600px] top-1/2 justify-between hidden xl:flex'>
                <button className='rotate-180' onClick={ prevSlide }>
                    <SliderArrowIcon />
                </button>
                <button className='' onClick={ nextSlide }>
                    <SliderArrowIcon />
                </button>
            </div>
            <Swiper
                ref={ swiperRef }
                slidesPerGroup={ 1 }
                allowTouchMove={ false }
                breakpoints={{
                    1280: {
                        slidesPerView: 3,  
                        spaceBetween: 10,
                    },
                    0: {
                        slidesPerView: 1.3,  
                        spaceBetween: 10,
                        allowTouchMove: true,
                    },
                }}
                className="mySwiper xl:!h-[600px] !h-[520px] 3xl:!w-[1410px] xl:!w-[1280px] z-20 px-5 xl:p-0"
                modules={[ Navigation ]}
            >
                {
                    newsData.map((news, index) => (
                        <SwiperSlide key={ news.id } className={`${ isActive(index) } rounded-3xl !items-start !justify-between overflow-hidden !bg-transparent max-w-[320px] xl:max-w-[unset]`}>
                            <NewsSlide 
                                isActive={ slideActive === index }
                                title={ news.title }
                                author={ news.author }
                                img={ news.img }
                                url={ news.url }
                            >
                                <p className="3xl:text-lg xl:text-base text-[13px] xl:leading-6 leading-4 xl:w-auto w-[220px]">
                                    { news.content }
                                </p>
                            </NewsSlide>
                        </SwiperSlide>
                    ))
                }
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
            </Swiper>
        </>
    )
}
