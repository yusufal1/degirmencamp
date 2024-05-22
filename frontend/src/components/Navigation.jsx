import React from 'react'

const Navigation = () => {
  return (
    <nav className='navbar-clip bg-[#EFEEEA] flex items-center justify-center pt-5'>      
        <ul className='flex flex-row gap-8 text-black'>
          <li><a href="/" className='active'>Ana Sayfa</a></li>
          <li><a href="/hakkimizda" className='hover:hover-links'>Hakkımızda</a></li>
          <li><a href="/seceneklerimiz" className='hover:hover-links'>Seçeneklerimiz</a></li>
          <li><a href="/etkinliklerimiz" className='hover:hover-links'>Etkinliklerimiz</a></li>
          <li><a href="/" className='hover:hover-links'>Galeri</a></li>
          <li><a href="/" className='hover:hover-links'>İletişim</a></li>
        </ul>
    </nav>
  )
}

export default Navigation