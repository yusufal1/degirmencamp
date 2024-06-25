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

exports.updateTentCount = async (req, res) => {
  const { tentCount } = req.body;

  try {
    await AdminSettings.findOneAndUpdate(
      { name: 'tentCount' },
      { value: tentCount },
      { upsert: true }
    );

    res.status(200).json({ message: 'Tent count updated successfully' });
  } catch (error) {
    console.error('Error updating tent count:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updateCaravanCount = async (req, res) => {
  const { caravanCount } = req.body;

  try {
    await AdminSettings.findOneAndUpdate(
      { name: 'caravanCount' },
      { value: caravanCount },
      { upsert: true }
    );

    res.status(200).json({ message: 'Caravan count updated successfully' });
  } catch (error) {
    console.error('Error updating caravan count:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
