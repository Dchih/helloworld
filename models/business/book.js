const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: 'Author', required: true },
  summary: { type: String, required: true },
  isbn: { type: String, required: true },
  gener: [{ type: Schema.Types.ObjectId, ref: 'Gener' }]
})

bookSchema
  .virtual('url')
  .get(function() {
    return '/catelog/book/' + this._id;
  })

module.exports = mongoose.model('Book', bookSchema);