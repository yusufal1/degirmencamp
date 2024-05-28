import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className='flex flex-col border-t mt-[5%]'>
      <div className='xl:px-[20%] px-[10%] py-10 flex-wrap gap-8 mx-auto'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
          <ul className='flex flex-col gap-3'>
            <h4 className='text-2xl mb-4'>{t('info')}</h4>
            <li><a href="https://www.google.com/maps/dir//Zeytinli,+Değirmen+Camping,+72.+Sk.+No:1,+10300+Edremit%2FBalıkesir/@39.6166619,26.9534734,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x14b0c7ad7a5570eb:0x4424817a18225443!2m2!1d26.9538132!2d39.6172539!3e0?entry=ttu" target='blank' className='text-gray-500'>{t('directions')}</a></li>
            <li><a href="/iletisim" className='text-gray-500'>{t('contact')}</a></li>
          </ul>
          <ul className='flex flex-col gap-3'>
            <h4 className='text-2xl mb-4'>{t('about-us')}</h4>
            <li><a href="/hakkimizda" className='text-gray-500'>{t('about-us')}</a></li>            
            <li><a href="/yorumlar" className='text-gray-500'>{t('comments')}</a></li>
          </ul>
          <ul className='flex flex-col gap-3'>
            <h4 className='text-2xl mb-4'>{t('reservation')}</h4>
            <li><a href="/rezervasyon" className='text-gray-500'>{t('bookNow')}</a></li>
            <li><a href="/seceneklerimiz" className='text-gray-500'>{t('options')}</a></li>
          </ul>
          <ul className='flex flex-col gap-3'>
            <h4 className='text-2xl mb-4'>{t('discover')}</h4>
            <li><a href="/etkinliklerimiz" className='text-gray-500'>{t('events')}</a></li>
            <li><a href="/sss" className='text-gray-500'>{t('faq')}</a></li>
          </ul>
        </div>
      </div>
      <div className='bg-[#EFEEEA] py-3 text-gray-500 text-center text-sm'>
        <span>Created By <a href="https://www.linkedin.com/in/yusuf-al" target='blank' className='text-secondary'>Yusuf AL</a> © 2024.</span>
      </div>
    </div>
  );
};

export default Footer;
