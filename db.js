let mongoose = require('mongoose');
require('dotenv').config();
const uri = process.env.MONGODB_URI;

class Database {
  constructor() {
    this._connect()
  }
  _connect() {
    mongoose.connect(uri)
      .then(() => {
        console.log('Database connection successful')
      })
      .catch(err => {
        console.error('Database connection error')
      })
  }
}
module.exports = new Database()