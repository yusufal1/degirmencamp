import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Avatar from '../assets/images/avatar.png'
import Avatar2 from '../assets/images/avatar2.png'

const Comments = () => {
  return (
       

        <div className='flex bg-[#EFEEEA] flex-col items-center px-[10%] pb-[5%]'>
      <h3 className='font-bold md:text-4xl text-2xl text-center my-[5%]'>Misafirlerimizin Yorumları</h3>
      <div className='w-full flex justify-center'>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={6000}
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
          <div className='flex flex-col gap-8 items-center'>
                <img src={Avatar} className='rounded-full border-4 border-secondary' width={100} alt="" />
                <p className='text-center text-gray-500'>Konumu merkezi, temizlik ve güvenlik konularında sıkıntısı olmayan bir kamp alanı. Elektrik ve şebeke sorunu yok, hem kamp yaptık hem de uzaktan çalışarak işlerimize devam ettik. İlgisinden dolayı İsmail abi'ye teşekkür ederiz.</p>
                <span className='mt-auto'>Ali Batir</span>
            </div>
          </SwiperSlide>
          <SwiperSlide className='flex justify-center'>
          <div className='flex flex-col gap-8 items-center'>
                <img src={Avatar} className='rounded-full border-4 border-secondary' width={100} alt="" />
                <p className='text-center text-gray-500'>Edremit Zeytinli köyünün çok tatlı bir kamp alanı burası. İsmail abi ve Muharrem abi bizleri güleryüzlü bir şekilde karşıladılar. Ortak kulanım alanları duş , tuvalet ve mutfakları da temizdi. Dere kenarında huzurlu iki gün geçirdik.</p>
                <span className='mt-auto'>gezginhocayollarda</span>
            </div>

          </SwiperSlide>
          <SwiperSlide className='flex justify-center'>
          <div className='flex flex-col gap-8 items-center'>
                <img src={Avatar2} className='rounded-full border-4 border-secondary' width={100} alt="" />
                <p className='text-center text-gray-500'>Gayet temiz ve huzurlu bir ortam, işletme sahipleri her konuda yardımcı oluyor. Üstelik köye de çok yakın, ihtiyaçları karşılamak 5 dakika. Yolu rahat.</p>
                <span className='mt-auto'>seda çelebi</span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Comments