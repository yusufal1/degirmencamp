import React from 'react'
import Img11 from '../assets/images/gorsel-11.jpg'
import { FaCampground } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { useTranslation } from 'react-i18next';


const MainSection = () => {
    const { t } = useTranslation();
  return (
    <section className='flex lg:flex-row flex-col justify-center my-[5%] lg:items-start items-center gap-10 lg:px-0 px-[10%]'>
        <div className=''>
            <img src={Img11} alt="sectionImage" className='img-clip w-[400px]'/>
        </div>
        <div className='flex flex-col gap-8 basis-1/4 '>
            <h4 className='font-bold text-3xl'>{t('main-title1')}</h4>
            <div className='flex gap-4 items-center'>
                <FaCampground size={70} className='text-primary'/>
                <p className='text-gray-500 text-xl'>{t('main-title2')}</p>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='flex'><TiTick size={25} className='text-primary'/> <p className='ml-2 text-gray-500'>{t('main-sentence1')}</p></div>
                <div className='flex'><TiTick size={25} className='text-primary'/> <p className='ml-2 text-gray-500'>{t('main-sentence2')}</p></div>
                <div className='flex'><TiTick size={25} className='text-primary'/> <p className='ml-2 text-gray-500'>{t('main-sentence3')}</p></div>
            </div>
            <a href="/seceneklerimiz" className='mt-7 text-white px-6 py-4 rounded-3xl rez-btn text-center'>{t('discoverMore')}</a>
        </div>
    </section>
  )
}

export default MainSection