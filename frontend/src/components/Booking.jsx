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
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector, useDispatch } from 'react-redux';

const validationSchema = yup.object().shape({
  fullname: yup.string().max(50, 'En fazla 50 karakter girebilirsiniz.').required('Ad Soyad zorunludur.'),
  email: yup.string().email('Geçerli bir e-posta adresi giriniz.').required('E-posta zorunludur.'),
  phoneNumber: yup.string().matches(/^0[0-9]{10}$/, 'Telefon numarası 0 ile başlamalı ve 11 haneli olmalıdır.').required('Telefon numarası zorunludur.'),
  bookingType: yup.string().oneOf(['bungalow', 'tent', 'caravan'], 'Geçersiz rezervasyon tipi').required('Rezervasyon tipi zorunludur.'),
  checkIn: yup.date()
    .required('Giriş tarihi zorunludur.')
    .nullable()
    .test('checkInNotEqualToCheckOut', 'Giriş tarihi çıkış tarihinden önce olmalıdır.', function(checkIn) {
      const checkOut = this.parent.checkOut;
      return !checkOut || moment(checkIn).isBefore(checkOut);
    })
    .test('checkInNotEqualToCheckOutSame', 'Giriş ve çıkış tarihleri aynı olamaz.', function(checkIn) {
      const checkOut = this.parent.checkOut;
      return !checkOut || !moment(checkIn).isSame(checkOut, 'day');
    }),
  checkOut: yup.date()
    .required('Çıkış tarihi zorunludur.')
    .nullable()
    .test('checkOutNotEqualToCheckIn', 'Çıkış tarihi giriş tarihinden sonra olmalıdır.', function(checkOut) {
      const checkIn = this.parent.checkIn;
      return !checkIn || moment(checkOut).isAfter(checkIn);
    }),
  numberOfAdults: yup.number()
    .typeError('Yetişkin sayısı sayısal bir değer olmalıdır.')
    .min(1, 'En az 1 yetişkin olmalıdır.')
    .max(3, 'En fazla 3 yetişkin olabilir.')
    .required('Yetişkin sayısı zorunludur.'),
  numberOfChildren: yup.number()
    .typeError('Çocuk sayısı sayısal bir değer olmalıdır.')
    .min(0, 'Çocuk sayısı negatif olamaz.')
    .max(2, 'En fazla 2 çocuk olabilir')
    .required('Çocuk sayısı zorunludur.')
});

