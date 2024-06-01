import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import { FaSort } from "react-icons/fa";

const BookingTable = () => {
  const [bookings, setBookings] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

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

  const sortedBookings = React.useMemo(() => {
    let sortableBookings = [...bookings];
    if (sortConfig.key !== null) {
      sortableBookings.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableBookings;
  }, [bookings, sortConfig]);

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  return (
    <table className="table-auto w-full border">
      <thead>
        <tr className='border'>
          <th className='bookings-table-th' onClick={() => requestSort('fullname')}>Ad Soyad <FaSort className='inline-block cursor-pointer'/></th>
          <th className='bookings-table-th' onClick={() => requestSort('checkIn')}>Giriş Tarihi <FaSort className='inline-block cursor-pointer'/></th>
          <th className='bookings-table-th' onClick={() => requestSort('checkOut')}>Çıkış Tarihi <FaSort className='inline-block cursor-pointer'/></th>
          <th className='bookings-table-th' onClick={() => requestSort('email')}>E-Posta <FaSort className='inline-block cursor-pointer'/></th>
          <th className='bookings-table-th' onClick={() => requestSort('phoneNumber')}>Telefon <FaSort className='inline-block cursor-pointer'/></th>
          <th className='bookings-table-th' onClick={() => requestSort('bookingType')}>Tip <FaSort className='inline-block cursor-pointer'/></th>
          <th className='bookings-table-th' onClick={() => requestSort('createdAt')}>Rezervasyon Oluşturma Tarihi <FaSort className='inline-block cursor-pointer'/></th>
        </tr>
      </thead>
      <tbody>
        {sortedBookings.map((booking) => (
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
            <td className='p-2 border-r'>{booking.bookingType}</td>
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
