import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { sendBookingForm } from '../api/bookingApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingSpinner from './LoadingSpinner';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import axios from 'axios';

const Booking = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phoneNumber: '',
    bookingType: 'bungalow',
    checkIn: '',
    checkOut: '',
    numberOfAdults: 1,
    numberOfChildren: 0
  });
  const [bookedDates, setBookedDates] = useState([]);

  useEffect(() => {
    const fetchBookedDates = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/booking');
        const bookings = response.data;
        const dates = [];

        bookings.forEach(booking => {
          const currentDate = moment(booking.checkIn);
          const end = moment(booking.checkOut);
          while (currentDate.isSameOrBefore(end, 'day')) {
            dates.push(currentDate.clone().toDate());
            currentDate.add(1, 'days');
          }
        });

        setBookedDates(dates);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookedDates();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date, name) => {
    setFormData({ ...formData, [name]: date });
  };

  const isDateBooked = date => {
    return bookedDates.some(bookedDate => moment(bookedDate).isSame(date, 'day'));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await sendBookingForm({
        ...formData,
        checkIn: moment(formData.checkIn).format('YYYY-MM-DD'),
        checkOut: moment(formData.checkOut).format('YYYY-MM-DD')
      });
      toast.success('Rezervasyonunuz başarıyla oluşturuldu.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setFormData({
        fullname: '',
        email: '',
        phoneNumber: '',
        bookingType: 'bungalow',
        checkIn: '',
        checkOut: '',
        numberOfAdults: 1,
        numberOfChildren: 0
      });
    } catch (error) {
      toast.error(error.response.data.error, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id='booking' className='bg-[#EFEEEA] py-[10%] flex items-center justify-center flex-col px-[10%]'>
      <h3 className='md:text-4xl text-2xl'>{t('booking')}</h3>
      <form className='mt-[5%] grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-1'>
          <label htmlFor='fullname'>{t('fullName')}</label>
          <input
            type="text"
            id='fullname'
            name='fullname'
            className='rounded-2xl h-10 outline-none focus:outline-secondary px-4'
            placeholder='Ad Soyad'
            value={formData.fullname}
            onChange={handleChange}
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='email'>{t('email')}</label>
          <input
            type="email"
            id='email'
            name='email'
            className='rounded-2xl h-10 outline-none focus:outline-secondary px-4'
            placeholder='E-Posta'
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='phoneNumber'>{t('phone')}</label>
          <input
            type="tel"
            id='phoneNumber'
            name='phoneNumber'
            className='rounded-2xl h-10 outline-none focus:outline-secondary px-4'
            placeholder='Telefon'
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='bookingType'>{t('reservationType')}</label>
          <select
            name="bookingType"
            id="bookingType"
            className='rounded-2xl h-10 outline-none focus:outline-secondary px-4'
            value={formData.bookingType}
            onChange={handleChange}
          >
            <option value="bungalow">{t('bungalow')}</option>
            <option value="tent">{t('tent')}</option>
            <option value="caravan">{t('caravan')}</option>
          </select>
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='checkIn'>{t('checkIn')}</label>
          <DatePicker
            selected={formData.checkIn}
            onChange={date => handleDateChange(date, 'checkIn')}
            filterDate={date => !isDateBooked(date)}
            dateFormat="dd.MM.yyyy"
            minDate={new Date()}
            className='rounded-2xl h-10 outline-none focus:outline-secondary px-4'
            id='checkIn'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='checkOut'>{t('checkOut')}</label>
          <DatePicker
            selected={formData.checkOut}
            onChange={date => handleDateChange(date, 'checkOut')}
            filterDate={date => !isDateBooked(date)}
            dateFormat="dd.MM.yyyy"
            minDate={formData.checkIn || new Date()}
            className='rounded-2xl h-10 outline-none focus:outline-secondary px-4'
            id='checkOut'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='numberOfAdults'>{t('adultNumber')}</label>
          <input
            type="number"
            id='numberOfAdults'
            name='numberOfAdults'
            min={1}
            className='rounded-2xl h-10 outline-none focus:outline-secondary px-4'
            placeholder='Yetişkin Sayısı'
            value={formData.numberOfAdults}
            onChange={handleChange}
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='numberOfChildren'>{t('childrenNumber')}</label>
          <input
            type="number"
            id='numberOfChildren'
            name='numberOfChildren'
            min={0}
            className='rounded-2xl h-10 outline-none focus:outline-secondary px-4'
            placeholder='Çocuk Sayısı'
            value={formData.numberOfChildren}
            onChange={handleChange}
          />
        </div>
        {loading ? <div className='flex items-center justify-center'><LoadingSpinner /></div> : <button type='submit' className='rounded-2xl h-10 outline-none bg-secondary px-4 mt-auto'>{t('send')}</button>}
      </form>
      <ToastContainer />
    </div>
  );
}

export default Booking;
