const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const rolePermissionSchema = new Schema({
  role_id: {
    type: Schema.Types.ObjectId,
    ref: 'Role',
    required: true
  },
  permission_id: {
    type: Schema.Types.ObjectId,
    ref: 'Permission',
    requried: true
  }
});

module.exports = mongoose.model('RolePermission', rolePermissionSchema);