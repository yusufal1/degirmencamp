const express = require('express');
const contactRoutes = require('./contactRoute');
const bookingRoutes = require('./bookingRoute');
const photoRoutes = require('./photoRoute');
const adminRoutes = require('./adminRoute')

const router = express.Router();

router.use('/contact', contactRoutes);
router.use('/booking', bookingRoutes);
router.use('/photos', photoRoutes);
router.use('/admin/settings', adminRoutes)

module.exports = router;
