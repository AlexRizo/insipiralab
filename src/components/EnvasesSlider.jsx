// Import Swiper React components
import { Swiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

export const EnvasesSlider = () => {
    return (
        <Swiper
            slidesPerView={ 3 }
            spaceBetween={ 30 }
            navigation={ true }
            modules={[ Navigation ]}
            className="mySwiper"
        >
            
        </Swiper>
    )
}
