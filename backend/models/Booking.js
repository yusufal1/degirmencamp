const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  bookingType: { type: String, enum: ['bungalow', 'tent', 'caravan'], required: true },
  tentOption: { type: String, enum: ['ownTent', 'notOwnTent'], required: function() { return this.bookingType === 'tent'; } },
  checkIn: { type: Date, required: true },
  checkOut: { type: Date, required: true },
  numberOfAdults: { type: Number, required: true, min: 1 },
  numberOfChildren: { type: Number, required: true, min: 0 },
},
{
  timestamps: true,
}
);

module.exports = mongoose.model('Booking', bookingSchema);
