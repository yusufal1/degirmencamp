const express = require('express');
const { getAllPhotos, createPhoto } = require('../controllers/photoController');

const router = express.Router();

router.get('/', getAllPhotos);
router.post('/', createPhoto);

module.exports = router;
