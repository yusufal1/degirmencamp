import React from 'react'

const Booking = () => {
  return (
    <div id='booking' className=' bg-[#EFEEEA] py-[10%] flex items-center justify-center flex-col px-[10%]'>
            <h3 className='md:text-4xl text-2xl'>Rezervasyonunuzu Yapın</h3>
            <form className='mt-[5%] grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='fullname'>Ad Soyad</label>
                    <input type="text" id='fullname' name='fullname' className='rounded-2xl h-10 outline-none focus:outline-secondary px-4' placeholder='Ad Soyad'/>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='email'>E-Posta</label>
                    <input type="email" id='email' name='email' className='rounded-2xl h-10 outline-none focus:outline-secondary px-4' placeholder='E-Posta'/>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='phoneNumber'>Telefon</label>
                    <input type="tel" id='phoneNumber' name='phoneNumber' className='rounded-2xl h-10 outline-none focus:outline-secondary px-4' placeholder='Telefon'/>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='bookingType'>Rezervasyon Tipi</label>
                    <select name="bookingType" id="bookingType" className='rounded-2xl h-10 outline-none focus:outline-secondary px-4'>
                        <option>Bungalov</option>
                        <option>Çadır</option>
                        <option>Karavan</option>
                    </select>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='bookingTime'>Giriş-Çıkış Zamanı</label>
                    <input type="date" id='bookingTime' name='bookingTime' className='rounded-2xl h-10 outline-none focus:outline-secondary px-4' placeholder=''/>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='numberOfAdults'>Yetişkin Sayısı</label>
                    <input type="number" id='numberOfAdults' name='numberOfAdults' min={1} className='rounded-2xl h-10 outline-none focus:outline-secondary px-4' placeholder='Yetişkin Sayısı'/>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='numberOfChildren'>Çocuk Sayısı</label>
                    <input type="number" id='numberOfChildren' name='numberOfChildren' min={1} className='rounded-2xl h-10 outline-none focus:outline-secondary px-4' placeholder='Çocuk Sayısı'/>
                </div>
                <button type='submit' className='rounded-2xl h-10 outline-none bg-secondary px-4 mt-auto'>Gönder</button>
            </form>
            </div>
  )
}

export default Booking