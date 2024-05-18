import React from 'react';
import Navigation from './Navigation';
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../assets/images/degirmen-kamp-logo-siyah.png";

const Header = () => {
  return (
    <header className='flex flex-col w-full whitespace-nowrap'>
        <div className='h-20 flex flex-row justify-between items-center px-[5%]'>
            <div className='flex-1 flex justify-center'>
                <div className='flex flex-row justify-between gap-5'>
                    <a className='flex items-center gap-2' href="tel:0535 411 30 12">
                        <BsFillTelephoneFill size={20} className='text-primary'/> +90 535 411 30 12
                    </a>
                    <span>|</span>
                    <a className='flex items-center gap-2' href="mailto:info@degirmencamp.com">
                        <IoMdMail size={20} className='text-primary'/>info@degirmencamp.com
                    </a>
                </div>
            </div>
            <div className='flex-1 flex justify-center'>
                <a href="/"><img src={logo} alt="logo" width={130}/></a>
            </div>
            <div className='flex-1 flex justify-center'>
                <div className='flex flex-row gap-4'>
                    <a href="https://www.instagram.com/degirmen_camp/"><FaFacebook size={40}/></a>
                    <a href="https://www.instagram.com/degirmen_camp/" target='blank'><FaInstagram size={40}/></a>
                    <a href="https://www.instagram.com/degirmen_camp/"><FaXTwitter size={40}/></a>
                </div>
            </div>
        </div>
        <Navigation/>
    </header>
  );
}

export default Header;
