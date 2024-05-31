import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Moment from 'react-moment'; // Moment bileşenini doğru şekilde çağırın

const BookingTable = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/booking');
        setBookings(response.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <table className="table-auto w-full border">
      <thead>
        <tr className='border'>
          <th className='bookings-table-th'>Ad Soyad</th>
          <th className='bookings-table-th'>Giriş Tarihi</th>
          <th className='bookings-table-th'>Çıkış Tarihi</th>
          <th className='bookings-table-th'>E-Posta</th>
          <th className='bookings-table-th'>Telefon</th>
          <th className='bookings-table-th'>Rezervasyon Oluşturma Tarihi</th>
        </tr>
      </thead>
      <tbody>
        {bookings.map((booking) => (
          <tr key={booking._id} className='border text-sm'>
            <td className='p-2 border-r'>{booking.fullname}</td>
            <td className='p-2 border-r'>
              <Moment format="DD.MM.YYYY">{booking.checkIn}</Moment>
            </td>
            <td className='p-2 border-r'>
            <Moment format="DD.MM.YYYY">{booking.checkOut}</Moment>
            </td>
            <td className='p-2 border-r'>{booking.email}</td>
            <td className='p-2 border-r'>{booking.phoneNumber}</td>
            <td className='p-2 border-r'>
            <Moment format="DD.MM.YYYY">{booking.createdAt}</Moment>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BookingTable;
