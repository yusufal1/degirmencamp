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
import EventImg6 from '../assets/images/events6.jpg';

const Events = () => {
  return (
    <div className='px-[20%] pb-[5%]'>
      <h3 className='font-bold text-4xl text-center my-[5%]'>Etkinliklerimiz</h3>
      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={4000} // Bu değeri isteğinize göre ayarlayabilirsiniz
        breakpoints={{
          540: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Navigation, Pagination]}
      >
        <SwiperSlide>
          <img src={EventImg1} alt="Event 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={EventImg2} alt="Event 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={EventImg3} alt="Event 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={EventImg4} alt="Event 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={EventImg5} alt="Event 5" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Events;
