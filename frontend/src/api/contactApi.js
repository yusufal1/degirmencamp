import axios from 'axios';

export const sendContactForm = async (formData) => {
  return await axios.post('http://localhost:5000/api/contact', formData);
};
