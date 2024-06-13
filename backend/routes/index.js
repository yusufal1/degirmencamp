const express = require('express');
const contactRoutes = require('./contactRoute');
const bookingRoutes = require('./bookingRoute');
const photoRoutes = require('./photoRoute');

const router = express.Router();

router.use('/contact', contactRoutes);
router.use('/booking', bookingRoutes);
router.use('/photos', photoRoutes);

module.exports = router;
