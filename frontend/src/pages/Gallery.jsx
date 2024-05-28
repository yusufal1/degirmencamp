import React, { useState, useEffect } from 'react';
import Image1 from '../assets/images/gorsel-1.jpg';
import Image2 from '../assets/images/gorsel-2.jpg';
import Image3 from '../assets/images/gorsel-3.jpg';
import Image4 from '../assets/images/gorsel-4.jpg';
import Image5 from '../assets/images/gorsel-5.jpg';
import Image6 from '../assets/images/gorsel-6.jpg';
import Image7 from '../assets/images/gorsel-7.jpg';
import Image8 from '../assets/images/gorsel-8.jpg';
import Image9 from '../assets/images/gorsel-9.jpg';
import Image10 from '../assets/images/gorsel-10.jpg';
import Image11 from '../assets/images/gorsel-11.jpg';
import Image12 from '../assets/images/gorsel-12.jpg';
import Image13 from '../assets/images/gorsel-13.jpg';
import Image14 from '../assets/images/gorsel-14.jpg';
import Image15 from '../assets/images/gorsel-15.jpg';
import Image16 from '../assets/images/gorsel-16.jpg';
import Image17 from '../assets/images/gorsel-17.jpg';
import Image18 from '../assets/images/gorsel-18.jpeg';
import Image19 from '../assets/images/gorsel-19.jpeg';
import Image20 from '../assets/images/gorsel-20.jpeg';
import Image21 from '../assets/images/gorsel-21.jpg';
import Image22 from '../assets/images/gorsel-22.jpg';
import { PiMouseScroll } from 'react-icons/pi';
import { useTranslation } from 'react-i18next';

const Gallery = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBlink(false);
    }, 4000); // 4 seconds to cover two blinks

    return () => clearTimeout(timer);
  }, []);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className='flex flex-col px-[10%] py-[10%] items-center gap-10'>
      <h1 className='font-bold md:text-5xl text-2xl'>{t('gallery')}</h1>
      <div className='relative w-full'>
        <div className='grid xl:grid-cols-4 md:grid-cols-2 gap-4 max-h-[750px] overflow-scroll'>
          <img src={Image1} alt="" className='gallery-image' onClick={() => openModal(Image1)} />
          <img src={Image2} alt="" className='gallery-image' onClick={() => openModal(Image2)} />
          <img src={Image3} alt="" className='gallery-image' onClick={() => openModal(Image3)} />
          <img src={Image4} alt="" className='gallery-image' onClick={() => openModal(Image4)} />
          <img src={Image5} alt="" className='gallery-image' onClick={() => openModal(Image5)} />
          <img src={Image6} alt="" className='gallery-image' onClick={() => openModal(Image6)} />
          <img src={Image7} alt="" className='gallery-image' onClick={() => openModal(Image7)} />
          <img src={Image8} alt="" className='gallery-image' onClick={() => openModal(Image8)} />
          <img src={Image9} alt="" className='gallery-image' onClick={() => openModal(Image9)} />
          <img src={Image10} alt="" className='gallery-image' onClick={() => openModal(Image10)} />
          <img src={Image11} alt="" className='gallery-image' onClick={() => openModal(Image11)} />
          <img src={Image12} alt="" className='gallery-image' onClick={() => openModal(Image12)} />
          <img src={Image13} alt="" className='gallery-image' onClick={() => openModal(Image13)} />
          <img src={Image14} alt="" className='gallery-image' onClick={() => openModal(Image14)} />
          <img src={Image15} alt="" className='gallery-image' onClick={() => openModal(Image15)} />
          <img src={Image16} alt="" className='gallery-image' onClick={() => openModal(Image16)} />
          <img src={Image17} alt="" className='gallery-image' onClick={() => openModal(Image17)} />
          <img src={Image18} alt="" className='gallery-image' onClick={() => openModal(Image18)} />
          <img src={Image19} alt="" className='gallery-image' onClick={() => openModal(Image19)} />
          <img src={Image20} alt="" className='gallery-image' onClick={() => openModal(Image20)} />
          <img src={Image21} alt="" className='gallery-image' onClick={() => openModal(Image21)} />
          <img src={Image22} alt="" className='gallery-image' onClick={() => openModal(Image22)} />
        </div>
        {blink && <PiMouseScroll size={80} className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 blink text-primary`} />}
      </div>

      {selectedImage && (
        <div className='modal' onClick={closeModal}>
          <div className='modal-content' onClick={(e) => e.stopPropagation()}>
            <span className='close' onClick={closeModal}>&times;</span>
            <img src={selectedImage} alt="" className='modal-image' />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
