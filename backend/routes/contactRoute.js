const express = require('express');
const { saveContactForm } = require('../controllers/contactController');

const router = express.Router();

router.post('/', saveContactForm);

module.exports = router;
