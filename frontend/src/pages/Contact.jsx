import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { sendContactForm } from '../api/contactApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingSpinner from '../components/LoadingSpinner';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const validationSchema = yup.object().shape({
    fullname: yup.string().max(50, 'En fazla 50 karakter girebilirsiniz.').required('Ad Soyad zorunludur.'),
    email: yup.string().email('Geçerli bir e-posta adresi giriniz.').required('E-posta zorunludur.'),
    phoneNumber: yup.string().matches(/^0[0-9]{10}$/, 'Telefon numarası 0 ile başlamalı ve 11 haneli olmalıdır.').required('Telefon numarası zorunludur.'),
    message: yup.string().required('Mesaj zorunludur.').max(500, 'Mesaj en fazla 500 karakter olmalıdır.')
});


  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await sendContactForm(data);
      toast.success('Mesajınız başarıyla gönderildi.', {
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
      toast.error('Lütfen tüm alanları doldurunuz!', {
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
    <div className='xl:px-[20%] sm:px-[10%] px-4 flex py-[10%]'>      
      <div className='flex md:flex-row flex-col shadow-xl w-full border border-gray-200 rounded-lg'>
        <form className='flex flex-col basis-3/5 gap-5 p-[5%]' onSubmit={handleSubmit(onSubmit)}>
          <h3 className='text-2xl'>{t('contactUs')}</h3>
          <div className='flex sm:flex-row flex-col justify-between gap-5'>
            <div className="w-full">
              <input
                type="text"
                name='fullname'
                className='rounded-2xl h-10 outline-none border border-gray-500 px-4 w-full'
                placeholder={t('fullName')}
                {...register('fullname')}
              />
              {errors.fullname && <span className='text-red-500 text-xs'>{errors.fullname.message}</span>}
            </div>
            <div className="w-full">
              <input
                type="tel"
                name='phoneNumber'
                className='rounded-2xl h-10 outline-none border border-gray-500 px-4 w-full'
                placeholder={t('phone')}
                {...register('phoneNumber')}
              />
              {errors.phoneNumber && <span className='text-red-500 text-xs'>{errors.phoneNumber.message}</span>}
            </div>
          </div>
          <div className="w-full">
            <input
              type="email"
              name='email'
              className='rounded-2xl h-10 outline-none border border-gray-500 px-4 w-full'
              placeholder={t('email')}
              {...register('email')}
            />
            {errors.email && <span className='text-red-500 text-xs'>{errors.email.message}</span>}
          </div>
          <div className="w-full">
            <textarea
              name="message"
              rows={8}
              className='rounded-2xl outline-none border border-gray-500 px-4 w-full resize-none'
              placeholder={t('message')}
              {...register('message')}
            ></textarea>
            {errors.message && <span className='text-red-500 text-xs'>{errors.message.message}</span>}
          </div>
          {loading ? <div className='flex items-center justify-center'><LoadingSpinner/></div> : <button type="submit" className='rounded-2xl bg-primary text-white h-10'>{t('send')}</button>}
        </form>
        <div className='flex flex-col basis-2/5 gap-5 p-[5%] bg-primary text-white'>
          <h3 className='text-2xl text-white'>{t('getInTouch')}</h3>
          <div className='flex gap-4 items-center'>
            <div className='p-4 bg-[#54bb8d] rounded-full'>
              <FaLocationDot className='sm:w-6 sm:h-6 w-4 h-4' color='white' />
            </div>
            <address className='sm:text-base text-xs'>Değirmen kamp kazdağları, Zeytinli, 72. Sk. No:1, 10300 Edremit/Balıkesir</address>
          </div>
          <div className='flex gap-4 items-center'>
            <div className='p-4 bg-[#54bb8d] rounded-full'>
              <FaPhone className='sm:w-6 sm:h-6 w-4 h-4' color='white' />
            </div>
            <span className='sm:text-base text-xs'>+90 535 411 30 12</span>
          </div>
          <div className='flex gap-4 items-center'>
            <div className='p-4 bg-[#54bb8d] rounded-full'>
              <IoMdMail className='sm:w-6 sm:h-6 w-4 h-4' color='white' />
            </div>
            <span className='sm:text-base text-xs'>info@degirmencamp.com</span>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Contact;
