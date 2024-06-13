import React, { useState } from 'react';
import axios from 'axios';


const AdminSettings = () => {
  const [bungalowCount, setBungalowCount] = useState(6); // Başlangıç değeri 6 olarak varsayalım

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:5000/api/admin/settings`, {
        bungalowCount: bungalowCount
      });
      alert('Bungalov sayısı başarıyla güncellendi!');
    } catch (error) {
      console.error('Error updating bungalow count:', error);
      alert('Bungalov sayısı güncellenirken bir hata oluştu.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full gap-5">
      <h3 className='text-2xl'>Bungalov Sayısı Ayarları</h3>
      <label htmlFor="bungalowCount">Bungalov Sayısı:</label>
      <input
      className='border p-4 border-gray-500'
        type="number"
        id="bungalowCount"
        value={bungalowCount}
        onChange={(e) => setBungalowCount(parseInt(e.target.value))}
      />
      <button className='border p-4 border-gray-500' onClick={handleSave}>Kaydet</button>
    </div>
  );
};

export default AdminSettings;
