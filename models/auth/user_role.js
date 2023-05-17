const mongoose = require('mongoose');
const role = require('./role');

const Schema = mongoose.Schema;

const userRoleSchema = new Schema ({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  role_id: {
    type: Schema.Types.ObjectId,
    ref: role,
    required: true
  }
});

module.exports = mongoose.model('UserRole', userRoleSchema);