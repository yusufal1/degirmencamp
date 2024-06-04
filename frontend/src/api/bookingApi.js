import axios from 'axios';

export const sendBookingForm = async (formData) => {
  return await axios.post('https://degirmencamp-backend.onrender.com/', formData);
};
