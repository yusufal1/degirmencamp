const AdminSettings = require('../models/AdminSettings');

exports.getAdminSettings = async (req, res) => {
  try {
    const adminSettings = await AdminSettings.findOne({});
    res.status(200).json(adminSettings);
  } catch (error) {
    console.error('Error fetching admin settings:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updateBungalowCount = async (req, res) => {
  const { bungalowCount } = req.body;

  try {
    await AdminSettings.findOneAndUpdate(
      {},
      { bungalowCount: bungalowCount },
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
      {},
      { tentCount: tentCount },
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
      {},
      { caravanCount: caravanCount },
      { upsert: true }
    );
    res.status(200).json({ message: 'Caravan count updated successfully' });
  } catch (error) {
    console.error('Error updating caravan count:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
