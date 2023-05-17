const mongoose = require('mongoose');

const Schema = mongoose.Schema();

const permissionSchame = new Schema({
  name: { type: String, required: true },   // 权限名称
  route: { type: String, required: true },
  method: { 
    type: String,
    required: true,
    enum: ['GET', 'POST', 'PUT', 'DELETE', 'get', 'post', 'put', 'delete'],
    default: 'GET'
  },
  description: { type: String }
})

module.exports = mongoose.model('Permission', permissionSchame);