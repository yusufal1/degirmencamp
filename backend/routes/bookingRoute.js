const express = require('express');
const { saveBooking, getAllBookings, deleteBooking } = require('../controllers/bookingControllers');

const router = express.Router();

router.post('/', saveBooking);
router.get('/', getAllBookings);
router.delete('/:id', deleteBooking);


module.exports = router;
