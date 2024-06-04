import axios from 'axios';

export const sendContactForm = async (formData) => {
  return await axios.post('https://degirmencamp-backend.onrender.com/', formData);
};
