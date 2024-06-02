const express = require('express');
const { saveContactForm, getAllMessages } = require('../controllers/contactController');

const router = express.Router();

router.post('/', saveContactForm);
router.get('/', getAllMessages);

module.exports = router;
