const express = require('express');
const { saveBooking, getAllBookings } = require('../controllers/bookingControllers');

const router = express.Router();

router.post('/', saveBooking); // POST isteği için
router.get('/', getAllBookings); // GET isteği için

module.exports = router;
