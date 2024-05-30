const express = require('express');
const contactRoutes = require('./contactRoute');

const router = express.Router();

router.use('/contact', contactRoutes);

module.exports = router;
