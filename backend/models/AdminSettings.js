const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSettingsSchema = new Schema({
  name: { type: String, required: true, unique: true },
  value: { type: Number, required: true }
});

const AdminSettings = mongoose.model('AdminSettings', adminSettingsSchema);

module.exports = AdminSettings;
