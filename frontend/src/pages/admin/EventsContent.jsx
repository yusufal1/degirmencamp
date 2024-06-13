import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EventsContent = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await fetch('http://localhost:5000/api/photos', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        toast.success('Resim başarıyla yüklendi.', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        window.location.reload();
      } else {
        console.error('Failed to upload image');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <h3 className='text-2xl'>Etkinlikler</h3>
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className='px-[10%] w-full mt-10 flex flex-col gap-5'
      >
        <span>Etkinlikler sayfasında gözükmesini istediğiniz fotoğrafları aşağıdan yükleyebilirsiniz.</span>
        <input type="file" name='image' className='border border-gray-500 p-4' />
        <button type='submit' className='border border-gray-500 w-fit px-4 py-2'>Ekle</button>
      </form>
    </div>
  );
};

export default EventsContent;
