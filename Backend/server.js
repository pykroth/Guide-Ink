// index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const userRoutes = require('./routes/userRoutes');
const projectRoutes = require('./routes/projectRoutes');

mongoose.connect('mongodb://localhost:27017/creative_project_app');

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/projects', projectRoutes);

app.listen(3000, () => {
    console.log('Server running at 3000');
    connectMongoDB();
});
