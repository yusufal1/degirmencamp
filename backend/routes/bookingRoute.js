const express = require('express');
const { saveBooking } = require('../controllers/bookingControllers');

const router = express.Router();

router.post('/', saveBooking);

module.exports = router;
