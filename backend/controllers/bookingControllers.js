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
    const adminSettings = await AdminSettings.findOne({});
    let maxBookingCount;
    let bookedCounts = {};
    let isFullyBooked = false;

    switch (bookingType) {
      case 'bungalow':
        maxBookingCount = adminSettings ? adminSettings.bungalowCount : 6;
        break;
      case 'tent':
        maxBookingCount = adminSettings ? adminSettings.tentCount : 40;
        break;
      case 'caravan':
        maxBookingCount = adminSettings ? adminSettings.caravanCount : 4;
        break;
      default:
        return res.status(400).json({ error: 'Geçersiz rezervasyon tipi.' });
    }

    const existingBookings = await Booking.find({
      bookingType: bookingType,
      checkIn: { $lte: checkOut },
      checkOut: { $gte: checkIn }
    });

    bookedCounts = calculateBookedCounts(existingBookings, checkIn, checkOut);
    isFullyBooked = isFullyBookedCheck(bookedCounts, maxBookingCount);

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

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'yusufal5558@gmail.com',
        pass: 'icwi zsbv jsce nluh'
      }
    });
    let mailOptions = {
      from: 'yusufal5558@gmail.com',
      to: email,
      subject: 'Rezervasyon Bilgilendirme',
      html: `<p>Sayın ${fullname},</p>
             <p>Rezervasyonunuz başarıyla alınmıştır. Detaylar aşağıdaki gibidir:</p>
             <p><strong>Rezervasyon Tipi:</strong> ${bookingType}</p>
             <p><strong>Giriş Tarihi:</strong> ${moment(checkIn).format('DD.MM.YYYY')}</p>
             <p><strong>Çıkış Tarihi:</strong> ${moment(checkOut).format('DD.MM.YYYY')}</p>
             <p><strong>Yetişkin Sayısı:</strong> ${numberOfAdults}</p>
             <p><strong>Çocuk Sayısı:</strong> ${numberOfChildren}</p>
             <p>Teşekkürler,</p>
             <p>Değirmen Kamp</p>`
    };

    let adminMailOptions = {
      from: 'yusufal5558@gmail.com',
      to: 'yusufal5558@gmail.com',
      subject: 'Yeni Rezervasyon Bildirimi',
      html: `<p>Yeni bir rezervasyon yapılmıştır. Detaylar aşağıdaki gibidir:</p>
             <p><strong>Ad Soyad:</strong> ${fullname}</p>
             <p><strong>E-posta:</strong> ${email}</p>
             <p><strong>Telefon:</strong> ${phoneNumber}</p>
             <p><strong>Rezervasyon Tipi:</strong> ${bookingType}</p>
             <p><strong>Giriş Tarihi:</strong> ${moment(checkIn).format('DD.MM.YYYY')}</p>
             <p><strong>Çıkış Tarihi:</strong> ${moment(checkOut).format('DD.MM.YYYY')}</p>
             <p><strong>Yetişkin Sayısı:</strong> ${numberOfAdults}</p>
             <p><strong>Çocuk Sayısı:</strong> ${numberOfChildren}</p>
             <p>Teşekkürler,</p>
             <p>Değirmen Kamp</p>`
    };

    await transporter.sendMail(mailOptions);
    await transporter.sendMail(adminMailOptions);

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
};

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
