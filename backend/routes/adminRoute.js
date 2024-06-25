const express = require('express');
const {updateBungalowCount, updateTentCount, updateCaravanCount } = require('../controllers/adminControllers')

const router = express.Router();

router.put('/update-bungalow-count', updateBungalowCount);
router.put('/update-tent-count', updateTentCount);
router.put('/update-caravan-count', updateCaravanCount);

module.exports = router;
