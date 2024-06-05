const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  bookingType: { type: String, enum: ['bungalow', 'tent', 'caravan'], required: true },
  checkIn: { type: Date, required: true },
  checkOut: { type: Date, required: true },
  numberOfAdults: { type: Number, required: true, min: 1 },
  numberOfChildren: { type: Number, required: true, min: 0 }
});

module.exports = mongoose.model('Booking', bookingSchema);
