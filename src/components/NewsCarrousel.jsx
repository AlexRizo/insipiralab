import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { NewsSlide } from './NewsSlide';

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
            <div className='absolute 3xl:w-[1600px] w-[1490px] top-1/2 flex justify-between'>
                <button className='rotate-180' onClick={ prevSlide }>
                    <SliderArrowIcon />
                </button>
                <button className='' onClick={ nextSlide }>
                    <SliderArrowIcon />
                </button>
            </div>
            <Swiper
                ref={ swiperRef }
                spaceBetween={ 10 }
                slidesPerView={ 3.5 }
                slidesPerGroup={ 1 }
                className="mySwiper !h-[600px] 3xl:!w-[1410px] !w-[1280px] z-20"
                allowTouchMove={ false }
                modules={[ Navigation ]}
            >
                <SwiperSlide className={`${ isActive(0) } rounded-3xl !items-start !justify-between overflow-hidden !bg-transparent`}>
                    <NewsSlide 
                        isActive={ slideActive === 0 }
                        title={ <>Embellecen a la mujer con<br /> cosméticos sustentables</> }
                        author='El Informador'
                        img='bg-[url("/img/home/news-slider-imagen-1.jpg")]'
                    >
                        <p className="3xl:text-lg text-base leading-6">
                            En medio de mucha<br/> necesidad<br/>
                            económica y desesperación<br/> por 
                            la pandemia del<br/> COVID-19,<br/>
                            Denisse Reynoso comenzó<br/> a 
                            elaborar pomadas y<br/> cremas en 
                            el patio de la<br/> casa de sus 
                            papás. Así<br/> nació Gardenia 
                            Naturals.
                        </p>
                    </NewsSlide>
                </SwiperSlide>
                <SwiperSlide className={`${ isActive(1)} rounded-3xl !items-start !justify-between overflow-hidden !bg-transparent`}>
                    <NewsSlide 
                        isActive={ slideActive === 1 } 
                        title={ <>Acné y pandemia<br/> la llevan al éxito</> }
                        author='Mural' img='bg-[url("/img/home/news-slider-imagen-2.jpg")]'
                    >
                        <p className="3xl:text-lg text-base leading-6">
                            La necesidad de dinero<br/> 
                            a la economía de su<br/> casa, combinada 
                            con las<br/> ganas de tener una piel<br/> 
                            bonita, hicieron que Denisse<br/> Reynoso 
                            Barragán creara<br/> Laboratorio, 
                            Formulación y<br/> Desarrollos Gardenia<br/> 
                            Naturals, Cosmética Natural<br/> e Insumos.
                        </p>

                    </NewsSlide>
                </SwiperSlide>
                <SwiperSlide className={`${ isActive(2) } rounded-3xl !items-start !justify-between overflow-hidden !bg-transparent`}>
                    <NewsSlide
                        isActive={ slideActive === 2 }
                        title={ <>Gana Premio<br/> Emprendedor<br/> Coparmex laboratorio<br/> de cosméticos</> }
                        author='Mural'
                        img='bg-[url("/img/home/news-slider-imagen-3.jpg")]'
                    >
                        <p className="3xl:text-lg text-base leading-6">
                            La llegada a la luna fue el tema<br/> 
                            en la edición 18 del Premio<br/> 
                            Emprendedor Coparmex,<br/> 
                            debido a los sueños que<br/> 
                            representan.
                        </p>
                    </NewsSlide>
                </SwiperSlide>
                <SwiperSlide className={`${ isActive(3) } rounded-3xl !items-start !justify-between overflow-hidden !bg-transparent`}>
                    <NewsSlide 
                        isActive={ slideActive === 3 }
                        title={ <>Embellecen a la mujer con<br /> cosméticos sustentables</> }
                        author='El Informador'
                        img='bg-[url("/img/home/news-slider-imagen-1.jpg")]'
                    >
                        <p className="3xl:text-lg text-base leading-6">
                            En medio de mucha<br/> necesidad<br/>
                            económica y desesperación<br/> por 
                            la pandemia del<br/> COVID-19,<br/>
                            Denisse Reynoso comenzó<br/> a 
                            elaborar pomadas y<br/> cremas en 
                            el patio de la<br/> casa de sus 
                            papás. Así<br/> nació Gardenia 
                            Naturals.
                        </p>
                    </NewsSlide>
                </SwiperSlide>
                <SwiperSlide className={`${ isActive(4)} rounded-3xl !items-start !justify-between overflow-hidden !bg-transparent`}>
                    <NewsSlide 
                        isActive={ slideActive === 4 } 
                        title={ <>Acné y pandemia<br/> la llevan al éxito</> }
                        author='Mural' img='bg-[url("/img/home/news-slider-imagen-2.jpg")]'
                    >
                        <p className="3xl:text-lg text-base leading-6">
                            La necesidad de dinero<br/> 
                            a la economía de su<br/> casa, combinada 
                            con las<br/> ganas de tener una piel<br/> 
                            bonita, hicieron que Denisse<br/> Reynoso 
                            Barragán creara<br/> Laboratorio, 
                            Formulación y<br/> Desarrollos Gardenia<br/> 
                            Naturals, Cosmética Natural<br/> e Insumos.
                        </p>

                    </NewsSlide>
                </SwiperSlide>
                <SwiperSlide className={`${ isActive(5) } rounded-3xl !items-start !justify-between overflow-hidden !bg-transparent`}>
                    <NewsSlide
                        isActive={ slideActive === 5 }
                        title={ <>Gana Premio<br/> Emprendedor<br/> Coparmex laboratorio<br/> de cosméticos</> }
                        author='Mural'
                        img='bg-[url("/img/home/news-slider-imagen-3.jpg")]'
                    >
                        <p className="3xl:text-lg text-base leading-6">
                            La llegada a la luna fue el tema<br/> 
                            en la edición 18 del Premio<br/> 
                            Emprendedor Coparmex,<br/> 
                            debido a los sueños que<br/> 
                            representan.
                        </p>
                    </NewsSlide>
                </SwiperSlide>
                <SwiperSlide className='opacity-0 !w-[600px]'></SwiperSlide>
                <SwiperSlide className='opacity-0 !w-[600px]'></SwiperSlide>
            </Swiper>
        </>
    )
}
