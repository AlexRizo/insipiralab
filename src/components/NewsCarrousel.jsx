import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
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
        setSlideActive(swiperInstance.realIndex);
    };

    const nextSlide = () => {
        setSlideActive(slideActive + 1);
        setTimeout(() => {
            swiperRef.current.swiper.slideNext();
            handleSlideChange();
        } , 500);
    };

    const prevSlide = () => {
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
            <div className='absolute w-[95%] 3xl:w-[1600px] 3xl:max-w-[1600px] top-1/2 justify-between flex'>
                <button className='rotate-180 cursor-none' onClick={ prevSlide }>
                    <SliderArrowIcon />
                </button>
                <button  className='cursor-none' onClick={ nextSlide }>
                    <SliderArrowIcon />
                </button>
            </div>
            <Swiper
                ref={ swiperRef }
                slidesPerGroup={ 1 }
                allowTouchMove={ false }
                onSlideChange={ handleSlideChange }
                breakpoints={{
                    1280: {
                        slidesPerView: 3.3,
                        spaceBetween: 10,
                    },
                }}
                loop={ true }
                autoplay={{ delay: 5000 }}
                className="mySwiper !h-[600px] 3xl:!w-[1410px] !w-[1080px] z-20 p-0"
                modules={[ Navigation, Autoplay ]}
            >
                {
                    newsData.map((news, index) => (
                        <SwiperSlide key={ news.id } className={`${ isActive(index) } rounded-3xl !items-start !justify-between overflow-hidden !bg-transparent max-w-[unset]`}>
                            <NewsSlide 
                                isActive={ slideActive === index }
                                title={ news.title }
                                author={ news.author }
                                img={ news.img }
                                url={ news.url }
                            >
                                <p className="3xl:text-lg text-base xl:leading-6 w-auto">
                                    { news.content }
                                </p>
                            </NewsSlide>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    )
}
