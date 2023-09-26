const mongoose = require('mongoose');

const detailsSchema = new mongoose.Schema({
  capacity: String,
  productInfo: String,
});

const bikeSchema = new mongoose.Schema({
  id: Number,
  name: String,
  rating: Number,
  price: Number,
  image: String,
  details: detailsSchema,
});

const Bike = mongoose.model('Bike', bikeSchema);

module.exports = Bike;
