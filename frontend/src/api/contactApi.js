import axios from 'axios';

export const sendContactForm = async (formData) => {
  return await axios.post(`${process.env.REACT_APP_BASE_URL}/api/contact`, formData);
};
