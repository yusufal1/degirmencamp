import React from 'react'
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  return (
    <div className='flex flex-col items-center pt-[10%] md:px-[20%] px-[10%] gap-10 h-screen'>
        <h1 className='font-bold md:text-5xl text-2xl'>{t('about-us')}</h1>
        <p className='text-center md:leading-9 leading-6'>{t('about-sentence')}</p>
    </div>
  )
}

export default About