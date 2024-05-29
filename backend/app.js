const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
const port = 5000

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("DB Connected");
}).catch((err) => {
    console.log(err);
})

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Welcome to the backend!');
});

app.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatıldı.`);
})