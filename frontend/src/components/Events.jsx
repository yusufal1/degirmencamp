import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

const Events = () => {
  const { t } = useTranslation();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/photos');
        if (response.ok) {
          const data = await response.json();
          setPhotos(data);
        } else {
          console.error('Failed to fetch photos');
        }
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };

    fetchPhotos();
  }, []);

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
          {photos.map((photo, index) => (
            <SwiperSlide key={index} className='flex justify-center'>
              <img src={`http://localhost:5000${photo.image}`} alt={`Event ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Events;
