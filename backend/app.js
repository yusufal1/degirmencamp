const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const dotenv = require('dotenv');
const fileUpload = require('express-fileupload')
const path = require('path');

dotenv.config();
const app = express()

//Middleware
app.use('/assets', express.static(path.join(__dirname, '../frontend/src/assets')));
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(fileUpload());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', require('./routes'));


//Database connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("DB Connected");
}).catch((err) => {
    console.log(err);
})




const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda başlatıldı.`);
})