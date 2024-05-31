import axios from 'axios';

export const sendBookingForm = async (formData) => {
  return await axios.post('http://localhost:5000/api/booking', formData);
};
