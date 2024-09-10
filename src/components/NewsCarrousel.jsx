import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { NewsSlide } from './NewsSlide';
import { newsData } from '../data/data';

import 'swiper/css';
import 'swiper/css/navigation';
import { SliderArrowIcon } from '../icons';
import { useMediaQuery } from 'react-responsive';

export const NewsCarrousel = () => {
    const screen = useMediaQuery({ query: '(max-width: 1000px)' });

    console.log(screen ? 'mobile' : 'desktop');
    
    const swiperRef = useRef(null);
    const [slideActive, setSlideActive] = useState(0);

    const handleSlideChange = () => {
        const swiperInstance = swiperRef.current.swiper;
        const activeIndex = swiperInstance.activeIndex; // Índice del slide activo
        setSlideActive(activeIndex);
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
            <div className='absolute 3xl:w-[1600px] w-[1490px] top-1/2 justify-between hidden 2xl:flex'>
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
                breakpoints={{
                    1500: {
                        slidesPerView: 3,  
                        spaceBetween: 10,
                    },
                    0: {
                        slidesPerView: 1.3,  
                        spaceBetween: 10,
                        allowTouchMove: true,
                    },
                }}
                className="mySwiper 2xl:!h-[600px] !h-[520px] 3xl:!w-[1410px] 2xl:!w-[1280px] z-20 px-5"
                modules={[ Navigation ]}
            >
                {
                    newsData.map((news, index) => (
                        <SwiperSlide key={ news.id } className={`${ isActive(index) } rounded-3xl !items-start !justify-between overflow-hidden !bg-transparent max-w-[320px] 2xl:max-w-[unset]`}>
                            <NewsSlide 
                                isActive={ slideActive === index }
                                title={ news.title }
                                author={ news.author }
                                img={ news.img }
                                url={ news.url }
                            >
                                <p className="3xl:text-lg 2xl:text-base text-[13px] 2xl:leading-6 leading-4 2xl:w-auto w-[220px]">
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
