const mongoose = require('mongoose');

const adminSettingsSchema = new mongoose.Schema({
  bungalowCount: { type: Number, default: 6 },
  tentCount: { type: Number, default: 40 },
  caravanCount: { type: Number, default: 4 }
});

module.exports = mongoose.model('AdminSettings', adminSettingsSchema);
