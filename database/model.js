const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newSchema = new Schema({
    title:String,
    time:String,
    description:String,
    image:String,
    link:String,
})

module.exports = News = mongoose.model('news', newSchema);