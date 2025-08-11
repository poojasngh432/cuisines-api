const mongoose = require('mongoose');

const cuisineSchema = new mongoose.Schema({
  name: String,
  dishes: [String]
});

module.exports = mongoose.model('Cuisine', cuisineSchema);