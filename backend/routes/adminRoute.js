const express = require('express');
const {updateBungalowCount} = require('../controllers/adminControllers')

const router = express.Router();

router.put('/', updateBungalowCount);

module.exports = router;