const Booking = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [defaultBookingType] = useState('bungalow');
  const {
    bungalowPrice,
    tentPrice,
    tentPriceWithOwn,
    tentPriceChildren,
    tentPriceChildrenWithOwn,
    caravanPrice,
    caravanPriceWithExtra,
  } = useSelector(state => state.pricing);
  const [bookedDates, setBookedDates] = useState({ dateCounts: {}, bungalowCount: 6 });
  const { register, handleSubmit, control, formState: { errors }, watch, reset } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      bookingType: defaultBookingType
    }
  });
  const [fullyBookedDates, setFullyBookedDates] = useState([]);

  const bookingType = watch('bookingType');
  const tentOption = watch('tentOption');
  const checkIn = watch('checkIn');
  const checkOut = watch('checkOut');
  const numberOfAdults = watch('numberOfAdults');
  const numberOfChildren = watch('numberOfChildren');

  useEffect(() => {
    const fetchFullyBookedDates = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/fully-booked-dates`, {
          params: { bookingType }
        });
        setFullyBookedDates(response.data.fullyBookedDates.map(date => moment(date).toDate()));
      } catch (error) {
        console.error('Error fetching fully booked dates:', error);
      }
    };

    fetchFullyBookedDates();
  }, [bookingType]);

  const isDateFullyBooked = date => {
    return fullyBookedDates.some(fullyBookedDate => moment(date).isSame(fullyBookedDate, 'day'));
  };

  const calculateTotalPrice = (bookingType, numberOfAdults, numberOfChildren, tentOption, checkIn, checkOut) => {
    let totalPrice = 0;
    const numberOfDays = moment(checkOut).diff(moment(checkIn), 'days');

    switch (bookingType) {
      case 'bungalow':
        totalPrice = bungalowPrice * numberOfDays;
        break;
      case 'tent':
        if (tentOption === 'notOwnTent') {
          totalPrice = (tentPrice * numberOfAdults + tentPriceChildren * numberOfChildren) * numberOfDays;
        } else {
          totalPrice = (tentPriceWithOwn * numberOfAdults + tentPriceChildrenWithOwn * numberOfChildren) * numberOfDays;
        }
        break;
      case 'caravan':
        if (numberOfAdults > 2) {
          totalPrice = caravanPriceWithExtra * numberOfDays;
        } else {
          totalPrice = caravanPrice * numberOfDays;
        }
        break;
      default:
        totalPrice = 0;
        break;
    }

    return totalPrice;
  };

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const totalPrice = calculateTotalPrice(
        data.bookingType,
        data.numberOfAdults,
        data.numberOfChildren,
        data.tentOption,
        data.checkIn,
        data.checkOut
      );

      await sendBookingForm({
        ...data,
        price: totalPrice,
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

      reset();
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

  const currentTotalPrice = calculateTotalPrice(
    bookingType,
    numberOfAdults,
    numberOfChildren,
    tentOption,
    checkIn,
    watch('checkOut')
  );

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
          {errors.fullname && <span className='error-message'>{errors.fullname.message}</span>}
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
          {errors.email && <span className='error-message'>{errors.email.message}</span>}
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
          {errors.phoneNumber && <span className='error-message'>{errors.phoneNumber.message}</span>}
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
          {errors.bookingType && <span className='error-message'>{errors.bookingType.message}</span>}
        </div>
        {bookingType === 'tent' && (
          <div className='flex flex-col gap-1 my-auto'>
            <div className='flex gap-2 items-center justify-between'>
              <label>
                <input type="radio" name="tentOption" value="ownTent" {...register('tentOption')} />
                {t('haveTent')}
              </label>
              <label>
                <input type="radio" name="tentOption" value="notOwnTent" defaultChecked {...register('tentOption')} />
                {t('notHaveTent')}
              </label>
            </div>
            {errors.tentOption && <span className='error-message'>{errors.tentOption.message}</span>}
          </div>
        )}
        <div className='flex flex-col gap-1'>
          <label htmlFor='checkIn'>{t('checkIn')}</label>
          <Controller
            control={control}
            name="checkIn"
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                onChange={field.onChange}
                filterDate={date => !isDateFullyBooked(date)}
                selectsStart
                startDate={checkIn}
                endDate={checkOut}
                dateFormat="dd.MM.yyyy"
                minDate={new Date()}
                className='rounded-2xl h-10 outline-none focus:outline-secondary px-4'
                id='checkIn'
              />
            )}
          />
          {errors.checkIn && <span className='error-message'>{errors.checkIn.message}</span>}
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='checkOut'>{t('checkOut')}</label>
          <Controller
            control={control}
            name="checkOut"
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                onChange={field.onChange}
                filterDate={date => !isDateFullyBooked(date)}
                dateFormat="dd.MM.yyyy"
                startDate={checkIn}
                endDate={checkIn}
                minDate={checkIn ? moment(checkIn).add(1, 'days').toDate() : new Date()}
                className='rounded-2xl h-10 outline-none focus:outline-secondary px-4'
                id='checkOut'
              />
            )}
          />
          {errors.checkOut && <span className='error-message'>{errors.checkOut.message}</span>}
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='numberOfAdults'>{t('numberOfAdults')}</label>
          <input
            type="number"
            id='numberOfAdults'
            name='numberOfAdults'
            min={1}
            max={3}
            className='rounded-2xl h-10 outline-none focus:outline-secondary px-4'
            placeholder={t('numberOfAdults')}
            {...register('numberOfAdults')}
          />
          {errors.numberOfAdults && <span className='error-message'>{errors.numberOfAdults.message}</span>}
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='numberOfChildren'>{t('numberOfChildren')}</label>
          <input
            type="number"
            id='numberOfChildren'
            name='numberOfChildren'
            min={0}
            max={2}
            className='rounded-2xl h-10 outline-none focus:outline-secondary px-4'
            placeholder={t('numberOfChildren')}
            {...register('numberOfChildren')}
          />
          {errors.numberOfChildren && <span className='error-message'>{errors.numberOfChildren.message}</span>}
        </div>
        {loading ? <div className='flex items-center justify-center'><LoadingSpinner /></div> : <button type='submit' className='rounded-2xl h-10 outline-none bg-secondary px-4 mt-auto'>Ödeme Yap (<b>₺</b> {currentTotalPrice.toFixed(2)})</button>}
      </form>
      <ToastContainer />
    </div>
  );
};

export default Booking;
