import React from 'react'
import Logo from '../../assets/images/degirmen-kamp-logo-siyah.png'
import { FaAddressBook } from "react-icons/fa";
import { MdMessage, MdOutlineRealEstateAgent } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";

const Navigation = () => {
  return (
    <div className='h-screen bg-black text-white py-4 px-8 min-w-72 flex items-center flex-col'>
        <img src={Logo} alt="" className='invert' width={100}/>
        <ul className='flex flex-col gap-4 mt-10 w-full'>
            <a href="/admin/rezervasyonlar" className='admin-links'><li className='flex gap-2 items-center'><FaAddressBook/> Rezervasyonlar</li></a>
            <a href="/admin/odalar" className='admin-links'><li className='flex gap-2 items-center'><MdOutlineRealEstateAgent/> Oda Durumları</li></a>
            <a href="/" className='admin-links'><li className='flex gap-2 items-center'><MdMessage/> Mesajlar</li></a>
            <a href="/" className='admin-links'><li className='flex gap-2 items-center'><GiMoneyStack/> Ciro</li></a>
        </ul>
    </div>
  )
}

export default Navigation