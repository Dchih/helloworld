const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, max: 100 },
  password: { type: String, required: true, min: 8, max: 18 },
  age: { type: Number, required: true, min: 0 },
  phone: { type: Number, required: true },
  birth: { type: Date, default: Date.now }
})

module.exports = mongoose.model('User', userSchema);