import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { NewsSlide } from './NewsSlide';
import { newsData } from '../data/data';

import 'swiper/css';
import 'swiper/css/navigation';


export const NewsCarrouselMobile = () => {
    return (
        <>
            <Swiper
                slidesPerGroup={ 1 }
                slidesPerView={ 1.2 }
                spaceBetween={ 10 }
                loop={ true }
                autoplay={{ delay: 5000 }}
                className="mySwiper !h-[600px] z-20"
                modules={[ Autoplay ]}
            >
                {
                    newsData.map((news) => (
                        <SwiperSlide key={ news.id } className={`rounded-3xl !items-start !justify-between overflow-hidden !bg-transparent`}>
                            <NewsSlide 
                                isActive={ true }
                                title={ news.title }
                                author={ news.author }
                                img={ news.img }
                                url={ news.url }
                            >
                                <p className="text-sm leading-4 w-[235px]">
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
