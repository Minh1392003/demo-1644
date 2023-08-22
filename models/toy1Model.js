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
const toy1Model = mongoose.model('toy1', toySchema, 'toy1');
module.exports = toy1Model;