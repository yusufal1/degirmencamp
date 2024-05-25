import React from 'react'
import Logo from '../assets/images/degirmen-kamp-logo-siyah.png'

const Footer = () => {
  return (
    <div className='flex flex-col border-t mt-[5%]'>
        <div className='flex px-[20%] py-10 flex-row justify-between'>
        <ul className='flex flex-col gap-3'>
            <h4 className='text-2xl mb-4'>Bilgi</h4>
            <li><a href="https://www.google.com/maps/dir//Zeytinli,+Değirmen+Camping,+72.+Sk.+No:1,+10300+Edremit%2FBalıkesir/@39.6166619,26.9534734,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x14b0c7ad7a5570eb:0x4424817a18225443!2m2!1d26.9538132!2d39.6172539!3e0?entry=ttu" target='blank' className='text-gray-500'>Yol Tarifi</a></li>
            <li><a href="/iletisim" className='text-gray-500'>İletişim</a></li>
        </ul>
        <ul className='flex flex-col gap-3'>
            <h4 className='text-2xl mb-4'>Hakkımızda</h4>
            <li><a href="/hakkimizda" className='text-gray-500'>Hakkımızda</a></li>            
            <li><a href="/yorumlar" className='text-gray-500'>Yorumlar</a></li>
        </ul>
        <a href="/"><img src={Logo} alt="logo" width={130}/></a>
        <ul className='flex flex-col gap-3'>
            <h4 className='text-2xl mb-4'>Rezervasyon</h4>
            <li><a href="/" className='text-gray-500'>Hemen Rezervasyon</a></li>
            <li><a href="/" className='text-gray-500'>Seçenekler</a></li>
        </ul>
        <ul className='flex flex-col gap-3'>
            <h4 className='text-2xl mb-4'>Keşfet</h4>
            <li><a href="/" className='text-gray-500'>Etkinliklerimiz</a></li>
            <li><a href="/" className='text-gray-500'>Sıkça Sorulan Sorular</a></li>
        </ul>
        </div>
        <div className='bg-[#EFEEEA] py-3 text-gray-500 text-center text-sm'>
            <span>Created By <a href="https://www.linkedin.com/in/yusuf-al" target='blank' className='text-secondary'>Yusuf AL</a> © 2024.</span>
        </div>
    </div>
  )
}

export default Footer