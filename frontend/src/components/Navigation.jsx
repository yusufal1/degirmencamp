import React from 'react'
import { useLocation } from 'react-router-dom'

const Navigation = () => {
  const location = useLocation()
  const selected = location.pathname

  return (
    <nav className='navbar-clip bg-[#EFEEEA] md:flex items-center justify-center hidden pt-5'>
      <ul className='flex flex-row gap-8 text-black'>
        <li>
          <a
            href="/"
            className={`${selected === '/' ? 'active' : ''} hover:hover-links`}
          >
            Ana Sayfa
          </a>
        </li>
        <li>
          <a
            href="/hakkimizda"
            className={`${selected === '/hakkimizda' ? 'active' : ''} hover:hover-links`}
          >
            Hakkımızda
          </a>
        </li>
        <li>
          <a
            href="/seceneklerimiz"
            className={`${selected === '/seceneklerimiz' ? 'active' : ''} hover:hover-links`}
          >
            Seçeneklerimiz
          </a>
        </li>
        <li>
          <a
            href="/etkinliklerimiz"
            className={`${selected === '/etkinliklerimiz' ? 'active' : ''} hover:hover-links`}
          >
            Etkinliklerimiz
          </a>
        </li>
        <li>
          <a
            href="/galeri"
            className={`${selected === '/galeri' ? 'active' : ''} hover:hover-links`}
          >
            Galeri
          </a>
        </li>
        <li>
          <a
            href="/iletisim"
            className={`${selected === '/iletisim' ? 'active' : ''} hover:hover-links`}
          >
            İletişim
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation