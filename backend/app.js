const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express()

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));


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