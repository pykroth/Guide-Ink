// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String // hashed
});

module.exports = mongoose.model('User', userSchema);
