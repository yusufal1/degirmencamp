const Booking = require('../models/Booking');

exports.saveBooking = async (req, res) => {
  const { fullname, email, phoneNumber, bookingType, checkIn, checkOut, numberOfAdults, numberOfChildren } = req.body;
  try {
    const newBooking = new Booking({ fullname, email, phoneNumber, bookingType, checkIn, checkOut, numberOfAdults, numberOfChildren });
    await newBooking.save();
    res.status(201).json({ message: 'Booking submitted successfully' });
  } catch (error) {
    console.error('Error saving booking:', error);
    res.status(400).json({ error: error.message });
  }
};

exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort('-createdAt');
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}