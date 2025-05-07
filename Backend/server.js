// index.js
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to MongoDB');
}

app.use(express.json());

const artBoardRoutes = require('./routes/artBoard.routes.js');

app.use('/projects', artBoardRoutes);

app.listen(process.env.PORT, () => {
    console.log('Server running at ' + process.env.PORT);
});
