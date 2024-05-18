import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import main from "../assets/images/main.jpg";
import banner from "../assets/images/banner.jpeg";
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import Booking from '../components/Booking';

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
          <img src={main} alt='main' className="w-full h-auto" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center flex-col">
            <p className="text-white text-8xl">Doğanın Sesini</p>
            <p className="text-white text-8xl">Dinle</p>
            <a href="#booking" className='mt-7 text-white px-6 py-4 rounded-3xl rez-btn'>Rezervasyon</a>
          </div>
        </div>
        <div className="relative">
          <img src={banner} alt='banner' className="w-full h-auto" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center flex-col">
          <p className="text-white text-8xl">Dere Kenarında</p>
            <p className="text-white text-8xl">Huzur</p>
            <a href="#booking" className='mt-7 text-white px-6 py-4 rounded-3xl rez-btn'>Rezervasyon</a>
          </div>
        </div>
      </Carousel>
      <Booking/>
    </div>
  );
}

export default Homepage;
