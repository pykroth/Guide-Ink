// models/Project.js
const mongoose = require('mongoose');

const artBoardSchema = new mongoose.Schema({
  title: String,
  urls: [String]
});

const characterSchema = new mongoose.Schema({
  name: String,
  image: String,
  notes: String,
  references: [String]
});

const taskSchema = new mongoose.Schema({
  name: String,
  date: Date,
  tag: String
});

const projectSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: String,
  artBoards: [artBoardSchema],
  storyBoard: [characterSchema], 
  characterBoard: [characterSchema],
  calendar: [taskSchema]
});

module.exports = mongoose.model('Project', projectSchema);
