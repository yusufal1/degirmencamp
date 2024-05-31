import React from 'react'
import BookingTable from '../../components/admin/BookingTable'

const Bookings = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full'>
        <h3 className='text-2xl'>Rezervasyonlar</h3>
        <div className='px-[10%] w-full mt-10'>
            <BookingTable/>
        </div>
    </div>
  )
}

export default Bookings