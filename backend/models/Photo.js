const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const PhotoSchema = new Schema({
    image: String
})

const Photo = mongoose.model("Photo", PhotoSchema);

module.exports = Photo