const Booking = require('../models/Booking');
const { body, validationResult } = require('express-validator');
const moment = require('moment')
const nodemailer = require('nodemailer')

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
    // Belirtilen tarih aralığında bungalovların doluluğunu kontrol et
    const existingBookings = await Booking.find({
      bookingType: 'bungalow',
      checkIn: { $lte: checkOut },
      checkOut: { $gte: checkIn }
    });

    // Gruplayarak belirtilen tarih aralığında toplam bungalov sayısını kontrol et
    const dateRange = [];
    let currentDate = moment(checkIn);
    const endDate = moment(checkOut);
    while (currentDate.isSameOrBefore(endDate)) {
      dateRange.push(currentDate.format('YYYY-MM-DD'));
      currentDate = currentDate.add(1, 'days');
    }

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

    const isFullyBooked = dateRange.some(date => bookedCounts[date] >= 6);

    if (isFullyBooked) {
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

     // E-posta gönderme işlemi
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
             <p>Rezervasyon Ekibi</p>`
    };

    // Admin'e gönderilecek e-posta
    let adminMailOptions = {
      from: 'yusufal5558@gmail.com',
      to: 'yusufal5558@gmail.com', // Admin e-posta adresini buraya girin
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
             <p>Rezervasyon Sistemi</p>`
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
