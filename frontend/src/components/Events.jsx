import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import EventImg1 from '../assets/images/events1.jpg';
import EventImg2 from '../assets/images/events2.jpg';
import EventImg3 from '../assets/images/events3.jpg';
import EventImg4 from '../assets/images/events4.jpg';
import EventImg5 from '../assets/images/events5.jpg';
import { useTranslation } from 'react-i18next';

const Events = () => {
  const { t } = useTranslation();
  return (
    <div className='flex flex-col items-center md:px-[20%] px-[10%] pb-[5%]'>
      <h3 className='font-bold md:text-4xl text-2xl text-center my-[5%]'>{t('events')}</h3>
      <div className='w-full flex justify-center'>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={4000}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay, Navigation, Pagination]}
          className='w-full'
        >
          <SwiperSlide className='flex justify-center'>
            <img src={EventImg1} alt="Event 1" />
          </SwiperSlide>
          <SwiperSlide className='flex justify-center'>
            <img src={EventImg2} alt="Event 2" />
          </SwiperSlide>
          <SwiperSlide className='flex justify-center'>
            <img src={EventImg3} alt="Event 3" />
          </SwiperSlide>
          <SwiperSlide className='flex justify-center'>
            <img src={EventImg4} alt="Event 4" />
          </SwiperSlide>
          <SwiperSlide className='flex justify-center'>
            <img src={EventImg5} alt="Event 5" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Events;
