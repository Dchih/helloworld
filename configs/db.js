
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const mongoDB = 'mongodb://127.0.0.1:27017/animals';
    mongoose.connect(mongoDB);
    mongoose.Promise = global.Promise;
  } catch(error) {
    console.error('Process Cannot Connected MongoDB');
    process.exit(1);
  }
}

mongoose.connection.on('connected', () => {
  console.log('DB connected')
})
mongoose.connection.on('error', (err) => {
  console.log('DB connection error: ', err)
})

const connection = mongoose.connection;

module.exports = {
  connection,
  connectDB
}

