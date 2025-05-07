// models/Project.js
const mongoose = require('mongoose');

const artBoards = new mongoose.Schema({
  title: String,
  urls: [String]
});

module.exports = mongoose.model('ArtBoard', artBoards);
 