import React from 'react';
import Logo from '../../assets/images/degirmen-kamp-logo-siyah.png';
import { FaAddressBook } from "react-icons/fa";
import { MdMessage, MdEvent, MdAdminPanelSettings } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../redux/auth/authSlice';

const Navigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/admin/giris');
  };

  return (
    <div className='fixed top-0 left-0 h-screen bg-black text-white py-4 px-8 w-72 flex flex-col items-center'>
      <img src={Logo} alt="Logo" className='invert' width={100}/>
      <ul className='flex flex-col gap-4 mt-10 w-full'>
      <a href="/admin/ayarlar" className='admin-links'>
          <li className='flex gap-2 items-center'>
            <MdAdminPanelSettings/> Admin Ayarları
          </li>
        </a>
        <a href="/admin/rezervasyonlar" className='admin-links'>
          <li className='flex gap-2 items-center'>
            <FaAddressBook/> Rezervasyonlar
          </li>
        </a>
        <a href="/admin/mesajlar" className='admin-links'>
          <li className='flex gap-2 items-center'>
            <MdMessage/> Mesajlar
          </li>
        </a>
        <a href="/" className='admin-links'>
          <li className='flex gap-2 items-center'>
            <GiMoneyStack/> Ciro
          </li>
        </a>
        <a href="/admin/etkinlik-icerik" className='admin-links'>
          <li className='flex gap-2 items-center'>
            <MdEvent/> Etkinlikler
          </li>
        </a>
      </ul>
      <button onClick={handleLogout} className='mt-auto bg-red-800 text-white w-full rounded-lg py-3'>
        Çıkış Yap
      </button>
    </div>
  );
};

export default Navigation;
