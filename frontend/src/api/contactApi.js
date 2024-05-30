import axios from 'axios';

const API_URL = 'http://localhost:5000/api/contact';

export const sendContactForm = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}`, formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
