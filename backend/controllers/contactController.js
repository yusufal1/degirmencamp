// contactControl.js

const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

exports.saveContactForm = async (req, res) => {
  const { fullname, phoneNumber, email, message } = req.body;
  try {
    const newContact = new Contact({ fullname, phoneNumber, email, message });
    await newContact.save();
    
    // E-posta gönderme işlemi
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'yusufal5558@gmail.com',
        pass: 'icwi zsbv jsce nluh'
      }
    });

    let mailOptions = {
      from: email,
      to: 'agpasha9@gmail.com',
      subject: 'İletişim Formu',
      html: `<p>Gönderen: ${fullname}</p>
             <p>E-posta: ${email}</p>
             <p>Telefon: ${phoneNumber}</p>
             <p>Mesaj: ${message}</p>`
    };

    await transporter.sendMail(mailOptions);
    
    res.status(201).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Error saving contact form: ' + error.message });
  }
};

exports.getAllMessages = async (req, res) => {
  try {
    const messages = await Contact.find().sort('-createdAt')
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
