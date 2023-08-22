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
const toy2Model = mongoose.model('toy2', toySchema, 'toy2');
module.exports = toy2Model;