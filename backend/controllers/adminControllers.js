const AdminSettings = require('../models/AdminSettings');

exports.updateBungalowCount = async (req, res) => {
  const { bungalowCount } = req.body;

  try {
    await AdminSettings.findOneAndUpdate(
      { name: 'bungalowCount' },
      { value: bungalowCount },
      { upsert: true }
    );

    res.status(200).json({ message: 'Bungalow count updated successfully' });
  } catch (error) {
    console.error('Error updating bungalow count:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
