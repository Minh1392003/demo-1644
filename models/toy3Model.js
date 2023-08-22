var mongoose = require('mongoose');
var toySchema = mongoose.Schema({
    name: String,
    brandname: String,
    dob: Date,
    quanlity: Number,
    price: Number,
    image: String,
    des: String
})
const toy3Model = mongoose.model('toy3', toySchema, 'toy3');
module.exports = toy3Model;