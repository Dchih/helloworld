const mongoose = require('mongoose');

const generSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
})

generSchema
  .virtual('url')
  .get(function () {
    return '/catelog/gener/' + this._id;
  });

module.exports = mongoose.model('Gener', generSchema);