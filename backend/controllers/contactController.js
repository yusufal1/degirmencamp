const Contact = require('../models/Contact');

exports.saveContactForm = async (req, res) => {
  const { fullname, phoneNumber, email, message } = req.body;
  try {
    const newContact = new Contact({ fullname, phoneNumber, email, message });
    await newContact.save();
    res.status(201).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Error saving contact form: ' + error.message });
  }
};
