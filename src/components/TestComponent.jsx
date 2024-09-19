import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { useState } from 'react';
import { NewsSlide } from './NewsSlide';
import { newsData } from '../data/data';

// Importar módulos si es necesario

export const TestComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    { id: 1, content: 'Slide 1', buttonText: 'Button 1' },
    { id: 2, content: 'Slide 2', buttonText: 'Button 2' },
    { id: 3, content: 'Slide 3', buttonText: 'Button 3' },
    { id: 4, content: 'Slide 4', buttonText: 'Button 4' },
    { id: 5, content: 'Slide 5', buttonText: 'Button 5' },
  ];


  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex); // Usamos realIndex en caso de tener loop: true
  };

  return (
        <Swiper
        loop={true}
        onSlideChange={handleSlideChange}
        autoplay={{ delay: 3000 }}
        slidesPerView={3}
        slidesPerGroup={1}
        spaceBetween={5}
        className='!h-[530px]'
        >
            { newsData.map((news, index) => (
                <SwiperSlide key={news.id} className='bg-transparent flex items-center justify-center !h-full'>
                        <NewsSlide 
                            isActive={ activeIndex === index }
                            title={ news.title }
                            author={ news.author }
                            img={ news.img }
                            url={ news.url }
                        >
                            <p className="3xl:text-lg xl:text-base text-[13px] xl:leading-5 leading-4 xl:w-auto w-[220px]">
                                { news.content }
                            </p>
                        </NewsSlide>
                </SwiperSlide>
            ))}
        </Swiper>
    )
};