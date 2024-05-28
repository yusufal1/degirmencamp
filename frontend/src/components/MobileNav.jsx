import React from 'react'
import { useTranslation } from 'react-i18next';
import { FaInstagram } from "react-icons/fa";

const MobileNav = () => {
  const { t, i18n } = useTranslation();
  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
};
  return (
      <ul className='flex flex-col gap-5 w-full items-center text-xl text-white'>
        <li>
          <a
            href="/"
            className='hover:hover-links'
          >
            {t('homepage')}
          </a>
        </li>
        <li>
          <a
            href="/hakkimizda"
            className='hover:hover-links'
          >
            {t('about-us')}
          </a>
        </li>
        <li>
          <a
            href="/seceneklerimiz"
            className='hover:hover-links'
          >
            {t('options')}
          </a>
        </li>
        <li>
          <a
            href="/etkinliklerimiz"
            className='hover:hover-links'
          >
            {t('events')}
          </a>
        </li>
        <li>
          <a
            href="/galeri"
            className='hover:hover-links'
          >
            {t('gallery')}
          </a>
        </li>
        <li>
          <a
            href="/iletisim"
            className='hover:hover-links'
          >
            {t('contact')}
          </a>
        </li>
        <div className='flex flex-row gap-4 justify-center'>
                    <a href="https://www.instagram.com/degirmen_camp/" target='blank'><FaInstagram size={40}/></a>
                    <select className='outline-none px-2 bg-transparent text-white' onChange={handleLanguageChange}>
                        <option value="tr" className='text-black'>TR</option>
                        <option value="en" className='text-black'>EN</option>
                    </select>
        </div>
      </ul>
  )
}

export default MobileNav