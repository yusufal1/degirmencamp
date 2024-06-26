const express = require('express');
const { updateBungalowCount, updateTentCount, updateCaravanCount, getAdminSettings } = require('../controllers/adminControllers');

const router = express.Router();

router.put('/bungalow', updateBungalowCount);
router.put('/tent', updateTentCount);
router.put('/caravan', updateCaravanCount);
router.get('/', getAdminSettings);

module.exports = router;
