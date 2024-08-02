const mongoose = require('mongoose');

const dogSchema = new mongoose.Schema({
    name:String,
    type:String,
    age:Number,
    skill:String
});
const Dog = mongoose.model('Dog', dogSchema); 

module.exports = Dog;

