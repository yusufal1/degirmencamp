import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import main1 from "../assets/images/gorsel-1.jpg";
import main2 from "../assets/images/gorsel-3.jpg";
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import Booking from '../components/Booking';
import MainSection from '../components/MainSection';
import Cards from '../components/Cards';
import Events from '../components/Events';
import Comments from '../components/Comments';

const Homepage = () => {
  return (
    <div>
      <Carousel showThumbs={false} showStatus={false} autoPlay={true} infiniteLoop={true} renderArrowPrev={(clickHandler, hasPrev) => {
        return (
          <div
            className={`${
              hasPrev ? 'absolute' : 'hidden'
            } top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
            onClick={clickHandler}
          >
            <FaArrowCircleLeft className="w-9 h-9 text-white" />
          </div>
        );
      }}
      renderArrowNext={(clickHandler, hasNext) => {
        return (
          <div
            className={`${
              hasNext ? 'absolute' : 'hidden'
            } top-0 bottom-0 right-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
            onClick={clickHandler}
          >
            <FaArrowCircleRight className="w-9 h-9 text-white" />
          </div>
        );
      }}>
        <div className="relative">
          <img src={main1} alt='main' className="w-full h-auto" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center flex-col">
            <p className="text-white text-8xl">Doğanın Sesini</p>
            <p className="text-white text-8xl">Dinle</p>
            <a href="#booking" className='mt-7 text-white px-6 py-4 rounded-3xl rez-btn'>Rezervasyon</a>
          </div>
        </div>
        <div className="relative">
          <img src={main2} alt='banner' className="w-full h-auto" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center flex-col">
          <p className="text-white text-8xl">Dere Kenarında</p>
            <p className="text-white text-8xl">Huzur</p>
            <a href="#booking" className='mt-7 text-white px-6 py-4 rounded-3xl rez-btn'>Rezervasyon</a>
          </div>
        </div>
      </Carousel>
      <Booking/>
      <MainSection/>
      <Cards/>
      <Events/>
      <Comments/>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d98350.18082433296!2d26.87141228981586!3d39.61722479485123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x14b0c7ad7a5570eb%3A0x4424817a18225443!2sZeytinli%2C%2072.%20Sk.%20No%3A1%2C%2010300%20Edremit%2FBal%C4%B1kesir!3m2!1d39.6172539!2d26.9538132!5e0!3m2!1str!2str!4v1716325718706!5m2!1str!2str"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className='w-full h-[500px]'
      ></iframe>
    </div>
  );
}

export default Homepage;
