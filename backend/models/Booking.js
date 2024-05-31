const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  bookingType: {
    type: String,
    required: true,
    enum: ['bungalow', 'tent', 'caravan'],
  },
  checkIn: {
    type: Date,
    required: true,
  },
  checkOut: {
    type: Date,
    required: true,
  },
  numberOfAdults: {
    type: Number,
    required: true,
    min: 1,
    max: 3
  },
  numberOfChildren: {
    type: Number,
    required: true,
    min: 0,
    max: 2
  }
}, {
  timestamps: true,
});

module.exports = mongoose.model('Booking', BookingSchema);
