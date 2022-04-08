const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Image = new Schema({
    filename: { type: String},
    urlFile: {type: String},
    dateUpload: {type: Date, default: Date.now()}
})

module.exports = mongoose.model('image', Image)