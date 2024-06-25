import React, { useState } from 'react';
import axios from 'axios';


const AdminSettings = () => {
  const [bungalowCount, setBungalowCount] = useState(6);
  const [tentCount, setTentCount] = useState(40);
  const [caravanCount, setCaravanCount] = useState(4);

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:5000/api/admin/settings`, {
        bungalowCount: bungalowCount,
        tentCount: tentCount,
        caravanCount: caravanCount
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
      <label htmlFor="tentCount">Çadır Sayısı:</label>
      <input
      className='border p-4 border-gray-500'
        type="number"
        id="tentCount"
        value={tentCount}
        onChange={(e) => setTentCount(parseInt(e.target.value))}
      />
      <label htmlFor="caravanCount">Bungalov Sayısı:</label>
      <input
      className='border p-4 border-gray-500'
        type="number"
        id="caravanCount"
        value={caravanCount}
        onChange={(e) => setCaravanCount(parseInt(e.target.value))}
      />
      <button className='border p-4 border-gray-500' onClick={handleSave}>Kaydet</button>
    </div>
  );
};

export default AdminSettings;
