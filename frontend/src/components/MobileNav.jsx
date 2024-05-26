import React from 'react'
import { FaInstagram } from "react-icons/fa";

const MobileNav = () => {
  return (
      <ul className='flex flex-col gap-5 w-full items-center text-xl text-white'>
        <li>
          <a
            href="/"
            className='hover:hover-links'
          >
            Ana Sayfa
          </a>
        </li>
        <li>
          <a
            href="/hakkimizda"
            className='hover:hover-links'
          >
            Hakkımızda
          </a>
        </li>
        <li>
          <a
            href="/seceneklerimiz"
            className='hover:hover-links'
          >
            Seçeneklerimiz
          </a>
        </li>
        <li>
          <a
            href="/etkinliklerimiz"
            className='hover:hover-links'
          >
            Etkinliklerimiz
          </a>
        </li>
        <li>
          <a
            href="/galeri"
            className='hover:hover-links'
          >
            Galeri
          </a>
        </li>
        <li>
          <a
            href="/iletisim"
            className='hover:hover-links'
          >
            İletişim
          </a>
        </li>
        <div className='flex flex-row gap-4 justify-center'>
                    <a href="https://www.instagram.com/degirmen_camp/" target='blank'><FaInstagram size={40}/></a>
                    <select className='outline-none px-2 bg-transparent text-white'>
                        <option value="TR" className='text-black'>TR</option>
                        <option value="EN" className='text-black'>EN</option>
                    </select>
        </div>
      </ul>
  )
}

export default MobileNav