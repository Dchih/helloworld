const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  first_name: { type: String, required: true, max: 100 },
  family_name: { type: String, required: true, max: 100 },
  date_of_birth: Date,
  date_of_death: Date,
})
authorSchema
  .virtual('name')
  .get(function() {
    return this.family_name + ', ' + this.first_name;
  });

authorSchema
  .virtual('lifespan')
  .get(function () {
    return this.date_of_birth + '-' + this.date_of_death;
  })

authorSchema
  .virtual('url')
  .get(function () {
    return '/catelog/author/' + this._id
  })

module.exports = mongoose.model('Author', authorSchema);