import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/auth/authSlice';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
        const hardcodedUsername = process.env.REACT_APP_USERNAME;
        const hardcodedPassword = process.env.REACT_APP_PASSWORD;
  
        if (username === hardcodedUsername && password === hardcodedPassword) {
            dispatch(login());
            navigate('/admin/rezervasyonlar');
        } else {
          toast.error("Kullanıcı adı veya şifre yanlış!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
    };

  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <h2 className='text-2xl'>Admin Girişi</h2>
      <div className='flex flex-col gap-4 mt-8 w-80'>
      <input
        type="text"
        placeholder="Kullanıcı Adı"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className='border border-black rounded-lg px-2 py-3'
      />
      <input
        type="password"
        placeholder="Şifre"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='border border-black rounded-lg px-2 py-3'

      />
      <button onClick={handleLogin} className='border bg-primary text-white rounded-lg px-2 py-3'>Giriş Yap</button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
