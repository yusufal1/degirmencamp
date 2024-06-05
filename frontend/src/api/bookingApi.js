import axios from 'axios';

export const sendBookingForm = async (formData) => {
  return await axios.post(`${process.env.REACT_APP_BASE_URL}/api/booking`, formData);
};
