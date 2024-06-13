const Photo = require("../models/Photo");
const fs = require('fs');
const path = require('path');

exports.getAllPhotos = async (req, res) => {
  try {
    const photos = await Photo.find({});
    res.json(photos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createPhoto = async (req, res) => {
  // Proje kök dizinini alın
  const projectRoot = path.resolve(__dirname, '../../');

  // Yükleme dizinini ayarlayın
  const uploadDir = path.join(projectRoot, 'frontend', 'src', 'assets', 'events');

  // Dizin mevcut değilse oluşturun
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  // Yüklenecek dosyanın yolunu ayarlayın
  let uploadedImage = req.files.image;
  let uploadPath = path.join(uploadDir, uploadedImage.name);

  uploadedImage.mv(uploadPath, async (err) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }

    const photo = await Photo.create({
      ...req.body,
      image: `/assets/events/${uploadedImage.name}`,
    });

    res.json(photo); // JSON yanıtı döndürün
  });
};
