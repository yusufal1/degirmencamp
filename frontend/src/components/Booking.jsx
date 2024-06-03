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
import { useForm, Controller, watch } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const validationSchema = yup.object().shape({
  fullname: yup.string().required('Ad Soyad zorunludur.'),
  email: yup.string().email('Geçerli bir e-posta adresi giriniz.').required('E-posta zorunludur.'),
  phoneNumber: yup.string().matches(/^[0-9]{10}$/, 'Telefon numarası 10 haneli olmalıdır.').required('Telefon numarası zorunludur.'),
  checkIn: yup.date().required('Giriş tarihi zorunludur.').nullable(),
  checkOut: yup.date().required('Çıkış tarihi zorunludur.').nullable(),
  numberOfAdults: yup.number()
    .typeError('Yetişkin sayısı sayısal bir değer olmalıdır.')
    .min(1, 'En az 1 yetişkin olmalıdır.')
    .required('Yetişkin sayısı zorunludur.'),
  numberOfChildren: yup.number()
    .typeError('Çocuk sayısı sayısal bir değer olmalıdır.')
    .min(0, 'Çocuk sayısı negatif olamaz.')
    .required('Çocuk sayısı zorunludur.')
});


const Booking = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [bookedDates, setBookedDates] = useState([]);
  const { register, handleSubmit, control, formState: { errors }, watch } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const checkIn = watch("checkIn");

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

  const isDateBooked = date => {
    return bookedDates.some(bookedDate => moment(bookedDate).isSame(date, 'day'));
  };

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await sendBookingForm({
        ...data,
        checkIn: moment(data.checkIn).format('YYYY-MM-DD'),
        checkOut: moment(data.checkOut).format('YYYY-MM-DD')
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
      <form className='mt-[5%] grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8' onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-1'>
          <label htmlFor='fullname'>{t('fullName')}</label>
          <input
            type="text"
            id='fullname'
            name='fullname'
            className='rounded-2xl h-10 outline-none focus:outline-secondary px-4'
            placeholder='Ad Soyad'
            {...register('fullname')}
          />
          {errors.fullname && <span className='text-red-500 text-xs'>{errors.fullname.message}</span>}
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='email'>{t('email')}</label>
          <input
            type="email"
            id='email'
            name='email'
            className='rounded-2xl h-10 outline-none focus:outline-secondary px-4'
            placeholder='E-Posta'
            {...register('email')}
          />
          {errors.email && <span className='text-red-500 text-xs'>{errors.email.message}</span>}
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='phoneNumber'>{t('phone')}</label>
          <input
            type="tel"
            id='phoneNumber'
            name='phoneNumber'
            className='rounded-2xl h-10 outline-none focus:outline-secondary px-4'
            placeholder='Telefon'
            {...register('phoneNumber')}
          />
          {errors.phoneNumber && <span className='text-red-500 text-xs'>{errors.phoneNumber.message}</span>}
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='bookingType'>{t('reservationType')}</label>
          <select
            name="bookingType"
            id="bookingType"
            className='rounded-2xl h-10 outline-none focus:outline-secondary px-4'
            {...register('bookingType')}
          >
            <option value="bungalow">{t('bungalow')}</option>
            <option value="tent">{t('tent')}</option>
            <option value="caravan">{t('caravan')}</option>
          </select>
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='checkIn'>{t('checkIn')}</label>
          <Controller
            control={control}
            name="checkIn"
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                onChange={(date) => field.onChange(date)}
                filterDate={date => !isDateBooked(date)}
                dateFormat="dd.MM.yyyy"
                minDate={new Date()}
                className='rounded-2xl h-10 outline-none focus:outline-secondary px-4'
                id='checkIn'
              />
            )}
          />
          {errors.checkIn && <span className='text-red-500 text-xs'>{errors.checkIn.message}</span>}
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='checkOut'>{t('checkOut')}</label>
          <Controller
            control={control}
            name="checkOut"
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                onChange={(date) => field.onChange(date)}
                filterDate={date => !isDateBooked(date)}
                dateFormat="dd.MM.yyyy"
                minDate={checkIn || new Date()} // watch kullanılarak checkIn değerini alıyoruz
                className='rounded-2xl h-10 outline-none focus:outline-secondary px-4'
                id='checkOut'
              />
            )}
          />
          {errors.checkOut && <span className='text-red-500 text-xs'>{errors.checkOut.message}</span>}
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
            {...register('numberOfAdults')}
          />
          {errors.numberOfAdults && <span className='text-red-500 text-xs'>{errors.numberOfAdults.message}</span>}
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
            {...register('numberOfChildren')}
          />
          {errors.numberOfChildren && <span className='text-red-500 text-xs'>{errors.numberOfChildren.message}</span>}
        </div>
        {loading ? <div className='flex items-center justify-center'><LoadingSpinner /></div> : <button type='submit' className='rounded-2xl h-10 outline-none bg-secondary px-4 mt-auto'>{t('send')}</button>}
      </form>
      <ToastContainer />
    </div>
  );
}

export default Booking;
