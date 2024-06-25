const Booking = require('../models/Booking');
const { body, validationResult } = require('express-validator');
const moment = require('moment');
const nodemailer = require('nodemailer');
const AdminSettings = require('../models/AdminSettings');

exports.saveBooking = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, phoneNumber, bookingType, checkIn, checkOut, numberOfAdults, numberOfChildren, tentOption } = req.body;

  try {
    let adminSettings;
    let bookedCounts = {};
    let isFullyBooked = false;
    let maxBookingCount = 0;

    if (bookingType === 'bungalow') {
      adminSettings = await AdminSettings.findOne({ name: 'bungalowCount' });
      maxBookingCount = adminSettings ? adminSettings.value : 6;

      const existingBookings = await Booking.find({
        bookingType: 'bungalow',
        checkIn: { $lte: checkOut },
        checkOut: { $gte: checkIn }
      });

      bookedCounts = calculateBookedCounts(existingBookings, checkIn, checkOut);

      isFullyBooked = isFullyBookedCheck(bookedCounts, maxBookingCount);
    } else if (bookingType === 'tent') {
      adminSettings = await AdminSettings.findOne({ name: 'tentCount' });
      maxBookingCount = adminSettings ? adminSettings.value : 40;

      const existingBookings = await Booking.find({
        bookingType: 'tent',
        checkIn: { $lte: checkOut },
        checkOut: { $gte: checkIn }
      });

      bookedCounts = calculateBookedCounts(existingBookings, checkIn, checkOut);

      isFullyBooked = isFullyBookedCheck(bookedCounts, maxBookingCount);
    } else if (bookingType === 'caravan') {
      adminSettings = await AdminSettings.findOne({ name: 'caravanCount' });
      maxBookingCount = adminSettings ? adminSettings.value : 4;

      const existingBookings = await Booking.find({
        bookingType: 'caravan',
        checkIn: { $lte: checkOut },
        checkOut: { $gte: checkIn }
      });

      bookedCounts = calculateBookedCounts(existingBookings, checkIn, checkOut);

      isFullyBooked = isFullyBookedCheck(bookedCounts, maxBookingCount);
    }

    if (isFullyBooked) {
      return res.status(400).json({ error: `Seçilen tarihler arasında tüm ${bookingType}lar doludur.` });
    }

    const newBooking = new Booking({
      fullname,
      email,
      phoneNumber,
      bookingType,
      checkIn,
      checkOut,
      numberOfAdults,
      numberOfChildren,
      tentOption
    });

    await newBooking.save();

    // Nodemailer ve admin bildirimleri şimdilik devre dışı bırakıldı

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

// Yardımcı fonksiyonlar

function calculateBookedCounts(existingBookings, checkIn, checkOut) {
  const dateRange = generateDateRange(checkIn, checkOut);
  const bookedCounts = {};

  dateRange.forEach(date => {
    bookedCounts[date] = 0;
  });

  existingBookings.forEach(booking => {
    const bookingStart = moment(booking.checkIn);
    const bookingEnd = moment(booking.checkOut);
    let date = bookingStart;

    while (date.isSameOrBefore(bookingEnd)) {
      const formattedDate = date.format('YYYY-MM-DD');
      if (bookedCounts[formattedDate] !== undefined) {
        bookedCounts[formattedDate]++;
      }
      date = date.add(1, 'days');
    }
  });

  return bookedCounts;
}

function generateDateRange(checkIn, checkOut) {
  const dateRange = [];
  let currentDate = moment(checkIn);
  const endDate = moment(checkOut);

  while (currentDate.isSameOrBefore(endDate)) {
    dateRange.push(currentDate.format('YYYY-MM-DD'));
    currentDate = currentDate.add(1, 'days');
  }

  return dateRange;
}

function isFullyBookedCheck(bookedCounts, maxBookingCount) {
  return Object.values(bookedCounts).some(count => count >= maxBookingCount);
}
