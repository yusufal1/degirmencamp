import React, { useState, useEffect } from 'react';
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import logo from "../assets/images/degirmen-kamp-logo-siyah.png";
import { Fade as Hamburger } from 'hamburger-react';
import MobileNav from './MobileNav';
import Navigation from '../components/Navigation';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { i18n } = useTranslation();
    const [isOpen, setOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

    const handleLanguageChange = (e) => {
        const newLang = e.target.value;
        i18n.changeLanguage(newLang);
        setSelectedLanguage(newLang);
        localStorage.setItem('i18nextLng', newLang);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    useEffect(() => {
        const savedLanguage = localStorage.getItem('i18nextLng') || 'tr';
        setSelectedLanguage(savedLanguage);
    }, []);

    return (
        <header className='flex flex-col w-full'>
            <div className='md:h-20 h-auto flex flex-row md:gap-0 gap-5 items-center px-[5%]'>
                <div className='md:flex hidden basis-1/3 xl:flex-row xl:whitespace-nowrap flex-col xl:gap-5 gap-2 justify-center'>
                    <a className='flex items-center gap-2' href="tel:0535 411 30 12">
                        <BsFillTelephoneFill size={20} className='text-primary'/> +90 535 411 30 12
                    </a>
                    <span className='xl:block hidden'>|</span>
                    <a className='flex items-center gap-2' href="mailto:info@degirmencamp.com">
                        <IoMdMail size={20} className='text-primary'/>info@degirmencamp.com
                    </a>
                </div>
                
                <div className='md:basis-1/3 basis-full flex flex-col md:flex-row justify-center mx-auto md:mx-0 gap-4 items-center'>
                    <div className='flex flex-row justify-between md:justify-center w-full items-center'>
                        <div className='md:hidden block'>
                            <Hamburger toggled={isOpen} toggle={setOpen}/>
                        </div>
                        <a href="/"><img src={logo} alt="logo" className='md:w-[130px] w-[100px]'/></a>
                    </div>
                </div>
                
                <div className='md:flex hidden flex-row gap-4 basis-1/3 justify-end'>
                    <a href="https://www.instagram.com/degirmen_camp/" target='blank'><FaInstagram size={40}/></a>
                    <select className='outline-none px-2' value={selectedLanguage} onChange={handleLanguageChange}>
                        <option value="tr">TR</option>
                        <option value="en">EN</option>
                    </select>
                </div>
            </div>
            <div className={`fixed top-12 left-0 h-[calc(100vh-3rem)] w-full bg-primary z-40 md:hidden transform transition-transform duration-500 ease-out ${isOpen ? 'animate-slideDown' : 'hidden'}`}>
                <div className='flex flex-col items-center pt-[10%] h-full'>
                    <MobileNav />
                </div>
            </div>
            <Navigation />
        </header>
    );
};

export default Header;
