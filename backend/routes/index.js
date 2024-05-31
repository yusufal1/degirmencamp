const express = require('express');
const contactRoutes = require('./contactRoute');
const bookingRoutes = require('./bookingRoute');

const router = express.Router();

router.use('/contact', contactRoutes);
router.use('/booking', bookingRoutes);

module.exports = router;
