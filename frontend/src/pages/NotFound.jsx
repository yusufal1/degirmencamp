import React from 'react'
import ErrorSvg from '../assets/images/error.svg'

const NotFound = () => {
  return (
    <div className='bg-gray-800 flex justify-between items-center md:px-[20%] min-h-screen'>
        <div className='flex flex-col items-center'>
        <h3 className='sm:text-9xl text-6xl text-gray-300 drop-shadow-xl'>404</h3>
        <h3 className='sm:text-9xl text-6xl  text-gray-300 drop-shadow-xl'>Error</h3>
        <p className='text-gray-300 sm:text-2xl mt-5'>Aradığınız sayfa bulunamadı!</p>
        <a href="/" className='mt-10 bg-gray-300 text-black p-5 w-fit'>Ana Sayfa</a>
        </div>
        <img src={ErrorSvg} alt="error" width={300} className='mt-10'/>
    </div>
  )
}

export default NotFound