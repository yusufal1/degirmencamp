import React from 'react'
import BungalovImg from '../assets/images/gorsel-5.jpg'
import CadirImg from '../assets/images/gorsel-18.jpeg'
import KaravanImg from '../assets/images/gorsel-19.jpeg'
import { FaParking, FaBath, FaWifi, FaToilet } from "react-icons/fa";
import { FaKitchenSet } from "react-icons/fa6";
import { PiHairDryerBold } from "react-icons/pi";
import { TbAirConditioning } from "react-icons/tb";
import { MdOutlineElectricalServices } from "react-icons/md";
import { IoWater } from "react-icons/io5";

const Cards = () => {
    return (
        <section className='flex flex-col items-center px-[20%] py-10 bg-[#EFEEEA]'>
            <h2 className='text-5xl'>Seçeneklerimiz</h2>
            <div className='flex flex-row gap-10 mt-[10%]'>
                {/* Bungalov */}
                <div className='flex flex-col items-center basis-1/3'>
                    <img src={BungalovImg} alt="bungalov" className='h-[400px] w-[400px] object-cover'/>
                    <div className='flex flex-col gap-4 w-full text-center py-5'>
                        <h5 className='text-2xl'>Bungalov</h5>
                        <p className='text-sm text-gray-500 leading-6 px-2'>İçinde tuvaleti, duşu ve kliması bulunan bungalovlarımızda biri ikili diğeri tekli olmak üzere iki adet yatak bulunmaktadır. </p>                        
                    </div>
                    <div className='flex flex-row gap-5 text-gray-600'>
                        <FaParking size={30} className='hover:text-primary'/>
                        <FaBath size={30} className='hover:text-primary'/>
                        <PiHairDryerBold size={30} className='hover:text-primary'/>
                        <FaWifi size={30} className='hover:text-primary'/>
                        <TbAirConditioning size={30} className='hover:text-primary'/>
                    </div>
                    <a href="/" className='text-gray-600 hover:text-primary duration-200 mt-4'>Daha Fazlası</a>
                </div>

                {/* Çadır */}
                <div className='flex flex-col items-center basis-1/3'>
                    <img src={CadirImg} alt="çadır" className='h-[400px] w-[400px] object-cover'/>
                    <div className='flex flex-col gap-4 w-full text-center py-5'>
                        <h5 className='text-2xl'>Çadır</h5>
                        <p className='text-sm text-gray-500 leading-6 px-2'>Çadır alanlarımızda kendi çadırınızla veya bizim sağladığımız çadırlarla birlikte dere kenarında huzurla kamp yapabilirsiniz.</p>                        
                    </div>
                    <div className='flex flex-row gap-5 text-gray-600'>
                        <FaParking size={30} className='hover:text-primary'/>
                        <FaBath size={30} className='hover:text-primary'/>
                        <FaToilet size={30} className='hover:text-primary'/>
                        <FaKitchenSet size={30} className='hover:text-primary'/>
                        <FaWifi size={30} className='hover:text-primary'/>
                    </div>
                    <a href="/" className='text-gray-600 hover:text-primary duration-200 mt-4'>Daha Fazlası</a>
                </div>

                {/* Karavan */}
                <div className='flex flex-col items-center basis-1/3'>
                    <img src={KaravanImg} alt="çadır" className='h-[400px] w-[400px] object-cover'/>
                    <div className='flex flex-col gap-4 w-full text-center py-5'>
                        <h5 className='text-2xl'>Karavan</h5>
                        <p className='text-sm text-gray-500 leading-6 px-2'>Karavanlarıyla gelmek isteyen misafirlerimiz için elektrik, su, tuvalet ve internet hizmetleri sunmaktayız.</p>                        
                    </div>
                    <div className='flex flex-row gap-5 text-gray-600'>
                        <FaToilet size={30} className='hover:text-primary'/>
                        <IoWater size={30} className='hover:text-primary'/>
                        <FaWifi size={30} className='hover:text-primary'/>
                        <MdOutlineElectricalServices size={30} className='hover:text-primary'/>
                    </div>
                    <a href="/" className='text-gray-600 hover:text-primary duration-200 mt-4'>Daha Fazlası</a>
                </div>
            </div>
        </section>
    )
}

export default Cards