import React from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const Navigation = () => {
  const {t} = useTranslation();
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
            {t('homepage')}
          </a>
        </li>
        <li>
          <a
            href="/hakkimizda"
            className={`${selected === '/hakkimizda' ? 'active' : ''} hover:hover-links`}
          >
            {t('about-us')}
          </a>
        </li>
        <li>
          <a
            href="/seceneklerimiz"
            className={`${selected === '/seceneklerimiz' ? 'active' : ''} hover:hover-links`}
          >
            {t('options')}
          </a>
        </li>
        <li>
          <a
            href="/etkinliklerimiz"
            className={`${selected === '/etkinliklerimiz' ? 'active' : ''} hover:hover-links`}
          >
            {t('events')}
          </a>
        </li>
        <li>
          <a
            href="/galeri"
            className={`${selected === '/galeri' ? 'active' : ''} hover:hover-links`}
          >
            {t('gallery')}
          </a>
        </li>
        <li>
          <a
            href="/iletisim"
            className={`${selected === '/iletisim' ? 'active' : ''} hover:hover-links`}
          >
            {t('contact')}
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation