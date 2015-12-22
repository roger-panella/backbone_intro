var mongoose = require('mongoose');

var PancakeSchema = new mongoose.Schema({
  ingredients: String,
  type: String,
  topping: String,
  syrup: String,
  instructions: String,
  time: String
});

module.exports = mongoose.model('Pancake', PancakeSchema)
