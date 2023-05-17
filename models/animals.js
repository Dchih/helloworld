const mongoose = require('mongoose');
/** 定义模型 */
const userSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  name: String,
  age: Number,
  email: String,
  gender: String
});

const User = mongoose.model('Dog', userSchema);

/**
 * User() 构造
 * User.instance.save()
 * User.instance.find()
 * User.instance.updateOne()
 * User.instance.deleteOne()
 */
module.exports = {
  User
}