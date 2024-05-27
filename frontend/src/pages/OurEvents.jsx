import React from 'react'
import Events from '../components/Events'

const OurEvents = () => {
  return (
    <div className='px-[10%]'>
        <Events/>
        <p className='text-center sm:text-base text-xs'>Değirmen Camping olarak tesisimizde Off Road, Kano, Yoga ve canlı müzik gibi etkinlikler düzenliyoruz. Etkinlik detaylarına ve tarihlerine ulaşmak için <a href="https://www.instagram.com/degirmen_camp/" target='blank' className='text-secondary sm:text-base text-xs'>Instagram</a> sayfamızı takip ediniz.</p>
    </div>
  )
}

export default OurEvents