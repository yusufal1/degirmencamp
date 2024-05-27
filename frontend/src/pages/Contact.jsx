import React from 'react'
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  return (
    <div className='xl:px-[20%] sm:px-[10%] px-4 flex py-[10%]'>
        <div className='flex md:flex-row flex-col shadow-xl w-full border border-gray-200 rounded-lg'>
        <form className='flex flex-col basis-3/5 gap-5 p-[5%]'>
            <h3 className='text-2xl'>İletişime Geçin</h3>
            <div className='flex sm:flex-row flex-col justify-between gap-5'>
            <input type="text" name='fullname' className='rounded-2xl h-10 outline-none border border-gray-500 px-4 w-full' placeholder='Ad Soyad'/>
            <input type="tel" name='phoneNumber' className='rounded-2xl h-10 outline-none border border-gray-500 px-4 w-full' placeholder='Telefon'/>
            </div>
            <input type="email" name='email' className='rounded-2xl h-10 outline-none border border-gray-500 px-4 w-full' placeholder='E-Posta'/>
            <textarea name="message" rows={8} className='rounded-2xl outline-none border border-gray-500 px-4 w-full resize-none' placeholder='Mesaj'></textarea>
        </form>
        <div className='flex flex-col basis-2/5 gap-5 p-[5%] bg-primary text-white'>
            <h3 className='text-2xl text-white'>Bize Ulaşın</h3>
            <div className='flex gap-4 items-center'>
                <div className='p-4 bg-[#54bb8d] rounded-full'>
                    <FaLocationDot className='sm:w-6 sm:h-6 w-4 h-4' color='white'/>
                </div>
                <address className='sm:text-base text-xs'>Değirmen kamp kazdağları, Zeytinli, 72. Sk. No:1, 10300 Edremit/Balıkesir</address>
            </div>
            <div className='flex gap-4 items-center'>
                <div className='p-4 bg-[#54bb8d] rounded-full'>
                    <FaPhone  className='sm:w-6 sm:h-6 w-4 h-4' color='white'/>
                </div>
                <span className='sm:text-base text-xs'>+90 535 411 30 12</span>
            </div>
            <div className='flex gap-4 items-center'>
                <div className='p-4 bg-[#54bb8d] rounded-full'>
                    <IoMdMail  className='sm:w-6 sm:h-6 w-4 h-4' color='white'/>
                </div>
                <span className='sm:text-base text-xs'>info@degirmencamp.com</span>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Contact