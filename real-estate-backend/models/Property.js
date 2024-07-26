const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
  title: String,
  price: Number,
  description: String,
  possessionDate: Date,
  location: String,
  builderName: String,
  propertyType: String,
  areaMin: Number,
  areaMax: Number,
  configuration: String,
});

module.exports = mongoose.model('Property', PropertySchema);
