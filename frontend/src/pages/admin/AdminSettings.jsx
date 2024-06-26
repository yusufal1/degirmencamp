import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminSettings = () => {
  const [bungalowCount, setBungalowCount] = useState(6);
  const [tentCount, setTentCount] = useState(40);
  const [caravanCount, setCaravanCount] = useState(4);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/admin/settings');
        setBungalowCount(response.data.bungalowCount);
        setTentCount(response.data.tentCount);
        setCaravanCount(response.data.caravanCount);
      } catch (error) {
        console.error('Error fetching settings:', error);
      }
    };

    fetchSettings();
  }, []);

  const handleSave = async (type, count) => {
    try {
      await axios.put(`http://localhost:5000/api/admin/settings/${type}`, {
        [`${type}Count`]: count
      });
      alert(`${type} sayısı başarıyla güncellendi!`);
    } catch (error) {
      console.error(`Error updating ${type} count:`, error);
      alert(`${type} sayısı güncellenirken bir hata oluştu.`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full gap-5">
      <h3 className='text-2xl'>Ayarları Güncelle</h3>
      <div>
        <label htmlFor="bungalowCount">Bungalov Sayısı:</label>
        <input
          className='border p-4 border-gray-500'
          type="number"
          id="bungalowCount"
          value={bungalowCount}
          onChange={(e) => setBungalowCount(parseInt(e.target.value))}
        />
        <button className='border p-4 border-gray-500' onClick={() => handleSave('bungalow', bungalowCount)}>Kaydet</button>
      </div>
      <div>
        <label htmlFor="tentCount">Çadır Sayısı:</label>
        <input
          className='border p-4 border-gray-500'
          type="number"
          id="tentCount"
          value={tentCount}
          onChange={(e) => setTentCount(parseInt(e.target.value))}
        />
        <button className='border p-4 border-gray-500' onClick={() => handleSave('tent', tentCount)}>Kaydet</button>
      </div>
      <div>
        <label htmlFor="caravanCount">Karavan Sayısı:</label>
        <input
          className='border p-4 border-gray-500'
          type="number"
          id="caravanCount"
          value={caravanCount}
          onChange={(e) => setCaravanCount(parseInt(e.target.value))}
        />
        <button className='border p-4 border-gray-500' onClick={() => handleSave('caravan', caravanCount)}>Kaydet</button>
      </div>
    </div>
  );
};

export default AdminSettings;
