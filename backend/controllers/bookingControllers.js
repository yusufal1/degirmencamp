const Booking = require('../models/Booking');
const { body, validationResult } = require('express-validator');

// const validateBooking = [
//   body('fullname').notEmpty().withMessage('Ad Soyad zorunludur.'),
//   body('email').isEmail().withMessage('Geçerli bir e-posta adresi giriniz.'),
//   body('phoneNumber').matches(/^[0-9]{10}$/).withMessage('Telefon numarası 10 haneli olmalıdır.'),
//   body('bookingType').isIn(['bungalow', 'tent', 'caravan']).withMessage('Geçersiz rezervasyon tipi.'),
//   body('checkIn').isISO8601().toDate().withMessage('Geçerli bir giriş tarihi giriniz.'),
//   body('checkOut').isISO8601().toDate().withMessage('Geçerli bir çıkış tarihi giriniz.'),
//   body('numberOfAdults').isInt({ min: 1 }).withMessage('En az 1 yetişkin olmalıdır.'),
//   body('numberOfChildren').isInt({ min: 0 }).withMessage('Çocuk sayısı negatif olamaz.')
// ];

exports.saveBooking = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, phoneNumber, bookingType, checkIn, checkOut, numberOfAdults, numberOfChildren } = req.body;

  try {
    const existingBookings = await Booking.find({
      checkIn: { $lte: checkOut },
      checkOut: { $gte: checkIn }
    });
    if (existingBookings.length >= 6) {
      return res.status(400).json({ error: 'Seçilen tarihler arasında tüm bungalovlar doludur.' });
    }
    const newBooking = new Booking({
      fullname,
      email,
      phoneNumber,
      bookingType,
      checkIn,
      checkOut,
      numberOfAdults,
      numberOfChildren
    });
    await newBooking.save();
    res.status(201).json({ message: 'Booking submitted successfully' });
  } catch (error) {
    console.error('Error saving booking:', error);
    res.status(500).json({ error: 'Internal Server Error' });
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

exports.deleteBooking = async (req, res) => {
  try {
    const bookingId = req.params.id;
    await Booking.findByIdAndDelete(bookingId);
    res.status(200).json({ message: 'Booking deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
